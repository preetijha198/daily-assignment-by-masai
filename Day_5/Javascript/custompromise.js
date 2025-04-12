class MyPromise {
    constructor(executor) {
      this.state = 'pending';
      this.value = undefined;
      this.reason = undefined;
  
      this.thenCallbacks = [];
      this.catchCallbacks = [];
  
      const resolve = (value) => {
        if (this.state === 'pending') {
          this.state = 'fulfilled';
          this.value = value;
          this.thenCallbacks.forEach(cb => cb(value));
        }
      };
  
      const reject = (reason) => {
        if (this.state === 'pending') {
          this.state = 'rejected';
          this.reason = reason;
          this.catchCallbacks.forEach(cb => cb(reason));
        }
      };
  
      try {
        executor(resolve, reject);
      } catch (error) {
        reject(error);
      }
    }
  
    then(onFulfilled) {
      return new MyPromise((resolve, reject) => {
        const handleThen = (value) => {
          try {
            const result = onFulfilled(value);
            resolve(result);
          } catch (err) {
            reject(err);
          }
        };
  
        if (this.state === 'fulfilled') {
          handleThen(this.value);
        } else if (this.state === 'pending') {
          this.thenCallbacks.push(handleThen);
        }
      });
    }
  
    catch(onRejected) {
      return new MyPromise((resolve, reject) => {
        const handleCatch = (reason) => {
          try {
            const result = onRejected(reason);
            resolve(result);
          } catch (err) {
            reject(err);
          }
        };
  
        if (this.state === 'rejected') {
          handleCatch(this.reason);
        } else if (this.state === 'pending') {
          this.catchCallbacks.push(handleCatch);
        }
      });
    }
  }
  
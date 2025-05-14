/*Write a function `deepCopy` that accepts an object and returns a deep copy of that object.

- **Requirements**:
    - If the object contains nested objects, make sure the nested objects are also copied and not referenced.*/

    function deepCopy(obj) {

        if (obj === null || typeof obj !== 'object') {
            return obj;
        }
    
        if (Array.isArray(obj)) {
            return obj.map(item => deepCopy(item));
        }

        const copiedObj = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                copiedObj[key] = deepCopy(obj[key]);
            }
        }
    
        return copiedObj;
    }
    
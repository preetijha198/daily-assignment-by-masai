// JavaScript Program to left rotate the array by d positions
// by rotating one element at a time

// Function to left rotate array by d positions
function rotateArr(arr, d) {
    let n = arr.length;

    for (let i = 0; i < d; i++) {
      
        let first = arr[0];
        for (let j = 0; j < n - 1; j++) {
            arr[j] = arr[j + 1];
        }
        arr[n - 1] = first;
    }
}

let arr = [1, 2, 3, 4, 5, 6];
let d = 2;

rotateArr(arr, d);

console.log(arr.join(" "));

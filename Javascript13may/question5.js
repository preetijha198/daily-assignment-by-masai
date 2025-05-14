/*Write a function `mergeObjects` that accepts two objects and merges them into one. If both objects have a property with the same key, the second object’s property value should overwrite the first’s.*/


function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

function getData(value: any) {
    return value;
}

console.log(getData("Adi").length);  // 3
console.log(getData(123).length);  // undefined


// Generic
function myData<T>(value: T) {
    return value;
}

console.log(myData("Adi").length);  // 3
console.log(myData(123).length);  // error, method length can't assign to number
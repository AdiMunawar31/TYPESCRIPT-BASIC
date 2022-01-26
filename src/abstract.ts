abstract class Vehicle {
    abstract wheels: number;

    start(): void {
        console.log("Machine Started!");

    }
}

class Car extends Vehicle {
    wheels: number = 4;
}

class Bike extends Vehicle {
    wheels: number = 2;
}

let car = new Car();
console.log(car.wheels);
car.start();

let bike = new Bike();
console.log(bike.wheels);
bike.start();

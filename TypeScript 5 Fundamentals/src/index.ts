/**
 * GoMyCode — TypeScript 5 Fundamentals Checkpoint
 * Exercise: Vehicle Interface & Car Class Implementation
 */

// 1. Define the Vehicle interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Optional generic vehicle demonstrating the interface specification
// "start method which returns void and logs 'Engine started' to the console"
const genericVehicle: Vehicle = {
  make: "Generic Motors",
  model: "Base Model",
  year: 2020,
  start(): void {
    console.log("Engine started");
  },
};

// 2. Implement the Car class implementing the Vehicle interface
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  // Constructor initializes make, model, and year
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Implement the start method to log "Car engine started"
  start(): void {
    console.log("Car engine started");
  }

  // Helper method to display car details
  getDetails(): string {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

// 3. Create an instance of the Car class with sample values
const myCar = new Car("Toyota", "Supra", 2024);

// 4. Print car details and call the start method
console.log("--- TypeScript 5 Fundamentals Checkpoint ---");
console.log(`Car Instance Created: ${myCar.getDetails()}`);
console.log(`Make: ${myCar.make}, Model: ${myCar.model}, Year: ${myCar.year}`);
console.log("Calling myCar.start():");
myCar.start();

// Also demonstrate generic vehicle start method
console.log("\nCalling genericVehicle.start():");
genericVehicle.start();

export { Vehicle, Car, myCar };

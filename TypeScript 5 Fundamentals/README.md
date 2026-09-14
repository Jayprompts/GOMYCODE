# TypeScript 5 Fundamentals Checkpoint

This project solves the **TypeScript 5 Fundamentals** checkpoint exercise by defining a `Vehicle` interface, implementing a `Car` class adhering to that interface, instantiating it, invoking the `start` method, compiling to JavaScript, and executing with Node.js.

---

## 🎯 Objectives Completed

1. **`Vehicle` Interface**:
   - `make`: string
   - `model`: string
   - `year`: number
   - `start()`: returns void

2. **`Car` Class**:
   - Implements `Vehicle` interface.
   - Constructor initializes `make`, `model`, and `year`.
   - `start()` method logs `"Car engine started"` to the console.

3. **Instantiation & Method Call**:
   - Instantiated with `new Car("Toyota", "Supra", 2024)`.
   - Invoked `myCar.start()` verifying `"Car engine started"` is logged.

4. **Compilation & Execution**:
   - Compiled with TypeScript compiler (`tsc`) to `dist/index.js`.
   - Executed via `node dist/index.js`.

---

## 🗂️ Project Structure

```text
TypeScript 5 Fundamentals/
├── src/
│   └── index.ts        # Vehicle interface & Car class implementation
├── dist/
│   ├── index.js        # Compiled JavaScript output
│   └── index.d.ts      # Generated TypeScript type definitions
├── tsconfig.json       # TypeScript compiler options
├── package.json
└── README.md
```

---

## 🚀 How to Compile & Run

1. Navigate to the project directory:
   ```bash
   cd "TypeScript 5 Fundamentals"
   ```

2. Compile TypeScript into JavaScript:
   ```bash
   npx tsc
   ```

3. Run the compiled JavaScript code:
   ```bash
   node dist/index.js
   ```

Or run both in one step:
```bash
npm run dev
```

---

## 💻 Code Snippet

```typescript
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

const myCar = new Car("Toyota", "Supra", 2024);
myCar.start(); // Logs: "Car engine started"
```

# Building React Apps with TypeScript Checkpoint

This project completes the **Building React Apps with TypeScript** checkpoint by converting both functional (`Greeting`) and class (`Counter`) React components to TypeScript, with in-depth step-by-step documentation and type safety best practices.

---

## 🎯 Conversion Overview

### 1. Code 01: `Greeting` (Functional Component)

#### Original JavaScript
```javascript
import React from 'react'; 
const Greeting = ({ name }) => { 
  return <div>Hello, {name}!</div>;
};
export default Greeting;
```

#### Step-by-Step Conversion Description
1. **Rename File Extension**:
   - Change `Greeting.js` to `Greeting.tsx` to enable TypeScript JSX support.
2. **Define the Props Interface (`GreetingProps`)**:
   - In JavaScript, props are untyped and prone to `undefined` or incorrect data type errors.
   - We create an interface `GreetingProps`:
     ```typescript
     export interface GreetingProps {
       name: string;
     }
     ```
   - This enforces at compile time that callers must provide a `name` prop of type `string`.
3. **Annotate Component Parameters & Return Type**:
   - Type the destructured parameter: `({ name }: GreetingProps)`
   - Set the return type to `React.JSX.Element` (or type the variable as `React.FC<GreetingProps>`).
4. **Export Types & Component**:
   - Export both `Greeting` and `GreetingProps` for reusability.

#### Converted TypeScript ([src/Greeting.tsx](file:///Users/knix/Desktop/Jaysprompt/GoMyCode/HTML/Building%20React%20Apps%20with%20TypeScript/src/Greeting.tsx))
```typescript
import React from 'react';

export interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }: GreetingProps): React.JSX.Element => {
  return (
    <div className="greeting-card">
      <h2>Hello, {name}!</h2>
    </div>
  );
};

export default Greeting;
```

---

### 2. Code 02: `Counter` (Class Component)

#### Original JavaScript
```javascript
import React, { Component } from 'react'; 
class Counter extends Component { 
  state = {
    count: 0
  }; 
  increment = () => {
    this.setState({ count: this.state.count + 1 }); 
  }; 
  render() { 
    return 
    ( <div> 
      <p>Count: {this.state.count}</p> 
      <button onClick={this.increment}>Increment</button> 
    </div> );
  }
} 
export default Counter;
```

#### Step-by-Step Conversion Description
1. **Rename File Extension**:
   - Change `Counter.js` to `Counter.tsx`.
2. **Define Props Interface (`CounterProps`)**:
   - Explicitly declare the props contract:
     ```typescript
     export interface CounterProps {
       initialCount?: number;
     }
     ```
3. **Define State Interface (`CounterState`)**:
   - Explicitly define the state contract:
     ```typescript
     export interface CounterState {
       count: number;
     }
     ```
   - This guarantees that `this.state.count` is always treated as a `number`.
4. **Supply Generics to `React.Component`**:
   - Extend `Component<CounterProps, CounterState>`:
     ```typescript
     class Counter extends Component<CounterProps, CounterState>
     ```
   - Informs TypeScript about the shape of both `this.props` and `this.state`.
5. **Fix JavaScript ASI (Automatic Semicolon Insertion) Return Bug**:
   - In the original JavaScript code, `return` was placed on a separate line before `( <div>`. In JavaScript, this causes Automatic Semicolon Insertion, returning `undefined` and causing React to throw a runtime error.
   - We fix this by placing `return (` on the same line.
6. **Type Class Properties & Method Signatures**:
   - State property: `state: CounterState = { count: this.props.initialCount ?? 0 };`
   - Arrow methods: `increment = (): void => { ... }`
   - Render method: `render(): React.ReactNode { ... }`

#### Converted TypeScript ([src/Counter.tsx](file:///Users/knix/Desktop/Jaysprompt/GoMyCode/HTML/Building%20React%20Apps%20with%20TypeScript/src/Counter.tsx))
```typescript
import React, { Component } from 'react';

export interface CounterProps {
  initialCount?: number;
}

export interface CounterState {
  count: number;
}

class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: this.props.initialCount ?? 0,
  };

  increment = (): void => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render(): React.ReactNode {
    return (
      <div className="counter-card">
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

---

## 🗂️ Project Structure

```text
Building React Apps with TypeScript/
├── public/
│   ├── index.html                 # App entry page with typography
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── Greeting.tsx               # Converted Code 01 with in-depth comments
│   ├── Counter.tsx                # Converted Code 02 with in-depth comments
│   ├── App.tsx                    # Interactive dashboard demonstrating both components
│   ├── App.test.tsx               # Automated Jest unit tests
│   ├── index.css                  # Modern dark glassmorphic styling
│   └── index.tsx                  # React 19 TypeScript root mount
├── tsconfig.json                  # Strict TypeScript configuration
├── package.json
└── README.md
```

---

## 🚀 How to Run & Verify

1. Navigate to the project directory:
   ```bash
   cd "Building React Apps with TypeScript"
   ```

2. Run TypeScript type check (zero errors):
   ```bash
   npx tsc --noEmit
   ```

3. Run automated unit tests:
   ```bash
   npm test -- --watchAll=false
   ```

4. Build production bundle:
   ```bash
   npm run build
   ```

5. Start the development server:
   ```bash
   npm start
   ```

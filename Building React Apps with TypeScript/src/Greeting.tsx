import React from 'react';

/**
 * ============================================================================
 * CONVERSION STEP 1: Define Props Interface
 * ============================================================================
 * In JavaScript, props are untyped and can receive anything or be undefined.
 * In TypeScript, we declare an `interface` (or `type`) describing the shape
 * and data types of all expected props.
 *
 * Here, `name` must be a `string`. If a developer passes a number, boolean,
 * or omits `name`, the TypeScript compiler will immediately flag an error.
 */
export interface GreetingProps {
  /** The name of the person to greet */
  name: string;
}

/**
 * ============================================================================
 * CONVERSION STEP 2: Annotate the Component with the Props Type
 * ============================================================================
 * We destructured `{ name }` from the props object and typed it with `GreetingProps`.
 *
 * Benefits:
 * 1. Full IDE Autocomplete & IntelliSense for `props.name`.
 * 2. Strict Compile-Time Type Checking — prevents passing invalid prop types.
 * 3. Explicit return type `React.JSX.Element` ensures the function returns valid JSX.
 *
 * Alternatively, we can use `React.FC<GreetingProps>`:
 *   const Greeting: React.FC<GreetingProps> = ({ name }) => { ... };
 * Both approaches are standard; typing the parameter directly is widely favored
 * in modern React + TypeScript development.
 */
const Greeting: React.FC<GreetingProps> = ({ name }: GreetingProps): React.JSX.Element => {
  return (
    <div className="greeting-card">
      <div className="greeting-avatar" aria-hidden="true">
        👋
      </div>
      <div className="greeting-content">
        <span className="greeting-tag">Functional Component</span>
        <h2 className="greeting-text">Hello, {name}!</h2>
        <p className="greeting-subtext">
          Typed successfully with TypeScript <code>GreetingProps</code> interface.
        </p>
      </div>
    </div>
  );
};

export default Greeting;

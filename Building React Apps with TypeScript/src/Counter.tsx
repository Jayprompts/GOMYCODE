import React, { Component } from 'react';

/**
 * ============================================================================
 * CONVERSION STEP 1: Define Props Interface
 * ============================================================================
 * Even if the component currently takes no required props, defining an explicit
 * `CounterProps` interface creates a clean contract. We can also support an optional
 * `initialCount?: number` for enhanced flexibility.
 */
export interface CounterProps {
  /** Optional initial counter value (defaults to 0) */
  initialCount?: number;
}

/**
 * ============================================================================
 * CONVERSION STEP 2: Define State Interface
 * ============================================================================
 * In JavaScript, `this.state` is dynamic and untyped.
 * In TypeScript, we declare `CounterState` specifying that `count` must be a `number`.
 * This prevents accidental state mutations such as `this.setState({ count: "one" })`
 * or accessing non-existent state properties like `this.state.total`.
 */
export interface CounterState {
  /** Current counter value */
  count: number;
}

/**
 * ============================================================================
 * CONVERSION STEP 3: Pass Props and State Generics to React.Component
 * ============================================================================
 * `Component<P, S>` is a generic class provided by `@types/react`:
 * - `P` defines the type of `this.props`.
 * - `S` defines the type of `this.state`.
 *
 * Extending `Component<CounterProps, CounterState>` binds these types, giving us:
 * 1. Autocomplete for `this.props` and `this.state`.
 * 2. Type-safe `this.setState((prevState) => ...)` callbacks.
 * 3. Compile-time verification that `this.state` matches `CounterState`.
 */
class Counter extends Component<CounterProps, CounterState> {
  /**
   * CONVERSION STEP 4: Type the State Initialization
   * Explicitly typing `state: CounterState` guarantees that the initial state
   * adheres strictly to our declared interface.
   */
  state: CounterState = {
    count: this.props.initialCount ?? 0,
  };

  /**
   * CONVERSION STEP 5: Add Return Type to Method
   * Typing `increment` as an arrow function with `: void` return type
   * preserves lexical `this` binding while documenting that it does not return a value.
   */
  increment = (): void => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  /**
   * Optional helper method: Decrement counter
   */
  decrement = (): void => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  /**
   * Optional helper method: Reset counter
   */
  reset = (): void => {
    this.setState({
      count: this.props.initialCount ?? 0,
    });
  };

  /**
   * ============================================================================
   * CONVERSION STEP 6: Fix Syntax Bug & Type Render Method
   * ============================================================================
   * Bug in Original JavaScript code:
   *   return
   *   ( <div> ... );
   * In JavaScript, a newline right after `return` triggers Automatic Semicolon
   * Insertion (ASI), effectively executing `return;` (returning undefined),
   * causing React to crash with "Nothing was returned from render".
   *
   * Fix: We place `return (` on the same line and type `render(): React.ReactNode`.
   */
  render(): React.ReactNode {
    return (
      <div className="counter-card">
        <div className="counter-header">
          <span className="counter-tag">Class Component</span>
          <h3 className="counter-title">Interactive Counter</h3>
        </div>

        <div className="counter-display" aria-live="polite">
          <span className="counter-label">Current Count</span>
          <p className="counter-value" data-testid="count-value">
            {this.state.count}
          </p>
        </div>

        <div className="counter-actions">
          <button
            type="button"
            className="btn-counter btn-decrement"
            onClick={this.decrement}
            title="Decrement count by 1"
          >
            −
          </button>
          <button
            type="button"
            className="btn-counter btn-increment"
            onClick={this.increment}
            title="Increment count by 1"
          >
            + Increment
          </button>
          <button
            type="button"
            className="btn-counter btn-reset"
            onClick={this.reset}
            title="Reset count to 0"
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;

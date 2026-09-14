import React, { act } from 'react';
import ReactDOM from 'react-dom/client';
import Greeting from './Greeting';
import Counter from './Counter';
import App from './App';

global.IS_REACT_ACT_ENVIRONMENT = true;

describe('Building React Apps with TypeScript — Component Tests', () => {
  let container: HTMLDivElement | null = null;
  let root: ReactDOM.Root | null = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = ReactDOM.createRoot(container);
  });

  afterEach(() => {
    if (root && container) {
      act(() => {
        root.unmount();
      });
      container.remove();
      container = null;
      root = null;
    }
  });

  test('Code 01: Greeting renders expected greeting with name prop', async () => {
    await act(async () => {
      root!.render(<Greeting name="John Doe" />);
    });

    expect(container!.textContent).toContain('Hello, John Doe!');
  });

  test('Code 02: Counter renders initial count and increments on button click', async () => {
    await act(async () => {
      root!.render(<Counter initialCount={5} />);
    });

    expect(container!.textContent).toContain('5');

    const incrementButton = container!.querySelector('.btn-increment') as HTMLButtonElement;
    expect(incrementButton).not.toBeNull();

    await act(async () => {
      incrementButton.click();
    });

    expect(container!.textContent).toContain('6');
  });

  test('App mounts successfully and renders both converted components', async () => {
    await act(async () => {
      root!.render(<App />);
    });

    expect(container!.textContent).toContain('Building React Apps with TypeScript');
    expect(container!.textContent).toContain('Code 01: Functional Component');
    expect(container!.textContent).toContain('Code 02: Class Component');
  });
});

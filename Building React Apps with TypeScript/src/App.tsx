import React, { useState } from 'react';
import Greeting from './Greeting';
import Counter from './Counter';

const App: React.FC = (): React.JSX.Element => {
  const [userName, setUserName] = useState<string>('Alex Johnson');
  const [activeTab, setActiveTab] = useState<'greeting' | 'counter'>('greeting');

  return (
    <div className="app-wrapper">
      <div className="app-container">
        {/* Header */}
        <header className="app-header">
          <div className="badge-checkpoint">GoMyCode — TypeScript Checkpoint</div>
          <h1 className="app-title">Building React Apps with TypeScript</h1>
          <p className="app-subtitle">
            Converting JavaScript Functional and Class Components to fully typed{' '}
            <strong>TypeScript</strong>
          </p>
        </header>

        {/* Live Interactive Component Demo Cards */}
        <div className="demo-grid">
          {/* Section 1: Code 01 — Greeting */}
          <section className="demo-section" aria-label="Greeting Component Section">
            <div className="section-header">
              <span className="section-pill pill-func">Code 01: Functional Component</span>
              <h2 className="section-title">&lt;Greeting /&gt;</h2>
            </div>

            <div className="interactive-controls">
              <label htmlFor="name-input" className="control-label">
                Test Dynamic Name Prop:
              </label>
              <div className="input-row">
                <input
                  id="name-input"
                  type="text"
                  className="text-input"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter name..."
                />
                <button
                  type="button"
                  className="btn-quick-name"
                  onClick={() => setUserName('Sarah Connor')}
                >
                  Sarah
                </button>
                <button
                  type="button"
                  className="btn-quick-name"
                  onClick={() => setUserName('Bruce Wayne')}
                >
                  Bruce
                </button>
              </div>
            </div>

            {/* Render Converted Component */}
            <div className="component-preview">
              <Greeting name={userName || 'Friend'} />
            </div>
          </section>

          {/* Section 2: Code 02 — Counter */}
          <section className="demo-section" aria-label="Counter Component Section">
            <div className="section-header">
              <span className="section-pill pill-class">Code 02: Class Component</span>
              <h2 className="section-title">&lt;Counter /&gt;</h2>
            </div>

            <p className="section-desc">
              State-driven class component with generic <code>Component&lt;Props, State&gt;</code>{' '}
              and fixed return syntax.
            </p>

            {/* Render Converted Component */}
            <div className="component-preview">
              <Counter initialCount={0} />
            </div>
          </section>
        </div>

        {/* Step-by-Step Conversion Documentation Panel */}
        <section className="walkthrough-panel" aria-label="Conversion Walkthrough">
          <div className="panel-nav">
            <button
              type="button"
              className={`nav-tab ${activeTab === 'greeting' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('greeting')}
            >
              Code 01: Greeting.tsx Conversion Steps
            </button>
            <button
              type="button"
              className={`nav-tab ${activeTab === 'counter' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('counter')}
            >
              Code 02: Counter.tsx Conversion Steps
            </button>
          </div>

          <div className="panel-content">
            {activeTab === 'greeting' ? (
              <div className="steps-container">
                <div className="step-item">
                  <div className="step-badge">Step 1</div>
                  <div className="step-body">
                    <h4>Declare the Props Interface</h4>
                    <p>
                      In JavaScript, props are untyped. In TypeScript, we declare a contract:{' '}
                      <code>interface GreetingProps &#123; name: string; &#125;</code>. This prevents
                      runtime errors from missing or improperly typed props.
                    </p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-badge">Step 2</div>
                  <div className="step-body">
                    <h4>Annotate the Component &amp; Destructure Props</h4>
                    <p>
                      Annotate the parameter as <code>(&#123; name &#125;: GreetingProps)</code> and
                      optionally specify the return type as <code>React.JSX.Element</code> or use{' '}
                      <code>React.FC&lt;GreetingProps&gt;</code>.
                    </p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-badge">Step 3</div>
                  <div className="step-body">
                    <h4>Add File Extension (.tsx) &amp; Export</h4>
                    <p>
                      Save the file as <code>Greeting.tsx</code> so the TypeScript compiler recognizes
                      JSX syntax and compiles it with zero errors.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="steps-container">
                <div className="step-item">
                  <div className="step-badge">Step 1</div>
                  <div className="step-body">
                    <h4>Define Props &amp; State Interfaces</h4>
                    <p>
                      Define <code>interface CounterProps &#123;&#125;</code> and{' '}
                      <code>interface CounterState &#123; count: number; &#125;</code>.
                    </p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-badge">Step 2</div>
                  <div className="step-body">
                    <h4>Supply Generics to React.Component</h4>
                    <p>
                      Extend <code>Component&lt;CounterProps, CounterState&gt;</code> so TypeScript
                      accurately types <code>this.props</code>, <code>this.state</code>, and{' '}
                      <code>this.setState</code>.
                    </p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-badge">Step 3</div>
                  <div className="step-body">
                    <h4>Fix JavaScript ASI (Automatic Semicolon Insertion) Bug</h4>
                    <p>
                      In the original code, <code>return</code> was placed on its own line before{' '}
                      <code>( &lt;div&gt;</code>, which triggers JavaScript&apos;s ASI bug returning{' '}
                      <code>undefined</code>. Moving <code>return (</code> to the same line fixes
                      this completely.
                    </p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-badge">Step 4</div>
                  <div className="step-body">
                    <h4>Type Method Returns</h4>
                    <p>
                      Type <code>increment = (): void =&gt; ...</code> and{' '}
                      <code>render(): React.ReactNode</code>.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="app-footer">
          <p>
            Building React Apps with TypeScript Checkpoint • Built with <strong>React 19</strong> &amp;{' '}
            <strong>TypeScript</strong>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;

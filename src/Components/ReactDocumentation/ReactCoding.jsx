import React, { useState } from "react";

function CodeExamples() {
  const [FunctionalComponents] = useState(`const Greeting = () => <h1>Hello, World!</h1>;
`);
const [ClassComponents] = useState(`class Greeting extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}
`);
const [ModernApproach] = useState(`import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
};

export default Counter;
`);
const [OldApproach] = useState(`import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
};

export default Counter;
`);
const [StateManagement] = useState(`import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;

const App = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);

export default App;
`);
const [PropsinFunctional] = useState(`const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// Using the component with props
const App = () => {
  return <Greeting name="Farhad" />;
};

export default App;
`);
  const [PropsinClass] = useState(`class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

const App = () => {
  return <Greeting name="Farhad" />;
};

export default App;
`);
const [PropsvsState] = useState(`import React, { useState } from "react";

// Child component receives props
const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// Parent component manages state
const App = () => {
  const [user, setUser] = useState("Farhad");

  return (
    <div>
      <Greeting name={user} />  {/* Passing state as props */}
      <button onClick={() => setUser("John")}>Change Name</button>
    </div>
  );
};

export default App;
`);
const [ParenttoChild] = useState(`const Child = ({ message }) => {
  return <h2>{message}</h2>;
};

const Parent = () => {
  return <Child message="Hello from Parent!" />;
};

export default Parent;
`);
const [ChildtoParent] = useState(`const Child = ({ sendDataToParent }) => {
  return (
    <button onClick={() => sendDataToParent("Data from Child")}>
      Send Data
    </button>
  );
};

const Parent = () => {
  const handleData = (data) => {
    alert(data);
  };

  return <Child sendDataToParent={handleData} />;
};

export default Parent;
`);
const [SiblingCommunication] = useState(`const SiblingOne = ({ updateMessage }) => {
  return <button onClick={() => updateMessage("Hello from SiblingOne!")}>Send</button>;
};

const SiblingTwo = ({ message }) => {
  return <h2>{message}</h2>;
};

const Parent = () => {
  const [message, setMessage] = React.useState("");

  return (
    <div>
      <SiblingOne updateMessage={setMessage} />
      <SiblingTwo message={message} />
    </div>
  );
};

export default Parent;
`);
const [ContextAPI] = useState(`const DataContext = React.createContext();

const Child = () => {
  const message = React.useContext(DataContext);
  return <h2>{message}</h2>;
};

const Parent = () => {
  return (
    <DataContext.Provider value="Hello from Context!">
      <Child />
    </DataContext.Provider>
  );
};

export default Parent;
`);
const [simplelist] = useState(`import React from 'react';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default ItemList;
`);
const [withFunComponents] = useState(`import React from 'react';

const Button = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button onClick={handleClick}>Click me</button>
  );
};

export default Button;
`);
  const [Componentstow] = useState(`import React, { Component } from 'react';

class Button extends Component {
  handleClick = () => {
    alert('Button clicked!');
  };

  render() {
    return (
      <button onClick={this.handleClick}>Click me</button>
    );
  }
}

export default Button;
`);
    const [additionalparameters] = useState(`const Button = ({ message }) => {
  const handleClick = (msg) => {
    alert(msg);
  };

  return (
    <button onClick={() => handleClick(message)}>Click me</button>
  );
};
`);
      const [DefaultBehavior] = useState(`const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
};
`);
const [ControlledComponents] = useState(`import React, { useState } from 'react';

const ControlledInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
};

export default ControlledInput;
`);
const [UncontrolledComponents] = useState(`import React, { useRef } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledInput;
`);
const [ReactFragment] = useState(`import React from 'react';

const FragmentExample = () => {
  return (
    <React.Fragment>
      <h1>Title</h1>
      <p>This is a paragraph.</p>
    </React.Fragment>
  );
};

export default FragmentExample;
`);
const [shorthandsyntax] = useState(`import React from 'react';

const FragmentExample = () => {
  return (
    <>
      <h1>Title</h1>
      <p>This is a paragraph.</p>
    </>
  );
};

export default FragmentExample;
`);
const [KeyPoints] = useState(`import React from 'react';

const ItemList = ({ items }) => {
  return (
    <React.Fragment>
      {items.map(item => (
        <React.Fragment key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default ItemList;
`);
const [ifelseStatements] = useState(`import React from 'react';

const Greeting = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
};

export default Greeting;
`);
  const [TernaryOperators] = useState(`import React from 'react';

const Greeting = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
    </div>
  );
};

export default Greeting;
`);
    const [LogicalOperator] = useState(`import React from 'react';

const Notification = ({ hasNewMessages }) => {
  return (
    <div>
      {hasNewMessages && <h2>You have new messages!</h2>}
    </div>
  );
};

export default Notification;
`);
      const [SwitchStatements] = useState(`import React from 'react';

const StatusMessage = ({ status }) => {
  let message;
  switch (status) {
    case 'loading':
      message = <p>Loading...</p>;
      break;
    case 'success':
      message = <p>Data loaded successfully!</p>;
      break;
    case 'error':
      message = <p>Error loading data.</p>;
      break;
    default:
      message = null;
  }

  return <div>{message}</div>;
};

export default StatusMessage;
`);
        const [UsingIIFE] = useState(`import React from 'react';

const Greeting = ({ isLoggedIn }) => {
  return (
    <div>
      {(() => {
        if (isLoggedIn) {
          return <h1>Welcome back!</h1>;
        } else {
          return <h1>Please sign in.</h1>;
        }
      })()}
    </div>
  );
};

export default Greeting;
`);
const [Managesstate] = useState(`const [count, setCount] = useState(0);
`);
const [Handlesside] = useState(`useEffect(() => {
  console.log("Component mounted or updated");
}, []);
`);
const [Accessescontext] = useState(`const theme = useContext(ThemeContext);
`);
const [referencetoDOM] = useState(`const inputRef = useRef(null);
`);
const [Managescomplex] = useState(`const [state, dispatch] = useReducer(reducer, initialState);
`);
const [useMemo] = useState(`const expensiveValue = useMemo(() => computeExpensiveValue(data), [data]);
`);
const [useCallback] = useState(`const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
`);
const [ImportuseState] = useState(`import React, { useState } from 'react';
`);
const [DeclareState] = useState(`const [count, setCount] = useState(0);
`);
const [UpdateState] = useState(`const handleClick = () => {
  setCount(count + 1);
};
`);
const [simplecounter] = useState(`import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Counter;
`);
const [multipleState] = useState(`const MyComponent = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  // Add more state variables as needed

  // Update state using the corresponding setter functions
};
`);
const [StateUpdates] = useState(`const handleClick = () => {
  setCount(prevCount => prevCount + 1);
};
`);
const [BasicUsage] = useState(`import React, { useEffect, useState } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This code runs after every render
    document.title = \`You clicked \${count} times\`;

    // Cleanup function (optional)
    return () => {
      // This code runs before the component unmounts or the effect runs again
    };
  }, [count]); // Dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default ExampleComponent;
`);
const [FetchingData] = useState(`useEffect(() => {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => setData(data));
}, []); // Empty dependency array means this effect runs only once after the initial render
`);
const [SubscribingEvents] = useState(`useEffect(() => {
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []); // Empty dependency array
`);
const [HandleResponse] = useState(`import React, { useState, useEffect } from 'react';

const ApiComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define async function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result); // Update state with fetched data
      } catch (err) {
        setError(err); // Handle any errors
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array to run once after initial render

  if (loading) return <div>Loading...</div>; // Display loading message while data is being fetched
  if (error) return <div>Error: {error.message}</div>; // Display error message if any errors occur

  // Render the fetched data
  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ApiComponent;
`);
const [anHOC] = useState(`import React from 'react';

// Higher-Order Component (HOC)
const withLogger = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log(\`Component \${WrappedComponent.name} mounted\`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Example Wrapped Component
const HelloWorld = () => {
  return <h1>Hello, World!</h1>;
};

// Enhancing HelloWorld component with logging functionality
const HelloWorldWithLogger = withLogger(HelloWorld);

export default HelloWorldWithLogger;
`);
const [CreateContext] = useState(`import React from 'react';

const MyContext = React.createContext();
`);
const [ProvideContext] = useState(`import React, { useState } from 'react';
import MyContext from './MyContext';

const App = () => {
  const [value, setValue] = useState('Hello, World!');

  return (
    <MyContext.Provider value={value}>
      <MyComponent />
    </MyContext.Provider>
  );
};

export default App;
`);
const [ConsumeContext] = useState(`import React, { useContext } from 'react';
import MyContext from './MyContext';

const MyComponent = () => {
  const value = useContext(MyContext);

  return <div>{value}</div>;
};

export default MyComponent;
`);
const [ExampleScenario] = useState(`import React, { useState, useContext } from 'react';

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <p>The current theme is {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <ThemedComponent />
  </ThemeProvider>
);

export default App;
`);
const [PropsDrilling] = useState(`const App = () => {
  const user = { name: 'Alice', age: 25 };

  return (
    <Parent user={user} />
  );
};

const Parent = ({ user }) => {
  return <Child user={user} />;
};

const Child = ({ user }) => {
  return <GrandChild user={user} />;
};

const GrandChild = ({ user }) => {
  return <p>{user.name} is {user.age} years old.</p>;
};
 `);
  const [ContextAPIi] = useState(`import React, { useState, useContext } from 'react';

// Create a Context
const UserContext = React.createContext();

const App = () => {
  const `);
  const [CreatingRefs] = useState(`import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
};

export default FocusInput;
`);
      const [UsingcreateRef] = useState(`import React, { Component } from 'react';

class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleClick = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.inputRef} type="text" />
        <button onClick={this.handleClick}>Focus the input</button>
      </div>
    );
  }
}

export default FocusInput;
`);
const [useRefHook] = useState(`import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
};

export default FocusInput;
`);
    const [createRefMethod] = useState(`import React, { Component } from 'react';

class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleClick = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.inputRef} type="text" />
        <button onClick={this.handleClick}>Focus the input</button>
      </div>
    );
  }
}

export default FocusInput;
`);
const [useReactmemo] = useState(`import React, { memo } from 'react';

const ExpensiveComponent = ({ data }) => {
  console.log('Rendering ExpensiveComponent');
  return <div>{data}</div>;
};

export default memo(ExpensiveComponent);
`);
  const [CustomComparison] = useState(`import React, { memo } from 'react';

const ExpensiveComponent = ({ data }) => {
  console.log('Rendering ExpensiveComponent');
  return <div>{data}</div>;
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.data === nextProps.data;
};

export default memo(ExpensiveComponent, areEqual);
`);
const [Constructor] = useState(`constructor(props) {
  super(props);
  this.state = { counter: 0 };
}
`);
const [getDerived] = useState(`static getDerivedStateFromProps(props, state) {
  if (props.someValue !== state.someValue) {
    return {
      someValue: props.someValue
    };
  }
  return null;
}
`);
const [renderCode] = useState(`render() {
  return <div>{this.state.counter}</div>;
}
`);
const [componentDidMount] = useState(`componentDidMount() {
  // Fetch data or set up event listeners
}
`);
const [shouldComponentUpdate] = useState(`shouldComponentUpdate(nextProps, nextState) {
  return nextState.counter !== this.state.counter;
}
`);
const [getSnapshotBeforeUpdate] = useState(`getSnapshotBeforeUpdate(prevProps, prevState) {
  return { scrollPosition: window.scrollY };
}
`);
const [componentDidUpdate] = useState(`componentDidUpdate(prevProps, prevState, snapshot) {
  if (snapshot) {
    window.scrollTo(0, snapshot.scrollPosition);
  }
}
`);
const [componentWillUnmount] = useState(`componentWillUnmount() {
  // Clean up
}
`);
const [DidMountCode] = useState(`import React, { Component } from 'react';

class MyComponent extends Component {
  componentDidMount() {
    // Perform side effects like fetching data
    this.fetchData();
  }

  fetchData() {
    // Example fetch operation
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return <div>{this.state.data}</div>;
  }
}

export default MyComponent;
`);
const [WillUnmount] = useState(`import React, { Component } from 'react';

class MyComponent extends Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log('Timer tick');
    }, 1000);
  }

  componentWillUnmount() {
    // Clean up resources like timers or subscriptions
    clearInterval(this.timer);
  }

  render() {
    return <div>Check the console for timer ticks.</div>;
  }
}

export default MyComponent;
`);
const [Dependencies] = useState(`const memoizedCallback = useCallback(() => {
  // Your function logic
}, [dependencies]);
`);
const [WithoutuseCallback] = useState(`import React, { useState } from 'react';

const List = ({ items }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={increment}>Increment</button>
        </div>
      ))}
      <p>Count: {count}</p>
    </div>
  );
};
`);
const [WithuseCallback] = useState(`import React, { useState, useCallback } from 'react';

const List = ({ items }) => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={increment}>Increment</button>
        </div>
      ))}
      <p>Count: {count}</p>
    </div>
  );
};
`);
const [useMemoHook] = useState(`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
`);
  const [Consideranexample] = useState(`import React, { useState, useMemo } from 'react';

const ExpensiveCalculationComponent = ({ a, b }) => {
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num1, num2) => {
    console.log('Calculating...');
    return num1 + num2;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(a, b), [a, b]);

  return (
    <div>
      <p>Sum: {memoizedValue}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ExpensiveCalculationComponent;
`);
const [controlledInput] = useState(`import React, { useState } from 'react';

const ControlledInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Input value: {value}</p>
    </div>
  );
};

export default ControlledInput;
`);
const [withValidation] = useState(`import React, { useState } from 'react';

const ValidatedInput = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (newValue.length > 10) {
      setError('Input cannot exceed 10 characters');
    } else {
      setError('');
      setValue(newValue);
    }
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Input value: {value}</p>
    </div>
  );
};

export default ValidatedInput;
`);
const [InstallationReact] = useState(`npm install react-router-dom
`);
const [DefineRoutes] = useState(`import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
`);
const [BrowserRouter] = useState(`import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Router>
);
`);
  const [HashRouter] = useState(`import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Router>
);
 `);
    const [MemoryRouter] = useState(`import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Router>
);
`);
const [InstallReactRouter] = useState(`npm install react-router-dom
`);
  const [SetUpRoutes] = useState(`import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
`);
    const [NavigationwithLink] = useState(`<nav>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
</nav>
`);
      const [ProgrammaticNavigation] = useState(`import React from 'react';
import { useHistory } from 'react-router-dom';

const NavigateButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/about');
  };

  return <button onClick={handleClick}>Go to About</button>;
};
`);
        const [NestedRoutes] = useState(`import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from 'react-router-dom';

const Topic = ({ match }) => <h3>Requested topic ID: {match.params.topicId}</h3>;

const Topics = () => {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li><Link to={\`\${url}/components\`}>Components</Link></li>
        <li><Link to={\`\${url}/props-v-state\`}>Props v. State</Link></li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={\`\${path}/:topicId\`} component={Topic} />
      </Switch>
    </div>
  );
};

const App = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/topics">Topics</Link>
    </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/topics" component={Topics} />
    </Switch>
  </Router>
);

export default App;
`);
const [SwitchandRoute] = useState(`import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;
`);
const [SwitchCode] = useState(`import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="*">
        <h1>404 Not Found</h1>
      </Route>
    </Switch>
  </Router>
);

export default App;
`);
const [theRoutes] = useState(`import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import User from './User';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user/:id" component={User} />
    </Switch>
  </Router>
);

export default App;
`);
const [CreateComponent] = useState(`import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>User ID: {id}</h1>
    </div>
  );
};

export default User;
`);
const [theRoutesode] = useState(`import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import User from './User';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user/:id" component={User} />
    </Switch>
  </Router>
);

export default App;
`);
const [DynamicComponentCode] = useState(`import React, { Component } from 'react';

class User extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <div>
        <h1>User ID: {id}</h1>
      </div>
    );
  }
}

export default User;
`);
const [UsinguseHistory] = useState(`import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const navigateToUser = (userId) => {
    history.push(\`/user/\${userId}\`);
  };

  return (
    <div>
      <button onClick={() => navigateToUser(1)}>Go to User 1</button>
      <button onClick={() => navigateToUser(2)}>Go to User 2</button>
    </div>
  );
};

export default Home;
`);




     
  return {FunctionalComponents, ClassComponents, ModernApproach, OldApproach, StateManagement, PropsinFunctional, PropsinClass, PropsvsState, ParenttoChild, ChildtoParent, SiblingCommunication, ContextAPI, simplelist, withFunComponents, Componentstow, additionalparameters, DefaultBehavior, ControlledComponents, UncontrolledComponents, ReactFragment, shorthandsyntax, KeyPoints, ifelseStatements, TernaryOperators, LogicalOperator, SwitchStatements, UsingIIFE, Managesstate, Handlesside, Accessescontext, referencetoDOM, Managescomplex, useMemo, useCallback, ImportuseState, DeclareState, UpdateState, simplecounter, multipleState, StateUpdates, BasicUsage, FetchingData, SubscribingEvents, HandleResponse, anHOC, CreateContext, ProvideContext, ConsumeContext, ExampleScenario, PropsDrilling, ContextAPIi, CreatingRefs, UsingcreateRef, useRefHook, createRefMethod, useReactmemo, CustomComparison, Constructor, getDerived, renderCode, componentDidMount, shouldComponentUpdate, getSnapshotBeforeUpdate, componentDidUpdate, componentWillUnmount, DidMountCode, WillUnmount, Dependencies, WithoutuseCallback, WithuseCallback, useMemoHook, Consideranexample, controlledInput, withValidation, InstallationReact, DefineRoutes, BrowserRouter,HashRouter, MemoryRouter, InstallReactRouter, SetUpRoutes, NavigationwithLink, ProgrammaticNavigation, NestedRoutes, SwitchandRoute, SwitchCode, theRoutes, CreateComponent, theRoutesode, DynamicComponentCode, UsinguseHistory
    

  };


}

export default CodeExamples;

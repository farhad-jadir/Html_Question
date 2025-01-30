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




     
  return {FunctionalComponents, ClassComponents, ModernApproach, OldApproach, StateManagement, PropsinFunctional, PropsinClass, PropsvsState, ParenttoChild, ChildtoParent, SiblingCommunication, ContextAPI, simplelist, withFunComponents, Componentstow, additionalparameters, DefaultBehavior, ControlledComponents, UncontrolledComponents, ReactFragment, shorthandsyntax, KeyPoints, ifelseStatements, TernaryOperators, LogicalOperator, SwitchStatements, UsingIIFE, Managesstate, Handlesside, Accessescontext, referencetoDOM, Managescomplex, useMemo, useCallback
    

  };


}

export default CodeExamples;

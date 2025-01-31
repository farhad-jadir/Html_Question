import React, { useState } from "react";

function CodeExamples() {
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
        const [ReactPortals] = useState(`import React from 'react';
import ReactDOM from 'react-dom';

const PortalComponent = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="portal">
      {children}
    </div>,
    document.getElementById('portal-root') // The target container
  );
};

export default PortalComponent;
`);
            const [UseReactPortals] = useState(`import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal">
      <button onClick={onClose}>Close</button>
      {children}
    </div>,
    document.getElementById('modal-root')
  );
};

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2>This is a modal!</h2>
      </Modal>
    </div>
  );
};

export default App;
`);

const [SetupCodeSplitting] = useState(`import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
`);
const [SetupLazyLoading] = useState(`import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  </div>
);

export default App;
`);
    const [ConcurrentMode] = useState(`import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

const App = () => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  </div>
);

export default App;
`);

const [SimplerCode] = useState(`import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error("Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
`);
    const [WrapComponents] = useState(`import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import MyComponent from './MyComponent';

const App = () => (
  <ErrorBoundary>
    <MyComponent />
  </ErrorBoundary>
);

export default App;
`);
const [ClientSide] = useState(`// React Component Example
const App = () => <div>Hello, World!</div>;
`);
    const [ServerSide] = useState(`// Next.js Example
import React from 'react';

const Home = ({ data }) => <div>{data}</div>;

export async function getServerSideProps() {
  // Fetch data from an API
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return { props: { data } };
}

export default Home;
`);
const [InstallNextjs] = useState(`npx create-next-app
`);
    const [CreateaPage] = useState(`// pages/index.js
import React from 'react';

const Home = ({ data }) => <div>{data}</div>;

export async function getServerSideProps() {
  // Fetch data from an API
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return { props: { data } };
}

export default Home;
`);
const [improveSSR] = useState(`// pages/index.js
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return { props: { data } };
}

const Home = ({ data }) => <div>{data}</div>;

export default Home;
`);
const [severalbenefits] = useState(`// pages/index.js
const Home = () => <div>Welcome to Next.js!</div>;

export default Home;
`);
const [SuspensecODE] = useState(`import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);

export default App;
 `);
 const [SuspenseinReact] = useState(`import React, { Suspense } from 'react';
import { fetchData } from './api'; // Assume fetchData supports Suspense

const DataComponent = () => {
  const data = fetchData();
  return <div>{data}</div>;
};

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <DataComponent />
  </Suspense>
);

export default App;
`);
const [CodeReusability] = useState(`import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, [url]);

  return data;
};

const MyComponent = () => {
  const data = useFetchData('https://api.example.com/data');
  return <div>{data}</div>;
};
`);
const [FolderStructure] = useState(`src/
  components/
  features/
    featureA/
      components/
      hooks/
      services/
      featureAComponent.js
  utils/
`);
const [DeprecationWarnings] = useState(`import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
`);
const [ReactmemoCode] = useState(`import React from 'react';

const MyComponent = React.memo((props) => {
  return <div>{props.value}</div>;
});
`);
    const [useCallbackCode] = useState(`import React, { useCallback } from 'react';

const handleClick = useCallback(() => {
  // Your logic here
}, []);
`);
        const [useMemoCode] = useState(`import React, { useMemo } from 'react';

const result = useMemo(() => {
  return expensiveCalculation(value);
}, [value]);
`);
            const [PureComponentCode] = useState(`import React from 'react';

class MyComponent extends React.PureComponent {
  render() {
    return <div>{this.props.value}</div>;
  }
}
`);
const [DebouncingCode] = useState(`import { useState } from 'react';
import { debounce } from 'lodash';

const MyComponent = () => {
  const [value, setValue] = useState('');

  const handleInputChange = debounce((event) => {
    setValue(event.target.value);
  }, 300);

  return <input onChange={handleInputChange} />;
};
`);
    const [ThrottlingCode] = useState(`import { useState } from 'react';
import { throttle } from 'lodash';

const MyComponent = () => {
  const [value, setValue] = useState('');

  const handleInputChange = throttle((event) => {
    setValue(event.target.value);
  }, 300);

  return <input onChange={handleInputChange} />;
};
`);
const [PropTypesCode] = useState(`import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, age }) => (
  <div>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
  </div>
);

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default MyComponent;
`);
const [KeyApproaches] = useState(`import { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    // Perform side effect (e.g., fetch data)
    fetchData();

    // Cleanup function (e.g., unsubscribe)
    return () => cleanup();
  }, []); // Dependency array controls when the effect runs

  return <div>My Component</div>;
};
`);
const [ReducerFunction] = useState(`import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default Counter;
`);
const [UseBuiltinHooks] = useState(`import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, [url]);

  return data;
};

// Usage in a Component
const MyComponent = () => {
  const data = useFetchData('https://api.example.com/data');
  return <div>{data}</div>;
};
`);
const [FeaturesandBenefits] = useState(`// Create
const addItem = (item) => setItems([...items, item]);

// Read
const itemsList = items.map(item => <div key={item.id}>{item.name}</div>);

// Update
const updateItem = (updatedItem) => setItems(
  items.map(item => item.id === updatedItem.id ? updatedItem : item)
);

// Delete
const deleteItem = (id) => setItems(items.filter(item => item.id !== id));
`);
  const [FormHandling] = useState(`const MyForm = () => {
  const [input, setInput] = useState('');

  const handleChange = (e) => setInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};
`);
    const [PropsCode] = useState(`const Parent = () => <Child message="Hello, World!" />;

const Child = ({ message }) => <div>{message}</div>;
`);
      const [StateCode] = useState(`const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
`);
const [environmentsetup] = useState(`import React, { useState } from 'react';

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const addContact = () => {
    if (editingIndex !== null) {
      const updatedContacts = contacts.map((contact, index) => 
        index === editingIndex ? name : contact
      );
      setContacts(updatedContacts);
      setEditingIndex(null);
    } else {
      setContacts([...contacts, name]);
    }
    setName('');
  };

  const editContact = (index) => {
    setName(contacts[index]);
    setEditingIndex(index);
  };

  const deleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Contact Manager</h2>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter contact name"
      />
      <button onClick={addContact}>
        {editingIndex !== null ? 'Edit Contact' : 'Add Contact'}
      </button>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact}
            <button onClick={() => editContact(index)}>Edit</button>
            <button onClick={() => deleteContact(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactManager;
`);
const [NamePhoneNumberEmail] = useState(`import React, { useState } from 'react';

const ContactManager = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' },
  ]);

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <div><strong>Name:</strong> {contact.name}</div>
            <div><strong>Phone:</strong> {contact.phone}</div>
            <div><strong>Email:</strong> {contact.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactManager;
`);
const [contactsName] = useState(`import React, { useState } from 'react';

const ContactManager = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Contact List</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <div><strong>Name:</strong> {contact.name}</div>
            <div><strong>Phone:</strong> {contact.phone}</div>
            <div><strong>Email:</strong> {contact.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactManager;
`);
        
        


     
  return { InstallationReact, DefineRoutes, BrowserRouter,HashRouter, MemoryRouter, InstallReactRouter, SetUpRoutes, NavigationwithLink, ProgrammaticNavigation, NestedRoutes, SwitchandRoute, SwitchCode, theRoutes, CreateComponent, theRoutesode, DynamicComponentCode, UsinguseHistory, ReactPortals, UseReactPortals, SetupCodeSplitting, SetupLazyLoading, ConcurrentMode, SimplerCode, WrapComponents, ClientSide, ServerSide, InstallNextjs, CreateaPage, improveSSR, severalbenefits, SuspensecODE, SuspenseinReact, CodeReusability, FolderStructure, DeprecationWarnings, ReactmemoCode,useCallbackCode, useMemoCode, PureComponentCode, DebouncingCode, ThrottlingCode, PropTypesCode, KeyApproaches, ReducerFunction, UseBuiltinHooks, FeaturesandBenefits, FormHandling, PropsCode, StateCode, environmentsetup, NamePhoneNumberEmail, contactsName
    

  };


}

export default CodeExamples;

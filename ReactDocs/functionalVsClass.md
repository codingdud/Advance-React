# Functional vs Class Components: Complete Deep Dive

**Key differences at a glance:**
- No `class`, `extends`, `constructor`, or `this` keyword
- Direct destructuring of props
- Simpler syntax, less boilerplate
- Arrow functions automatically bind `this` context

---

## 1. State Management

### Class Components
```jsx
class Counter extends Component {
  constructor(props) {
    super(props);
    // State must be an object
    this.state = {
      count: 0,
      user: { name: 'Alice', age: 25 }
    };
  }

  increment = () => {
    // setState merges with existing state
    this.setState({ count: this.state.count + 1 });
    
    // Or with callback for previous state
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  updateUser = () => {
    // Partial updates work
    this.setState({ user: { ...this.state.user, age: 26 } });
  };

  render() {
    return <div>{this.state.count}</div>;
  }
}
```

### Functional Components
```jsx
function Counter() {
  // Multiple useState calls - each state is independent
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: 'Alice', age: 25 });

  const increment = () => {
    // Direct replacement, not merge
    setCount(count + 1);
    
    // Or with callback
    setCount((prevCount) => prevCount + 1);
  };

  const updateUser = () => {
    // Must spread manually - no auto-merge
    setUser({ ...user, age: 26 });
    // Or update specific field
    setUser((prev) => ({ ...prev, age: 26 }));
  };

  return <div>{count}</div>;
}
```

**Critical Differences:**
| Aspect | Class | Functional (Hooks) |
|--------|-------|-------------------|
| State type | Single object | Multiple independent variables |
| Updates | Auto-merges | Replaces completely |
| Initialization | In constructor | In useState argument |
| Access | `this.state.count` | Direct: `count` |

---

## 3. Lifecycle Methods vs Hooks

### Class Component Lifecycle
```jsx
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null, loading: true };
  }

  // Mounting
  componentDidMount() {
    console.log('Component mounted');
    this.fetchUser(this.props.userId);
    window.addEventListener('resize', this.handleResize);
  }

  // Updating
  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated');
    // Only fetch if userId changed
    if (prevProps.userId !== this.props.userId) {
      this.fetchUser(this.props.userId);
    }
  }

  // Unmounting
  componentWillUnmount() {
    console.log('Component will unmount');
    window.removeEventListener('resize', this.handleResize);
  }

  // Error handling
  componentDidCatch(error, info) {
    console.log('Error caught:', error);
  }

  fetchUser = async (userId) => {
    const response = await fetch(`/api/users/${userId}`);
    const user = await response.json();
    this.setState({ user, loading: false });
  };

  handleResize = () => {
    console.log('Window resized');
  };

  render() {
    if (this.state.loading) return <div>Loading...</div>;
    return <div>{this.state.user.name}</div>;
  }
}
```

### Functional Component with Hooks
```jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Combined componentDidMount + componentDidUpdate + componentWillUnmount
  useEffect(() => {
    console.log('Effect running');
    
    const fetchUser = async () => {
      setLoading(true);
      const response = await fetch(`/api/users/${userId}`);
      const userData = await response.json();
      setUser(userData);
      setLoading(false);
    };

    fetchUser();
  }, [userId]); // Only re-run when userId changes

  // Separate effect for event listener
  useEffect(() => {
    const handleResize = () => {
      console.log('Window resized');
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function (like componentWillUnmount)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array = run once on mount

  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}
```

### Lifecycle Mapping

| Class Lifecycle | Functional Hook Equivalent |
|----------------|---------------------------|
| `constructor()` | `useState()` initialization |
| `componentDidMount()` | `useEffect(() => {}, [])` |
| `componentDidUpdate()` | `useEffect(() => {}, [deps])` |
| `componentWillUnmount()` | `useEffect(() => { return () => {} }, [])` |
| `shouldComponentUpdate()` | `React.memo()` or `useMemo()` |
| `componentDidCatch()` | No hook yet (use Error Boundary class) |

---

## 7. Complete Comparison Table

| Feature | Class Components | Functional Components |
|---------|-----------------|----------------------|
| **Syntax** | Verbose, OOP | Concise, FP |
| **State** | Single object | Multiple variables |
| **Lifecycle** | Separate methods | Combined in useEffect |
| **`this` binding** | Required | Not needed |
| **Code reuse** | HOC, Render Props | Custom Hooks |
| **Performance** | shouldComponentUpdate | React.memo, useMemo |
| **Learning curve** | Steeper | Easier |
| **Bundle size** | Slightly larger | Smaller |
| **Testing** | More complex | Simpler |
| **Future** | Legacy | Current standard |

---

## 10. When to Use Each (Practical Reality)

### Use Functional Components (99% of the time)
- **All new code** - React team recommends this
- Better performance potential
- Easier to test and reason about
- Hooks enable better code organization
- Future React features will target functions

### Use Class Components (rare cases)
- **Legacy codebases** - maintain consistency
- **Error Boundaries** - no hook equivalent yet
- **Specific third-party library** requires it
- **Team expertise** - transitioning gradually

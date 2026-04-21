# React Developer MCQ Challenge - Problem Solving Skills

A comprehensive collection of React multiple-choice questions designed to test real-world developer problem-solving abilities.

---

## Question 1: Asynchronous State Updates

**Difficulty:** Medium | **Category:** Hooks

What will be logged to the console?

```javascript
const [count, setCount] = useState(0);

useEffect(() => {
  setCount(1);
  console.log(count);
}, []);
```

**Options:**
- A) 0
- B) 1
- C) undefined
- D) Error

<details>
<summary>Answer</summary>

**A) 0**

**Explanation:** State updates are asynchronous. The console.log runs before the state update is applied, so it logs the old value (0). The component will re-render with count = 1, but the console.log has already executed with the previous value.

</details>

---

## Question 2: Reference Equality & Re-renders

**Difficulty:** Medium | **Category:** Performance

Which approach prevents unnecessary re-renders of child components?

```javascript
// Option A
<Child onClick={() => handleClick()} />

// Option B
<Child onClick={handleClick} />

// Option C
const memoizedClick = useCallback(() => handleClick(), []);
<Child onClick={memoizedClick} />
```

**Options:**
- A) Option A
- B) Option B
- C) Option C
- D) Both B and C

<details>
<summary>Answer</summary>

**D) Both B and C**

**Explanation:** Option A creates a new function on every render, causing Child to re-render even if memoized. Options B and C maintain reference equality across renders, preventing unnecessary re-renders if Child is wrapped with React.memo.

</details>

---

## Question 3: State Batching

**Difficulty:** Hard | **Category:** State Management

What's the output when the button is clicked once?

```javascript
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
};
```

**Options:**
- A) 3
- B) 1
- C) 0
- D) 6

<details>
<summary>Answer</summary>

**B) 1**

**Explanation:** All three setCount calls use the same 'count' value from the current render (0). React batches them, but they all add 1 to the same initial value. To increment by 3, use the functional form: `setCount(c => c + 1)`.

</details>

---

## Question 4: Infinite Loop in useEffect

**Difficulty:** Medium | **Category:** Hooks

How do you fix the infinite loop?

```javascript
useEffect(() => {
  fetchData();
}, [fetchData]);
```

**Options:**
- A) Remove fetchData from dependencies
- B) Wrap fetchData with useCallback
- C) Use useEffect without dependencies
- D) Move fetchData inside useEffect

<details>
<summary>Answer</summary>

**B) Wrap fetchData with useCallback**

**Explanation:** fetchData is recreated on every render, causing the effect to run infinitely. Wrapping it with useCallback memoizes the function. Alternatively, move fetchData inside useEffect or remove it from dependencies (but this may cause stale closure issues).

</details>

---

## Question 5: Rules of Hooks

**Difficulty:** Easy | **Category:** Hooks

What's wrong with this custom hook?

```javascript
function useCustomHook(value) {
  if (value > 10) {
    useState(value);
  }
  return value * 2;
}
```

**Options:**
- A) Nothing is wrong
- B) Hooks can't be called conditionally
- C) Custom hooks must start with 'use'
- D) useState should be outside the function

<details>
<summary>Answer</summary>

**B) Hooks can't be called conditionally**

**Explanation:** React hooks must be called in the same order on every render. Conditional hook calls violate the Rules of Hooks and will cause errors. Hooks must always be called at the top level of the component/hook function.

</details>

---

## Question 6: State Immutability

**Difficulty:** Medium | **Category:** State Management

What will render after clicking the button?

```javascript
const [items, setItems] = useState([1, 2, 3]);

const handleClick = () => {
  items.push(4);
  setItems(items);
};
```

**Options:**
- A) [1, 2, 3, 4]
- B) [1, 2, 3]
- C) Error
- D) undefined

<details>
<summary>Answer</summary>

**B) [1, 2, 3]**

**Explanation:** Mutating state directly doesn't trigger re-render. React compares references, and 'items' is still the same array reference even though its contents changed. Use `setItems([...items, 4])` or `setItems(prev => [...prev, 4])` to create a new array.

</details>

---

## Question 7: Error Boundaries

**Difficulty:** Hard | **Category:** Error Handling

Which pattern correctly implements error boundary?

```javascript
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  // Which method is required?
}
```

**Options:**
- A) componentDidCatch only
- B) static getDerivedStateFromError only
- C) Both componentDidCatch and getDerivedStateFromError
- D) componentDidMount

<details>
<summary>Answer</summary>

**C) Both componentDidCatch and getDerivedStateFromError**

**Explanation:** `getDerivedStateFromError` updates state to render fallback UI during the render phase. `componentDidCatch` logs error information during the commit phase. Both are needed for complete error handling. Note: Error boundaries must be class components.

</details>

---

## Question 8: Context Performance

**Difficulty:** Hard | **Category:** Context

What's the issue with this context usage?

```javascript
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Child />
    </ThemeContext.Provider>
  );
}
```

**Options:**
- A) Nothing is wrong
- B) Value object is recreated on every render
- C) Context should use useReducer
- D) Missing default value in createContext

<details>
<summary>Answer</summary>

**B) Value object is recreated on every render**

**Explanation:** The value object `{ theme, setTheme }` is recreated on every render, causing all consumers to re-render unnecessarily. Fix: `const value = useMemo(() => ({ theme, setTheme }), [theme])`.

</details>

---

## Question 9: React.memo

**Difficulty:** Easy | **Category:** Performance

What does React.memo do?

**Options:**
- A) Memoizes the component's state
- B) Prevents re-render if props haven't changed
- C) Caches API responses
- D) Optimizes useEffect dependencies

<details>
<summary>Answer</summary>

**B) Prevents re-render if props haven't changed**

**Explanation:** React.memo is a Higher-Order Component that memoizes a component, preventing re-renders when props are shallowly equal to previous props. It's similar to PureComponent but for functional components.

</details>

---

## Question 10: Nested State Updates

**Difficulty:** Medium | **Category:** State Management

What's the correct way to update nested state?

```javascript
const [user, setUser] = useState({ 
  name: 'John', 
  address: { city: 'NYC' } 
});

// Update city to 'LA'
```

**Options:**
- A) `setUser({ address: { city: 'LA' } })`
- B) `setUser({ ...user, address: { city: 'LA' } })`
- C) `setUser({ ...user, address: { ...user.address, city: 'LA' } })`
- D) `user.address.city = 'LA'; setUser(user)`

<details>
<summary>Answer</summary>

**C) `setUser({ ...user, address: { ...user.address, city: 'LA' } })`**

**Explanation:** You must spread both the user object and the nested address object to avoid losing other properties and maintain immutability. Option A loses the name, Option B loses other address properties, Option D mutates state directly.

</details>

---

## Question 11: useLayoutEffect vs useEffect

**Difficulty:** Medium | **Category:** Hooks

When does useLayoutEffect run?

**Options:**
- A) After DOM mutations, before paint
- B) After paint, asynchronously
- C) Before DOM mutations
- D) Same as useEffect

<details>
<summary>Answer</summary>

**A) After DOM mutations, before paint**

**Explanation:** useLayoutEffect runs synchronously after DOM mutations but before the browser paints. Use it for DOM measurements or synchronous updates that need to happen before the user sees the screen. useEffect runs asynchronously after paint.

</details>

---

## Question 12: Keys in Lists

**Difficulty:** Easy | **Category:** Lists & Keys

What's the problem with this key usage?

```javascript
{items.map((item, index) => (
  <div key={index}>{item.name}</div>
))}
```

**Options:**
- A) Nothing is wrong
- B) Index as key causes issues when list order changes
- C) Keys should be strings, not numbers
- D) Keys are not needed for divs

<details>
<summary>Answer</summary>

**B) Index as key causes issues when list order changes**

**Explanation:** Using index as key can cause bugs when items are reordered, added, or removed. React uses keys to identify which items have changed. Use stable, unique identifiers (like item.id) instead.

</details>

---

## Question 13: Closures in Effects

**Difficulty:** Hard | **Category:** Closures

What will this component render after clicking twice with 1 second between clicks?

```javascript
function Component() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setTimeout(() => setCount(count + 1), 1000);
  };
  
  return <button onClick={increment}>{count}</button>;
}
```

**Options:**
- A) Increments correctly to 2
- B) Always shows 1 regardless of clicks
- C) Throws an error
- D) Increments by 2 each time

<details>
<summary>Answer</summary>

**B) Always shows 1 regardless of clicks**

**Explanation:** The setTimeout closure captures the 'count' value at the time of click. Multiple clicks use the same stale value (0). Both timeouts execute `setCount(0 + 1)`. Fix: Use `setCount(c => c + 1)` to access the latest state.

</details>

---

## Question 14: Controlled vs Uncontrolled Components

**Difficulty:** Easy | **Category:** Forms

What's the difference between controlled and uncontrolled components?

**Options:**
- A) Controlled uses state, uncontrolled uses refs
- B) Controlled is faster than uncontrolled
- C) Uncontrolled components can't be validated
- D) No difference, just naming convention

<details>
<summary>Answer</summary>

**A) Controlled uses state, uncontrolled uses refs**

**Explanation:** Controlled components have their value controlled by React state (value + onChange). Uncontrolled components store their own state internally in the DOM and use refs to access values when needed (like traditional HTML forms).

</details>

---

## Question 15: setState in Render

**Difficulty:** Medium | **Category:** State Management

What happens when you call setState in render?

```javascript
function Component() {
  const [count, setCount] = useState(0);
  
  if (count < 5) {
    setCount(count + 1);
  }
  
  return <div>{count}</div>;
}
```

**Options:**
- A) Renders 5
- B) Infinite loop / Maximum update depth exceeded
- C) Renders 0
- D) Renders 1

<details>
<summary>Answer</summary>

**B) Infinite loop / Maximum update depth exceeded**

**Explanation:** Calling setState during render causes the component to re-render immediately, which calls setState again, creating an infinite loop. React detects this and throws "Maximum update depth exceeded" error. Use useEffect for side effects.

</details>

---

## Question 16: useRef vs useState

**Difficulty:** Medium | **Category:** Hooks

When should you use useRef instead of useState?

**Options:**
- A) When you need to store a value that doesn't trigger re-render
- B) When you need to access DOM elements
- C) When you need to persist values across renders
- D) All of the above

<details>
<summary>Answer</summary>

**D) All of the above**

**Explanation:** useRef is perfect for: 1) Storing mutable values that don't need to trigger re-renders (like timers, previous values), 2) Accessing DOM elements directly, 3) Persisting values across renders without causing re-renders. Unlike useState, updating a ref doesn't trigger re-render.

</details>

---

## Question 17: Prop Drilling Solution

**Difficulty:** Medium | **Category:** Context

What's the best solution to avoid prop drilling for deeply nested components?

**Options:**
- A) Pass props through all intermediate components
- B) Use Context API
- C) Use global variables
- D) Use localStorage

<details>
<summary>Answer</summary>

**B) Use Context API**

**Explanation:** Context API allows you to share values between components without explicitly passing props through every level. It's designed specifically to solve prop drilling. Other solutions: component composition, state management libraries (Redux, Zustand), or render props.

</details>

---

## Question 18: React.StrictMode

**Difficulty:** Easy | **Category:** Development Tools

What does React.StrictMode do?

**Options:**
- A) Makes your app run faster in production
- B) Highlights potential problems in development
- C) Prevents all errors in your app
- D) Enables TypeScript checking

<details>
<summary>Answer</summary>

**B) Highlights potential problems in development**

**Explanation:** StrictMode is a development-only tool that: 1) Identifies components with unsafe lifecycles, 2) Warns about legacy string ref API, 3) Detects unexpected side effects by double-invoking functions, 4) Warns about deprecated APIs. It doesn't affect production builds.

</details>

---

## Question 19: useMemo vs useCallback

**Difficulty:** Medium | **Category:** Performance

What's the difference between useMemo and useCallback?

**Options:**
- A) useMemo memoizes values, useCallback memoizes functions
- B) useMemo is faster than useCallback
- C) useCallback is for async functions only
- D) They are the same, just different names

<details>
<summary>Answer</summary>

**A) useMemo memoizes values, useCallback memoizes functions**

**Explanation:** `useMemo(() => computeExpensiveValue(a, b), [a, b])` returns a memoized value. `useCallback((a, b) => doSomething(a, b), [a, b])` returns a memoized function. Actually, `useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`.

</details>

---

## Question 20: Synthetic Events

**Difficulty:** Hard | **Category:** Events

What's true about React's Synthetic Events?

```javascript
function handleClick(e) {
  setTimeout(() => {
    console.log(e.type);
  }, 1000);
}
```

**Options:**
- A) Works fine, logs "click"
- B) e is null after the event handler
- C) Throws an error
- D) Logs undefined

<details>
<summary>Answer</summary>

**D) Logs undefined (in React 16 and earlier)**

**Explanation:** In React 16 and earlier, synthetic events are pooled and nullified after the event handler. To access event properties asynchronously, call `e.persist()` or copy the needed properties. React 17+ removed event pooling, so this code now works fine.

</details>

---

## Question 21: Lazy Loading

**Difficulty:** Medium | **Category:** Code Splitting

What's the correct way to implement lazy loading?

**Options:**
- A) `const Component = lazy(() => import('./Component'))`
- B) `const Component = import('./Component')`
- C) `const Component = React.lazy('./Component')`
- D) `const Component = lazy('./Component')`

<details>
<summary>Answer</summary>

**A) `const Component = lazy(() => import('./Component'))`**

**Explanation:** React.lazy takes a function that returns a dynamic import(). It must be wrapped in a Suspense component with a fallback. This enables code splitting and loads the component only when needed.

```javascript
const Component = lazy(() => import('./Component'));

<Suspense fallback={<Loading />}>
  <Component />
</Suspense>
```

</details>

---

## Question 22: useReducer vs useState

**Difficulty:** Medium | **Category:** State Management

When should you prefer useReducer over useState?

**Options:**
- A) When state logic is complex with multiple sub-values
- B) When next state depends on previous state
- C) When you want to optimize performance for deep updates
- D) All of the above

<details>
<summary>Answer</summary>

**D) All of the above**

**Explanation:** useReducer is preferable when: 1) State has complex update logic, 2) Next state depends on previous state, 3) You want to optimize performance (dispatch is stable, unlike setState callbacks), 4) You have multiple related state values. It's similar to Redux pattern.

</details>

---

## Question 23: Forward Refs

**Difficulty:** Hard | **Category:** Refs

What does forwardRef do?

```javascript
const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});
```

**Options:**
- A) Passes ref from parent to child component
- B) Creates a new ref automatically
- C) Forwards props to child components
- D) Optimizes component rendering

<details>
<summary>Answer</summary>

**A) Passes ref from parent to child component**

**Explanation:** forwardRef allows a component to receive a ref from its parent and pass it to a child element. This is useful for component libraries or when you need to expose DOM nodes to parent components. Without forwardRef, refs don't get passed as props.

</details>

---

## Question 24: Custom Hook Return Values

**Difficulty:** Easy | **Category:** Hooks

What's the conventional way to return multiple values from a custom hook?

**Options:**
- A) Return an array like `[value, setValue]`
- B) Return an object like `{ value, setValue }`
- C) Either A or B depending on use case
- D) Return multiple parameters

<details>
<summary>Answer</summary>

**C) Either A or B depending on use case**

**Explanation:** Return array when: values are typically used together and order matters (like useState). Return object when: you have many values, users might not need all values, or names are more important than order. Arrays allow destructuring with custom names, objects provide clarity.

</details>

---

## Question 25: React Fiber

**Difficulty:** Hard | **Category:** Internals

What is React Fiber?

**Options:**
- A) A new component type in React
- B) React's reconciliation algorithm rewrite
- C) A performance monitoring tool
- D) A state management library

<details>
<summary>Answer</summary>

**B) React's reconciliation algorithm rewrite**

**Explanation:** Fiber is React's reconciliation engine rewrite (React 16+). It enables: 1) Incremental rendering (split work into chunks), 2) Pause, abort, or reuse work, 3) Priority to different types of updates, 4) Concurrent features. It makes React more responsive by not blocking the main thread.

</details>

---

## Bonus Questions

### Question 26: Hydration

**Difficulty:** Hard | **Category:** SSR

What is hydration in React?

**Options:**
- A) Adding water to components
- B) Attaching event listeners to server-rendered HTML
- C) Loading data from API
- D) Refreshing component state

<details>
<summary>Answer</summary>

**B) Attaching event listeners to server-rendered HTML**

**Explanation:** Hydration is the process where React attaches event listeners and makes server-rendered HTML interactive. The server sends static HTML, then React "hydrates" it by attaching event handlers and making it a fully interactive React app. Used in SSR (Next.js, Gatsby).

</details>

---

### Question 27: Portals

**Difficulty:** Medium | **Category:** Advanced Patterns

What are React Portals used for?

**Options:**
- A) Rendering children into a DOM node outside parent hierarchy
- B) Creating navigation between pages
- C) Managing global state
- D) Optimizing performance

<details>
<summary>Answer</summary>

**A) Rendering children into a DOM node outside parent hierarchy**

**Explanation:** `ReactDOM.createPortal(child, container)` renders children into a DOM node that exists outside the parent component's DOM hierarchy. Common use cases: modals, tooltips, dropdowns that need to break out of overflow:hidden containers while maintaining React event bubbling.

</details>

---

### Question 28: Reconciliation

**Difficulty:** Hard | **Category:** Internals

How does React's reconciliation algorithm work?

**Options:**
- A) Compares entire virtual DOM trees
- B) Uses diffing algorithm with heuristics
- C) Replaces entire DOM on every update
- D) Only updates changed text nodes

<details>
<summary>Answer</summary>

**B) Uses diffing algorithm with heuristics**

**Explanation:** React uses a heuristic O(n) algorithm instead of O(n³): 1) Different element types produce different trees, 2) Keys identify stable elements across renders, 3) Component updates are handled recursively. This makes updates fast enough for interactive UIs.

</details>

---

### Question 29: Concurrent Mode

**Difficulty:** Hard | **Category:** Advanced Features

What is Concurrent Mode (React 18+)?

**Options:**
- A) Running multiple React apps simultaneously
- B) React can interrupt rendering to handle high-priority updates
- C) Multi-threading in React
- D) Async component rendering

<details>
<summary>Answer</summary>

**B) React can interrupt rendering to handle high-priority updates**

**Explanation:** Concurrent Mode (now Concurrent Features in React 18) allows React to interrupt rendering work to handle more urgent updates. Features include: useTransition, useDeferredValue, Suspense for data fetching. It keeps apps responsive during heavy rendering.

</details>

---

### Question 30: Automatic Batching (React 18)

**Difficulty:** Medium | **Category:** React 18

What changed with automatic batching in React 18?

```javascript
fetch('/api').then(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // How many re-renders?
});
```

**Options:**
- A) 2 re-renders (React 17 and 18)
- B) 1 re-render (React 17 and 18)
- C) 2 re-renders in React 17, 1 in React 18
- D) 1 re-render in React 17, 2 in React 18

<details>
<summary>Answer</summary>

**C) 2 re-renders in React 17, 1 in React 18**

**Explanation:** React 17 only batched updates in event handlers. Updates in promises, setTimeout, or native event handlers caused multiple re-renders. React 18 automatically batches all updates regardless of where they occur. Use `flushSync()` to opt-out of batching.

</details>

---

## Scoring Guide

- **25-30 correct:** Expert Level 🏆
- **20-24 correct:** Advanced Level 🌟
- **15-19 correct:** Intermediate Level 📚
- **10-14 correct:** Beginner Level 🌱
- **Below 10:** Keep Learning 💪

## Topics Covered

1. ✅ Hooks (useState, useEffect, useCallback, useMemo, useLayoutEffect, useReducer, useRef)
2. ✅ State Management (immutability, batching, closures, nested updates)
3. ✅ Performance Optimization (React.memo, memoization, re-render prevention)
4. ✅ Error Boundaries
5. ✅ Context API (creation, performance issues)
6. ✅ Lists & Keys
7. ✅ Forms (controlled vs uncontrolled)
8. ✅ Advanced Patterns (forwardRef, Portals, lazy loading)
9. ✅ React Internals (Fiber, reconciliation, Synthetic Events)
10. ✅ React 18 Features (Concurrent Mode, automatic batching)
11. ✅ SSR (hydration)
12. ✅ Common Pitfalls & Anti-patterns

---

## Additional Resources

- [React Official Documentation](https://react.dev)
- [React Beta Docs](https://react.dev/learn)
- [Overreacted Blog by Dan Abramov](https://overreacted.io)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app)

---

**Perfect for:** Interview preparation, skill assessment, team training, and continuous learning!


$$Jsx With Love$$
**JSX is NOT real HTML** 

**Key Points:**
- JSX is **syntactic sugar** for `React.createElement()` calls
- build tool (Babel/SWC) transpiles JSX before the browser sees it
- **Reconciliation**: React converts these objects into actual DOM elements




| Aspect | Intrinsic Elements | Functional Components |
|--------|-------------------|----------------------|
| **Definition** | Built into React/HTML | Defined by you |
| **Naming** | lowercase (`div`, `span`) | PascalCase (`MyComponent`) |
| **Transformation** | String passed to createElement | Function reference passed |
| **Execution** | Creates DOM node directly | Function is called, returns JSX |
| **Props** | HTML attributes only | Any JavaScript value |
| **Reusability** | Limited to HTML spec | Infinitely customizable |

## Advanced JSX Concepts

### 1. **JSX Expression Evaluation**

```jsx
const name = "World";
const element = <h1>Hello {name}</h1>;
// {} allows any JavaScript expression
```

**Rules:**
- Curly braces `{}` evaluate JavaScript expressions
- Only expressions (not statements like `if`/`for`)
- Returns a value that gets converted to string/element

### 2. **JSX Children Algorithm**

```jsx
<Parent>
  {/* Text child */}
  Hello
  
  {/* Element child */}
  <Child />
  
  {/* Expression child */}
  {2 + 2}
  
  {/* Array of children */}
  {items.map(item => <Item key={item.id} />)}
</Parent>
```

**How React processes children:**
- Strings become text nodes
- Elements become component instances
- `null`, `undefined`, `true`, `false` render nothing
- Arrays are flattened and rendered sequentially

### 3. **Props Spreading and Specialization**

```jsx
// Props spreading
const props = { firstName: 'Ben', lastName: 'Hector' };
<Greeting {...props} />

// Equivalent to:
<Greeting firstName="Ben" lastName="Hector" />
```

**Why fragments exist:**
- Components must return single element
- Fragments group without adding extra DOM nodes


**The naming convention is mandatory:**
```jsx
function button() { return <div>Click</div>; }
<button />  // Creates <button> HTML element, NOT your component

function Button() { return <div>Click</div>; }
<Button />  // ✅ Calls your component
```
$$🪝ReactHooks$$
_Hooks are functions in React that let function components use state, side effects, and other React features without using class components._

> Hooks were introduced to solve problems with classes—poor logic reuse, tangled lifecycle methods, and confusing this behavior—while aligning React with functional programming and making code more predictable and reusable.

![alt text](image.png)

**useState** : _gives React a value to remember and a way to trigger re-renders safely._

- State is preserved across renders
- Updating state triggers re-render
  - local state
  - state liftup

**useEffect** : _Run this effect when these values change_

- DOM syncing after paint
- Effects do not run during render
- Effects are synchronized to dependencies, not lifecycles
  - fetching data
  - Subscriptions / cleanup
  - timeinterval/setTimeout

**useContext**: _centralised state and Use it for global-ish data, not high-frequency updates_

- Shares state and functions across the tree
- Re-renders consumers when context value changes
- comman functionality

**useRef**: _A box React ignores during rendering._

- Holds a mutable value that does not cause re-renders
- direct control of dom
- Persisting values across renders
- modal conctrol
- Parent access requires forwardRef
- use ImprativeHandel to acceable in child components

**useMemo**

- Memoizes a computed value & Prevents expensive recalculation

**useCallback**

- cache a function definition between re-renders.
- Prevents unnecessary child re-renders
- Stabilizes dependencies in useEffect
  > Every render recreates functions.
  >
  > - a parent component that re-renders often (state, timer, input, animation)
  > - a child component that is memoized (React.memo)
  > - and you pass a function as a prop

$$useCase$$

- [x] Event handlers shared across systems
- [x] Callbacks registered once but used many times
- [x] Control signals passed to long-lived observers
- [x] Functions used as dependencies in reactive systems
- [x] APIs that rely on identity stability, not value comparison

**useReducer**

- State management via actions + reducer
- Predictable state transitions, not simpler state.

**useActionState**

- use form actions
- give state and action function with error status
- can be used for async/await
  - `const [state, formAction, isPending] = useActionState(fn, initialState, permalink?);`

**useId**

- Generates stable, unique IDs
- Works with SSR + hydration
- Avoids hydration mismatch

**useOptimistic**

- Enables optimistic UI updates
- UI updates before server confirms
- Assume success, rollback on failure.

**useLayoutEfect**

- Like useEffect, but runs before paint
- Measuring layout
- Preventing visual flicker
- Synchronous DOM reads/writes

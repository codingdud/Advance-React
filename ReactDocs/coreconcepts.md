Compund Compostion: is a pattern where we build complex ui using resulable and small component through props and childreen insted of inheritance

Lifting State: state from children component are lifted to parent compoent for shared effect  or effect that affect both diffrent or same

Controlled | uncontrolled components 
---|---
when inforamtion is desrive from props from parent|when it has it own state

pure Components: 
- It does not change any objects or variables that existed before it was called.
- for Given  inputs, it will give the same result.
sideEffect : if function not pure it will generate side effect it can be fix by props and local mutation
# Dynamic style
```jsx
import { useInsertionEffect } from 'react';
function useCSS(rule){
    useInsertionEffect(()=>{

    })
    return rule
}
```
# Fragmant 
if we want to pass key we should use Fragment tag
Using Fragment refs for DOM interaction 

```jsx
import { Fragment } from 'react';

function ClickableFragment({ children, onClick }) {
  return (
    <Fragment ref={ins => {
      ins.addEventListener('click', handleClick);
      return () => ins.removeEventListener('click', handleClick);
    }}>
      {children}
    </Fragment>
  );
}

```

```jsx
import { Fragment, useRef } from 'react';

function FocusFragment({ children }) {
  return (
    <Fragment ref={(fragmentInstance) => fragmentInstance?.focus()}>
      {children}
    </Fragment>
  );
}
```

HOC:is a function that take a Component and return a new Component with addtional behaviour or props
```jsx
import React, { useState, useEffect } from "react";
 
/* ---------------- HOC ---------------- */
function withLoading(WrappedComponent) {
  return function Enhanced({ isLoading, ...props }) {
    if (isLoading) return <h3>Loading...</h3>;
 
    return <WrappedComponent {...props} />;
  };
}
 
/* ---------------- Normal Component ---------------- */
function UserList({ users }) {
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
 
/* ---------------- Enhanced Component ---------------- */
const UserListWithLoading = withLoading(UserList);
 
/* ---------------- Parent ---------------- */
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
 
  // fake API call
  useEffect(() => {
    setTimeout(() => {
      setUsers([
        { id: 1, name: "Adi" },
        { id: 2, name: "Sam" },
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);
 
  return (
    <div>
      <h2>Users</h2>
 
      <UserListWithLoading
        isLoading={isLoading}
        users={users}
      />
    </div>
  );
}
```
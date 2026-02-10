import { memo, useCallback, useState } from "react"
const Child = memo(({ onClick }:{onClick:(id:number)=>void}) => {
  console.log("Child rendered");
  return <button onClick={() => onClick(42)}>Click me</button>;
});
export default function Callback() {
    const [count, setCount] = useState(0);
    const handleClick = useCallback((id:number) => {
        console.log(id)
        setCount(c => c + 1);
    }, []); // or [setCount] if needed
  return (
    <div>
      <p>Count: {count}</p>
      {/* <Child onClick={(id:number)=>{
        console.log(id)
        setCount(c => c + 1);
      }} /> */}
      <Child onClick={handleClick} />
    </div>
  )
}
/* 
Everytime function refrence change becuaze every render triger new function creation it tringger a prop change in Child -> rerender
So we use useCallBack to sablize the function refrence

why memo ?
memo tells React “skip re-rendering this component if its props are referentially the same.”
default behaviour: 
Baseline rule in React:
When a parent re-renders, all children re-render.
 */

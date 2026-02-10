import { useCallback, useEffect, useState } from "react";

export default function Callbackeffect() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const tick = useCallback(() => {
    if (!isRunning) {
      return;
    }
    setCount(c => c + 1);
  }, [isRunning]); // ← only recreate when isRunning changes
  
  useEffect(() => {
    const id = setInterval(tick, 1000);
    console.log("tick chage")
    return () => clearInterval(id);
  }, [tick]); // ← effect only re-runs when tick reference changes

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setIsRunning(r => !r)}>
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  )
}

/* 
tick refrence cahge on isRunn change 
when tick change useEffect runn 
that how useEffect get stable function refrence that dont chage on other state chage
 */

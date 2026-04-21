import { useEffect, useEffectEvent, useState } from "react"
import { createConnection, showNotification } from "../utils/chat"

export default function Eventevent() {
  const [option,setOption]=useState("unknow")
  const fn=useEffectEvent((arg:string)=>{
    showNotification(arg)
  });
  useEffect(()=>{
    const connection=createConnection<string>(option);
    console.log("called")
    connection.on("connected",fn)
    connection.connect();
    return ()=>connection.disconnect()
  },[option])
  return (
    <div>
      <select value={option} onChange={(e)=>setOption(e.target.value)}>
        <option value="general"> general </option>
        <option value="travel"> travel </option>
        <option value="music"> music </option>
        <option value="log"> log </option>
      </select>
    </div>
  )
}
/*
useEffectEvent lets us define an event handler that always has access
to the latest props/state without being a dependency of useEffect.

In this example:
- `fn` is used inside the effect subscription (connection.on).
- It does NOT cause the effect to re-run when state changes.
- But it still sees the latest values when it executes.

This solves a common problem:
If we define the handler inline inside useEffect, we must add
everything it uses as dependencies — which can cause unnecessary
re-subscriptions.

useEffectEvent keeps:
- The subscription logic inside useEffect
- The event reaction logic separate
- Stable effect execution
- No stale closure issues

So it's not just separation of logic —
it's about preventing unnecessary effect re-runs
while still reading fresh state.
*/
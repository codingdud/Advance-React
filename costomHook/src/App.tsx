import useFromHook from "./hooks/useFromHook";
import useCounter from "./hooks/useCounter";
import { useState } from "react";

export default function App() {
  const [val,handeler]=useFromHook<string>("ladla")
  const [dealy,setDelay]=useState(1000)
  const count=useCounter(dealy);
  return <div>
    <input type="text" value={val} onChange={handeler}/>
    <br/>
    <label>
      tick duration in ms<br/>
      <input type="range" min={20} max={2000} name="delay" id="delay" onChange={(e)=>{setDelay(+e.target.value)}}/>
      <hr/>
    </label>
    <p>{count}</p>
  </div>;
}

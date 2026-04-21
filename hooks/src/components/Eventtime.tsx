import { useEffect, useEffectEvent, useState } from "react"

export default function Eventtime() {
  const [count,setCount]=useState(0)
  const [inc,setInc]=useState(1)
  const fn=useEffectEvent(()=>{
    setCount(c=>c+inc);
  })
  useEffect(()=>{
    console.log("timmner called")
    const id=setInterval(fn,1000);
    return ()=>clearInterval(id);
  },[])
  return (
    <div>
      {count}
      <button className="rounded-lg backdrop-blur-3xl bg-fuchsia-300 p-1"
      onClick={()=>{setInc(c=>c+1)}}
      >
        click me
      </button>
    </div>
  )
}

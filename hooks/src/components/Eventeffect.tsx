import { useEffect, useEffectEvent, useState } from "react"

export default function Eventeffect() {
  const [count,setCount]=useState (0);
  const [count1,setCount1]=useState(0);
  const logEvent=useEffectEvent(()=>{
    //console.log("count indide event:",count);
    setCount1(c=>c+1)
  })
  useEffect(()=>{
    const id=setInterval(()=>{
     // console.log("count inside effect:",count);
     setCount(c=>c+1)
    },3000)
    return ()=>clearTimeout(id)
  },[count])
  useEffect(()=>{
    const id=setInterval(()=>{
      logEvent()
    },3000)
    return ()=>clearTimeout(id)
  },[])
  return (
    <div>
      <button onClick={()=>{setCount(c=>c+1)}}>Count:{count}</button>
      <p>{count1}</p>
    </div>
  )
}

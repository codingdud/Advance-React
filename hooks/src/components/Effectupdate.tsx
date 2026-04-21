import { useEffect, useState } from "react"

export default function Effectupdate() {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        const id=setInterval(()=>{
            //setCount(c=>c+1) // update using preev state to reduce the dep 
            setCount(count+1)
        },1000,);
        return ()=> clearInterval(id)
    },[count])
  return (
    <div>{count}</div>
  )
}

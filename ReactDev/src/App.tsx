import { useState } from "react"
import CountDisplay from "./components/Countdisplay"
import Dynamicstyle from "./components/Dynamicstyle"
import Helloworld from "./components/Helloworld"

export default function App() {
  const [count,setCount]=useState(0)

  return (
    <>
      <CountDisplay HelloWorld={<Helloworld/>} count={count} style={{color:"red"}} className="p-2 bg-amber-300" onClick={()=>{console.log("clicked")}}>
        <p>
          this is content
        </p>
      </CountDisplay>
      <button onClick={()=>setCount(prev=>prev+1)}>click me</button>
      <Dynamicstyle value={count}/>
      <Dynamicstyle value="blue"/>
      <Dynamicstyle value="green"/>

    </>
  )
}

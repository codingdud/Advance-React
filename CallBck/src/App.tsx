import { useCallback, useState } from "react"
import Button from './components/Button'
export default function App() {
  const [count,setCount]=useState(0);
  function  handeller(){
    setCount(prev=>prev+1)
  }
  const cb=useCallback(()=>handeller(),[])
  return (
    <>
      <div>{count}</div>
      <Button onClick={cb}/>
    </>
  )
}

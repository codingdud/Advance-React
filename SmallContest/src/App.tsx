import useContextHook from "./context/useContextHook"

export default function App() {
  const {count,setCount}=useContextHook()
  return (
    <div>App
      {count}
      <button onClick={()=>setCount(prev=>prev+1)}>Click Up</button>
    </div>
  )
}

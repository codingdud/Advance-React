import { useMemo, useState } from "react";
import { product } from "../utils/costlycompute";
export default function App() {
  const [count, setCount] = useState(0);
  const [notexpensive,setNotExpensive]=useState(0)
  const expensive=useMemo(() => {
    console.log("useMemo call cache")
    return product(count)
  }, [count]);
  return (
    <>
      <div>App</div>
      <div>{expensive}</div>
      <button onClick={()=>setCount(prev=>prev+1)}>Memo</button>
      <h1>not expensive chage</h1>
      <p>{notexpensive}</p>
      <button onClick={()=>setNotExpensive(prev=>prev+1)}>cahge with out expwnsive</button>
    </>
  );
}

import { useState } from "react";

export default function Input() {
  const [val,setVal]=useState("hello")
  return <><input
  type="text"
  placeholder="enter..."
  value={val}
  onChange={(e)=>{setVal(e.currentTarget.value)}}
  /></>;
}

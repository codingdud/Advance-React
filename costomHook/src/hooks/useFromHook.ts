import { useState, type ChangeEvent } from "react";

export default function useFromHook<T>(message:T) {
  const [val,setVal]=useState(`enter a value...${message}`)
  function handelChange(e:ChangeEvent<HTMLInputElement>){
    setVal(e.target?.value)
  }
  return [val,handelChange] as const;
}

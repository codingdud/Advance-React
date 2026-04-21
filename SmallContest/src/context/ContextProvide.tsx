import { useState, type ReactNode } from "react";
import Context from "./context";
// provider wraper component for app
// values contain states and function taht will state 
// context is just provider still real state are manage by useSate
export default function ContextProvide({children}:{children:ReactNode}) {
  const [count,setCount]=useState(0);
  return (<Context.Provider value={{count,setCount}}>
    {children}
  </Context.Provider>)
}

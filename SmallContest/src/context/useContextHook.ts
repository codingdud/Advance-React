import { useContext } from "react";
import Context from "./context";
// use component waht use useContext no neet to call Context and useContext
export default function useContextHook(){
  const context=useContext(Context)
  if(!context) throw Error("Context not found");
  return context;
}
import { useImperativeHandle, useRef, type Ref } from "react";
import type { InputHandle } from "../App";
export default function Inputwith({ ref }:{ref:Ref<InputHandle>}) {
  const iref=useRef<HTMLInputElement|null>(null)
  useImperativeHandle(ref,()=>({
    focus(){
      iref.current?.focus()
    },
    clean(){
      iref.current?iref.current.value="":undefined;
    }
  }))
  return <input type="text" ref={iref} />;
}

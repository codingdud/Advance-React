import { useRef } from "react";
import Inputwithout from "./components/Inputwithout";
import Inputwith from "./components/Inputwith";
// inputHandle.ts  ← shared type
export interface InputHandle {
  focus: () => void;
  clean: () => void;
}
export default function App() {
  const directRef = useRef<HTMLInputElement|null>(null);
  const indirect = useRef<InputHandle>(null);
  return <>
    <Inputwithout ref={directRef}/>
    <section role="direct ref control">
      <button onClick={()=>directRef.current?.focus()}>focuse</button>
      <button onClick={()=>{directRef.current?directRef.current.value="":undefined}}>clean</button>
    </section>
    <Inputwith ref={indirect}/>
    <section role="direct ref control">
      <button onClick={()=>indirect.current?.focus()}>focuse</button>
      <button onClick={()=>{indirect.current?.clean()}}>clean</button>
    </section>
  </>;
}

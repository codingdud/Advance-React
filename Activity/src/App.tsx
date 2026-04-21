import { Activity, useState } from "react";
import SideBar from "./components/SideBar";
import Input from "./components/Input";

export default function App() {
  const[togal,setTogal]=useState(true);
  return <>
    <button onClick={()=>setTogal(prev=>!prev)}>Button</button>
    <Activity mode={togal?"visible":"hidden"}>
      <SideBar/>
    </Activity>
    {togal&&<Input/>}
    <Activity mode={togal?"visible":"hidden"}>
      <Input/>
    </Activity>
  </>;
}
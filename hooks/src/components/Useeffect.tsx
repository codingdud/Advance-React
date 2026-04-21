import { useEffect, useState } from "react";
import chat from "../utils/chat";

export default function Useeffect() {
  const [option,setOption]=useState("unknow")
  useEffect(() => {
    const session = chat("server", option);
    session.connected();
    return () => {
      session.disconnected();
    };
  }, [option]);
  return (
    <div>
      <select value={option} onChange={(e)=>setOption(e.target.value)}>
        <option value="general"> general </option>
        <option value="travel"> travel </option>
        <option value="music"> music </option>
        <option value="log"> log </option>
      </select>
    </div>
  );
}

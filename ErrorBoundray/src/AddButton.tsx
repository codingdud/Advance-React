import { useTransition } from "react";

export default function AddButton() {
  const [ispending,startTrnasition]=useTransition() //invoking in nature
  function addComent(){
    throw new Error("got some error")
  }
  return <button
  disabled={ispending}
  onClick={()=>{
    startTrnasition(()=>{
      addComent()
    })
  }}
  >
    add button
  </button>;
}

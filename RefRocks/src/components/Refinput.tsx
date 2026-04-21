import { useRef } from "react"

export default function Refinput() {
  const ref=useRef<HTMLInputElement|null>(null)
  function handelClick(){
    //console.log(e.target.value)
    console.log(ref?.current?.value);
  }
  return (
    <div className="bg-white">
      <input ref={ref}/>
      <button className="bg-blue-800" type="button" onClick={handelClick}>Button</button>
    </div>
  )
}

import { useId } from "react"
import Input from "./components/Input"
import Label from "./components/Label"

//useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
export default function App() {
  const unique=useId()
  const unique1=useId()
  const unique2=useId()
  const unique3=useId()
  return (
    <>
    <div>unique:{unique}</div>
    <div>unique:{unique1}</div>
    <div>unique:{unique2}</div>
    <div>unique:{unique3}</div>
    <Label label="Name" htmlFor={unique}/>
    <Input id={unique} aria-describedby={unique1}/>
    <p id={unique1} className="hint">this password should cotain</p>
    </>
  )
}

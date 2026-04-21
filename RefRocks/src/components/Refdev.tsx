import { useRef } from "react"

export default function Refdev() {
  const ref =useRef(0)
  function handelrefcount(){
    ref.current=ref.current+1;
    console.log(ref.current);
  }
  console.log("re-render")
  return (
    <div className="bg-red-100 p-8 rounded-lg">
      <button
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      onClick={handelrefcount}
      >ref click:{/* {ref&&ref.current} */}</button>
    </div>
  )
}
/*
useRef stores a mutable value that persists across renders.

Updating `ref.current` does NOT trigger a re-render,
because React does not track changes to refs.

Refs are useful for:
- Storing mutable values between renders
- Holding DOM references
- Keeping data that should not affect UI rendering

So refs are not for optimization by default —
they are for storing values outside React’s reactive system.
*/


import { memo, useCallback, useEffect, useState, type ChangeEvent } from "react"
import List from "./List";

export default memo(function Effectdebounce() {
  const [query,setQuery]=useState("");
  const [dequery,setDequery]=useState("")

  useEffect(()=>{
    const id=setTimeout(()=>{
      setDequery(query)
    },2000)
    return ()=>clearTimeout(id);
  },[query])

  // Memoize the onChange handler to prevent unnecessary re-renders
  const handleChange = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
    setQuery(e.target.value)
  }, [])

  return (
    <div>
      <input type="text" name="search" id="search-debouce" placeholder="search..." onChange={handleChange} />
       <List query={dequery}/>
    </div>
  )
})

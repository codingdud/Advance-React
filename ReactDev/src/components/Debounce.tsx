import { useState, type ChangeEvent } from "react"
import debounce from "../utils/debounce"
import List from "./List";
export default function Debounce() {
    const [query,setQuery]=useState("");
    const handelSearch=function(e:ChangeEvent<HTMLInputElement>){
        setQuery(e.target?.value??"")
    }
    const debounceSearch=debounce(handelSearch,2000)
  return (
    <div>
        <input type="text" name="search" id="search" onChange={debounceSearch}/>
        <List query={query}/>
    </div>
  )
}

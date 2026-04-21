import { useState, type ChangeEvent } from "react"
import throllle from "../utils/throttle";
import List from "./List";

export default function Throttle() {
    const[query,setQuery]=useState("");
    const handelSearch=function(e:ChangeEvent<HTMLInputElement>){
        setQuery(e.target.value);
    }
    const throllleHandelSearch=throllle(handelSearch,2000)
  return (
    <div>
        <input type="text" name="search" id="search-throttle" onChange={throllleHandelSearch} />
        <List query={query}/>
    </div>
  )
}

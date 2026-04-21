import { useState, type ChangeEvent } from "react";
import Search from "./components/Search";
import List from "./components/List";

export default function App() {
  const [data, setData] = useState("");

  function handelchange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setData(value);
  }

  return <>
    <Search onChange={handelchange}/>
    <List filter={data}/>
  </>;
}

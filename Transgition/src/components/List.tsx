import { useEffect, useState, useTransition } from "react";

const DATA=["string"];
for(let i=0;i<100_00;i++){
  DATA.push("product "+i)
}

export default function List({filter}:{filter?:string}) {
  const [data, setData] = useState<string[]>([]);
  const [ispending,startTransgition]=useTransition();
  useEffect(()=>{
    startTransgition(async()=>{
    setData(DATA.filter(e=>e.includes(filter??"")))
    })
  },[filter])

  return (
    <>
    {ispending&&<p>pending ...</p>}
      {data.map((p, i) => (
        <ul key={i}>{p}</ul>
      ))}
    </>
  );
}

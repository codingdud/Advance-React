import { useEffect, useState } from "react";

export default function EffectfEffectfetchetch() {
  //fetching a data with pending status
  const [option, setOption] = useState("unknow");
  const [data,setData]= useState<null|object>({});
  useEffect(() => {
    console.log(option)
    let ignore=false;
    setData(null);
    fetch(`https://api.datausa.io/tesseract/cubes`)
    .then(data=>data.json())
    .then(val=>{
      if(!ignore){
        setData(val)
      }
    })
    return ()=>{
      ignore=true;
    }
  }, [option]);
  return (
    <div>
      <select value={option} onChange={(e) => setOption(e.target.value)}>
        <option value="Alice"> Alice </option>
        <option value="travas"> travas </option>
        <option value="snop"> snop </option>
        <option value="winz"> winz </option>
      </select>
      <div>{data?data.name:"...loading"}</div>
    </div>
  );
}

import { useActionState } from "react";
type State = {
  count: number;
  name: string;
};
export default function Formaction() {
    async function inc(curr:State, formData:FormData) {
    console.log(curr)
    let name:string="";
    for(const [k,v] of formData.entries()){
        console.log(k,v)
        name=String(v);
        if(v==="hello") name="";
    }
    await new Promise((res)=> setTimeout(()=>{res("lol")},1000))
    return {
        count:curr.count+1,
        name
    }
  }
  const [state, formAction, ispending] = useActionState(inc,{count:0,name:""});
  return (
    <>
      <div>{state.count}:{ispending?"true":"false"}</div>
      <form action={formAction} className="flex justify-around">
        <label htmlFor="nameid">Label</label>
        <input type="text" name="name" id="nameid" placeholder="Name.." defaultValue={state.name}></input>
        <button  disabled={ispending}>Button</button>
      </form>
    </>
  );
}

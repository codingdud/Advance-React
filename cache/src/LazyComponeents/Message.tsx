import { memo, use } from "react";



const messagePromise  =  new Promise<string>((res)=>{
      setTimeout(()=>{
        res("Hello")
      },3000)
    })

    console.log("sfsdfsd")

export default memo(function Message() {
  /* const messagePromise = useMemo(
    () => new Promise<string>((res) => {
      setTimeout(() => res("Hello"), 1000);
    }),
    [] // empty deps = created once
  ); */
  console.log("promise inside a Child but in component")
  const message = use(messagePromise)??"hello";
  return <div>helllo {message}</div>;
})

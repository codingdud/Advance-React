import { useState, useEffect, useInsertionEffect, type ReactNode } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  count: number;
  HelloWorld?:ReactNode,
}
// Child component that will be unmounted
export default function CountDisplay({children,count,HelloWorld,...props}:Props) {
  const [show, setShow] = useState(true);
  const primary="red";
  const insered=new Set<string>()
  function useCSS(rules:unknown,id:unknown){
    useInsertionEffect(()=>{
      if(typeof id !=='string') return;
      if(insered.has(id)) return;
      insered.add(id);
      const style=document.createElement("style");
      style.setAttribute("data-css",id);
      if(typeof rules==="string")
      style.textContent=rules;
      document.head.appendChild(style);
      return ()=>{
        style.remove();
        insered.delete(id)
      };
    },[rules,id])
    return id;
  }
  const className = useCSS(
    `.bg-${primary} { color: ${primary ? 'blue' : 'gray'} }`,
    `bg-${primary}`
  );
  useEffect(() => {
    console.log("✅ Component MOUNTED - Timer started");
    
    const timer = setTimeout(() => {
      setShow(prev=>!prev);
    }, 3000);
    // Cleanup function
    return () => {
      console.log("🧹 CLEANUP called - Component UNMOUNTING");
      clearTimeout(timer);
    };
  }, []);
  let content=<p>not yet mount</p>;
  if(show) content=<p>Content is sucess</p>
  else content=<p>Content is failed</p>
  return (
    <div>
      {HelloWorld??HelloWorld}
      <h3>{count?count:-1}</h3>
      <p>{show ? "Loading completed" : "Loading..."}</p>
      <div {...props}>{children}</div>
      {content}
      <button className={typeof className === "string" ? className : ""}>Button</button>
    </div>
  );
}


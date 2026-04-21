import { useRef, useState } from "react";

export default function Refwatch() {
  const [start, setStart] = useState(0);
  const [now, setNow] = useState(0);
  const rtime = useRef(0);
  function handelStart() {
    setStart(Date.now());
    setNow(Date.now());
    clearInterval(rtime.current);
    rtime.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }
  function handelStop(){
    clearInterval(rtime.current)
  }
  let secpass = 0;
  if (start != 0 && now !== 0) {
    secpass = (now - start) / 1000;
  }
  return (
    <div>
      <p>{secpass}</p>
      <button onClick={handelStart}>start</button>
      <button onClick={handelStop}>stop</button>
    </div>
  );
}
/* 
Do not write or read ref.current during rendering.
You can read or write refs from event handlers or effects instead.
 */
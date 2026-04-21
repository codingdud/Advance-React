import { lazy, Suspense, use, useMemo, useState, memo } from "react";
import Message from "./LazyComponeents/Message";
import LazyMessage from "./LazyComponeents/LazyMessage";
import { flat } from "./utils/faltObject";

const LazyMarkdown=lazy(()=>delayForDemo(import('./LazyComponeents/lasy')))
// Move promise creation outside component to prevent re-creation
const fetchThemPromise = new Promise<string>(res=>setTimeout(()=>res("hello from function call"),4000));
const API_URL = "https://jsonplaceholder.typicode.com/posts"; // Replace with your actual API URL
// Create fetch promise outside component to prevent re-fetching
const fetchDataPromise = fetch(API_URL).then(res => res.json());

export default function App() {
  const [text,setText]=useState("Hello, **world**!")
  const messagePromise = useMemo(()=>new Promise<string>((resolve) => setTimeout(() => resolve("Hello, World!"), 2000)),[]);
  return <div>
    <input type="text" value={text} onChange={(e)=>{setText(e.currentTarget.value)}}/>
    <Suspense fallback={<p>loading...</p>}>
    <LazyMarkdown markdown={text}/>
    </Suspense>
    <Suspense fallback={<p>loading message....</p>}>
     <Message/>
    </Suspense>
    <Suspense fallback={<p>third promise ...</p>}>
      <LazyMessage messagePromise={messagePromise}/>
    </Suspense>
    <Suspense fallback={<p>fourth promise ...</p>}>
      <LazyMessage2 messagePromise={fetchThemPromise}/>
    </Suspense>
    <Suspense fallback={<p>fetch data...</p>}>
      <DisplayObject fetchPromise={fetchDataPromise}/>
    </Suspense>
    </div>;
}

const LazyMessage2 = memo(function LazyMessage2({messagePromise}:{messagePromise:Promise<string>}) {
  console.log("callled in fetch them")
  const message = use(messagePromise);
  return <div>{message}</div>;
});

function delayForDemo<T>(promise: Promise<T>): Promise<T> {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}


export const DisplayObject = memo(function DisplayObject({ fetchPromise }: { fetchPromise: Promise<unknown> }) {
  console.log("call from display") // This should only log once now
  const fetchedData = use(fetchPromise);
  const data = flat(fetchedData);
  return (
    <div>
      {data.map((val, i) => (
        <p key={i}>{String(val)}</p>
      ))}
    </div>
  );
});

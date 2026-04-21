 import {
  lazy,
  Suspense,
  useEffect,
  useEffectEvent,
  useLayoutEffect,
  useState,
} from "react";
import { flat } from "./utils/flatobject";
const API_URL = "https://jsonplaceholder.typicode.com/posts"; // Replace with your actual API URL
const DisplayObject = lazy(()=>import('./components/DisplayObject'))
console.log("initialize");

export default function App() {
  const [data, setData] = useState<unknown[]>([]);
  console.log("component call");
  const callback = useEffectEvent(async () => {
    try {
      const res = await fetch(API_URL);
      const responseData = await res.json();
      console.log(responseData);
      setData(flat(responseData));
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  });
  useEffect(() => {
    console.log("component after paint");
    callback();
  }, []); // Added dependency array to prevent infinite loop
  useLayoutEffect(() => {
    console.log("componet befor paint");
  });
  return (
    <Suspense fallback={<p>...loading</p>}>
      <DisplayObject data={data} />
    </Suspense>
  );
}

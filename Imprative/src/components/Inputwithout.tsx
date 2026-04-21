import { type RefObject } from "react";

export default function Inputwithout({ ref }:{ref:RefObject<HTMLInputElement|null>}) {
  return <input type="text" ref={ref} />;
}

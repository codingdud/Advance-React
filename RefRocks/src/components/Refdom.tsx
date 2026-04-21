import { Fragment, useRef } from "react";

export default function Refdom() {
  const ref = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  function handelFocuse() {
    ref.current?.focus();
  }
  function scrollToIndexx(i:number) {
    const listNode = listRef.current;
    const imgNode = listNode?.querySelectorAll("li>img")[i];
    imgNode?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
  return <>
      <input type="text" name="name" id="name1" ref={ref} />
      <button onClick={handelFocuse}>focuse</button>
      <Fragment>
        <nav className="flex flex-row justify-around">
          <button className="btn" onClick={() => scrollToIndexx(1)}>
            nanci
          </button>
          <button onClick={() => scrollToIndexx(0)}>butterscoch</button>
          <button onClick={() => scrollToIndexx(2)}>princes</button>
        </nav>
        <ul ref={listRef} className="flex overflow-x-auto gap-4 px-4">
          <li className="shrink-0">
            <img
              className="w-72 h-48 object-cover"
              src="https://placecats.com/neo/300/200"
              alt="Neo"
            />
          </li>

          <li className="shrink-0">
            <img
              className="w-72 h-48 object-cover"
              src="https://placecats.com/millie/200/200"
              alt="Millie"
            />
          </li>

          <li className="shrink-0">
            <img
              className="w-72 h-48 object-cover"
              src="https://placecats.com/bella/199/200"
              alt="Bella"
            />
          </li>

          {/* repeat */}
        </ul>
      </Fragment>
    </>
}
/* 
React saves the initial ref value once and ignores it on the next renders.
if (playerRef.current !== null) { null check for ref

 */
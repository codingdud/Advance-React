import { useState } from "react";

const ITEM_LENGTH   = 200;
const ITEM_LIST = Array.from({ length: ITEM_LENGTH  }, (_, i) => (
  <ListItem index={i} data={`item ${i}`} />
));
const itemheight = 32;
const windowheight = 700;
const overscan=1;

export default function OptimalList() {
  const [scrollTop, setScrollTop] = useState(0);
  const startIndex = Math.max(0,Math.floor(scrollTop / itemheight)-overscan);
  //const endIndex = Math.floor((scrollTop + windowheight) / itemheight)+overscan;
  let renderNodeCount=Math.floor(windowheight/itemheight)+2*overscan;
  renderNodeCount=Math.min(ITEM_LENGTH-startIndex,renderNodeCount);
  return (<>
  <span>total record in virtural table: {renderNodeCount}</span>
    <ul
      className="p-6 border-2 overflow-y-scroll"
      style={{ height: `${windowheight}px` }}
      onScroll={(e)=>{
        console.log(e.currentTarget.scrollTop)
        setScrollTop(e.currentTarget.scrollTop)
      }}
    >
      <div style={{height:`${ITEM_LENGTH*itemheight}px`}}>
        <div style={{transform:`translateY(${startIndex*itemheight}px)`}}>
          {ITEM_LIST.slice(startIndex,startIndex+renderNodeCount)}
        </div>
      </div>
    </ul>
    </>
  );
}
export function ListItem({ index, data }: { index: number; data: string }) {
  return (
    <li
      style={{
        //top: `${55+index * itemheight}px`,
        height: `${itemheight}px`,
        backgroundColor:index%2===0?"#045645":"#345456",
      }}
      className="w-full"
      key={index}
    >
      {data}
    </li>
  );
}

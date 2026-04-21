const ITEM_LENGHT=20000;
const ITEM_LIST=Array.from({length:ITEM_LENGHT},(_,i)=><ListItem key={i} data={`item ${i}`}/>);


export default function List(){
  return <ul className="p-6 h-125 border-2 overflow-y-scroll">
    {ITEM_LIST}
  </ul>
}
export function ListItem({key,data}:{key:number,data:string}){
  return <li key={key}>{data}</li>
}
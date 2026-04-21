import type { TodoItem } from "../App";


export default function List({list}:{list:TodoItem[]}) {
  return <li>
  {list.map(e=><ul key={e.id} style={e.pending?{opacity:0.5}:undefined}>{e.title}</ul>)}
  </li>;
}

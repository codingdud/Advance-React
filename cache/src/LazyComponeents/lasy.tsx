import { Remarkable } from "remarkable";
const md = new Remarkable();
export default function LazyMarkdown({ markdown }:{markdown:string}) {
  return <div
  className="content"
  dangerouslySetInnerHTML={{__html:md.render(markdown)}}
  />;
}

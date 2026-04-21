export default function Label({label,...props}:{label:string,htmlFor:string}) {
  return <label className="label" {...props}>{label}</label>;
}

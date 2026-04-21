import { use } from "react";

export default function LazyMessage({messagePromise}:{messagePromise:Promise<string>}) {
  const message = use(messagePromise);
  return <div>{message}</div>;
}

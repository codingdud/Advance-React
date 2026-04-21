import type { ChangeEventHandler } from "react";

export default function Search({ onChange, ...props }: { onChange?: ChangeEventHandler<HTMLInputElement> }) {
  return <input onChange={onChange} {...props} type="text" />;
}

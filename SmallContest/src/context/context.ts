import { createContext, type Dispatch, type SetStateAction } from "react";
interface StateObj{
  count:number;
  setCount:Dispatch<SetStateAction<number>>;
}
export default createContext<StateObj|undefined>(undefined)
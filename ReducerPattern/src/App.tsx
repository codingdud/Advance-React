import { useReducer } from "react";
type Action={type:"inc"}|{type:"dec"}|{type:"reset"};
function reducer(state:{count:number}, action:Action) {
  switch (action.type) {
    case "inc":
      return { count: state.count+1 };
      break;
    case "dec":
      return { count: state.count-1  };
      break;
    case "reset":
      return { count:0 };
      break;
  }
}
export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <div>Reducer</div>
      <div>{state?.count}</div>
      <button onClick={() => dispatch({type:"inc"})}>inc</button>
      <button onClick={() => dispatch({type:"dec"})}>dec</button>
      <button onClick={() => dispatch({type:"reset"})}>reset</button>
    </>
  );
}

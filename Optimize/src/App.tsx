import { useOptimistic, useRef, useState, startTransition } from "react";
import List from "./components/List";
export type TodoItem = { id: string; title: string ,pending?:boolean};
type TodoType = TodoItem[];

function reducer(state:TodoType, action:{type:"ADD"|"UPDATE", payload?:TodoItem}):TodoType{
  switch(action.type){
    case "ADD":
      return action.payload ? [...state, action.payload] : state;
    case "UPDATE":
      return state;
    default:
      return state;
  }
}

export default function App() {
  const [todo, setTodo] = useState<TodoType>([{ id: "122234", title: "first" }]);
  const [todoOptamistic,setTodoOptamistic]=useOptimistic(todo,reducer);
  const inputRef = useRef<HTMLInputElement>(null);
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (inputRef.current === null) return;

    const title = inputRef.current.value;
    const optimisticItem: TodoItem = { id: "temp-" + Date.now(), title,pending:true };
    inputRef.current.value = "";
    startTransition(async()=>{
    setTodoOptamistic({type:"ADD",payload:optimisticItem})
    const todolist=await createTodo(title);
    setTodo(prev=>[...prev,todolist]);
    })

  }

  return (
    <main>
      <form onSubmit={onSubmit}>
        <h1>Title</h1>
        <label htmlFor="input1">Search</label>
        <input
          ref={inputRef}
          type="text"
          id="input1"
          name="search"
          placeholder="search .."
          defaultValue="hello"
        />
        <button>Create Todo</button>
      </form>
      <List list={todoOptamistic} />
    </main>
  );
}

function createTodo(title: string): Promise<TodoItem> {
  return new Promise((res) =>
    setTimeout(() => res({ id: Math.random().toString().slice(0, 8), title:title+"-server"}), 4000)
  );
}

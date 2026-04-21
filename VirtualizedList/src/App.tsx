//import List from "./components/List";
import OptimalList  from "./components/OptimalList";
import VirtualList from "./components/VirtualList";

export default function App() {
  return (
    <div className="p-5">
      {/*  <List /> */}
      <VirtualList/>
      <OptimalList/>
    </div>
  );
}

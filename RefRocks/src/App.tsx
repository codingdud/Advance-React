import Refdev from "./components/Refdev";
import Refdom from "./components/Refdom";
import Refinput from "./components/Refinput";
import Refwatch from "./components/Refwatch";

export default function App() {
  return (
    <div className="bg-red-500 min-h-screen p-4">
      <Refdev/>
      <Refinput/>
      <Refwatch/>
      <Refdom/>
    </div>
  )
}

import Callbackeffect from "./components/Callbackeffect";
import Callback from "./components/Callbackmemo";
import Formaction from "./components/Formaction";
import Useeffect from "./components/Useeffect";

export default function App() {
  return (
    <>
      <div>App</div>
      <Formaction />
      <Callback/>
      <Callbackeffect/>
      <Useeffect/>
    </>
  );
}

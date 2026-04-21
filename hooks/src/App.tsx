import Callbackeffect from "./components/Callbackeffect";
import Callback from "./components/Callbackmemo";
import Effectdebounce from "./components/Effectdebounce";
import Effectfetch from "./components/Effectfetch";
import Effectupdate from "./components/Effectupdate";
import Eventeffect from "./components/Eventeffect";
import Eventevent from "./components/Eventevent";
import Eventtime from "./components/Eventtime";
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
      <Effectfetch/>
      <Effectupdate/>
      <Effectdebounce/>
      <Eventeffect/>
      <Eventevent/>
      <Eventtime/>
    </>
  );
}

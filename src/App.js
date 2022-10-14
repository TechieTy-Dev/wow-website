import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Alliance from "./pages/Alliance";
import Horde from "./pages/Horde";
import Expansions from "./pages/Expansions";
import Classes from "./pages/Classes";
import Sidebar from "./components/Sidebar";
import {
  BoA,
  Cata,
  Legion,
  MoP,
  Shadowlands,
  TBC,
  WoD,
  WoTLK,
} from "./pages/wowExpansions";
import {
  DK,
  DH,
  Hunter,
  Mage,
  Druid,
  Priest,
  Shaman,
  Warrior,
  Warlock,
  Monk,
  Rogue,
  Paladin,
} from "./pages/wowClasses";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />

        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Alliance"} element={<Alliance />} />
          <Route path={"/Horde"} element={<Horde />} />

          <Route path={"/Expansions"} element={<Expansions />} />
          <Route path={"/Expansions/BoA"} element={<BoA />} />
          <Route path={"/Expansions/TBC"} element={<TBC />} />
          <Route path={"/Expansions/WoTLK"} element={<WoTLK />} />
          <Route path={"/Expansions/Cata"} element={<Cata />} />
          <Route path={"/Expansions/MoP"} element={<MoP />} />
          <Route path={"/Expansions/WoD"} element={<WoD />} />
          <Route path={"/Expansions/Legion"} element={<Legion />} />
          <Route path={"/Expansions/Shadowlands"} element={<Shadowlands />} />

          <Route path={"/Classes"} element={<Classes />} />
          <Route path={"/Classes/DK"} element={<DK />} />
          <Route path={"/Classes/DH"} element={<DH />} />
          <Route path={"/Classes/Hunter"} element={<Hunter />} />
          <Route path={"/Classes/Druid"} element={<Druid />} />
          <Route path={"/Classes/Mage"} element={<Mage />} />
          <Route path={"/Classes/Monk"} element={<Monk />} />
          <Route path={"/Classes/Priest"} element={<Priest />} />
          <Route path={"/Classes/Paladin"} element={<Paladin />} />
          <Route path={"/Classes/Rogue"} element={<Rogue />} />
          <Route path={"/Classes/Shaman"} element={<Shaman />} />
          <Route path={"/Classes/Warlock"} element={<Warlock />} />
          <Route path={"/Classes/Warrior"} element={<Warrior />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

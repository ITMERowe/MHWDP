import { BrowserRouter, Route, NavLink, Routes, Navigate } from "react-router-dom";
import { GiMonsterGrasp } from "react-icons/gi";
import { GiCrocSword } from "react-icons/gi";
import { GiLeatherArmor } from "react-icons/gi";
import { GiMountainRoad } from "react-icons/gi";
import { GiMasterOfArms } from "react-icons/gi";
 
import "./App.css";

import Monster from "./pages/Monster";
import Location from "./pages/Location";
import ArmorSet from "./pages/ArmorSet";
import Weapon from "./pages/Weapon";
import About from "./pages/About";
import Description from "./pages/Description";

function App() {
  return (
    <BrowserRouter>
      <header class="clearfix">
        <p id="titleGroup">Monster Hunter Database</p>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/monster" />}></Route>
        <Route path="/monster" element={<Monster />}></Route>
        <Route path="/location" element={<Location />}></Route>
        <Route path="/armorset" element={<ArmorSet />}></Route>
        <Route path="/weapon" element={<Weapon />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/description/:id" element={<Description />}></Route>
      </Routes>
      <footer>
        <NavLink to="/monster" className="iconWrapper">          
          <GiMonsterGrasp className="icon" />
          Monsters
        </NavLink>
        <NavLink to="/location" className="iconWrapper">          
          <GiMountainRoad className="icon" />
          Locations
        </NavLink>
        <NavLink to="/armorset" className="iconWrapper">          
          <GiLeatherArmor className="icon" />
          Armor Sets
        </NavLink>
        <NavLink to="/weapon" className="iconWrapper">          
          <GiCrocSword className="icon" />
          Weapons
        </NavLink>
        <NavLink to="/about" className="iconWrapper">          
          <GiMasterOfArms className="icon" />
          About
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}
 
export default App;
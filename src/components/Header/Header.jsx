import { useState } from "react";
import FollowUs from "./FollowUs";
import HeaderSlider from "./HeaderSlider";
import Navigation from "./Navigation";
import SearchBox from "./SearchBox/SearchBox";
import cinema from "../../Assets/images/cinema.jpg";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [bg, setBg] = useState(cinema);

  return (
    <header
      className={`transition-all duration-500 bg-cover pb-8 bg-center md:py-8 ${location.pathname != "/" ? "h-[600px]" : ""}`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(30 41 59 / 100%), rgb(30 41 59 / 60%), rgb(30 41 59 / 30%)), url('${bg}')`,
      }}
    >
      <Navigation />
      <div className="container">
        <SearchBox />
        <div className={`${location.pathname !== "/" ? "hidden" : "block"}`}>
          <FollowUs />
          <HeaderSlider setBg={setBg} />
        </div>
      </div>
    </header>
  );
}

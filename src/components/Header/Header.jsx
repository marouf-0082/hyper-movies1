import { useState } from "react";
import FollowUs from "./FollowUs";
import HeaderSlider from "./HeaderSlider";
import Navigation from "./Navigation";
import SearchBox from "./SearchBox";
import cinema from "../../Assets/images/cinema.jpg";

export default function Header() {
  const [bg, setBg] = useState(cinema);

  return (
    <header
      className="transition-all duration-500 bg-cover pb-8 bg-center md:py-8"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(30 41 59 / 100%), rgb(30 41 59 / 60%), rgb(30 41 59 / 30%)), url('${bg}')`,
      }}
    >
        <Navigation />
      <div className="container">
        <SearchBox />
        <FollowUs />
        <HeaderSlider setBg={setBg} />
      </div>
    </header>
  );
}

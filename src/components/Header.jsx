import blacklogo from "../assets/blacklogo.png";
import DigitalClock from "./Time";
function Header() {
  return (
    <div id="header" className="fixed w-full">
      <nav className="flex items-center justify-between px-6 py-6 bg-white ">
        <DigitalClock />
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={blacklogo} className="w-20 " alt="black logo" />
        </div>

        <ul className="ml-auto flex gap-3 pr-6 text-sm font-medium">
          <li>
            <a href="#hero">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

// Assets
import logo from "../assets/logo.svg";

// Components
import { Button } from "./ui/button";

const Nav = () => {
  return (
    <nav className="w-[1200px] h-[80px] flex flex-row items-center justify-between px-4">
      <img src={logo} alt="logo" className="w-[120px] bg-green" />
      <Button className="w-[120px]">Join Now</Button>
    </nav>
  );
};

export default Nav;

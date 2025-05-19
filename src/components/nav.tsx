// Assets
import logo from "../assets/logo.svg";

// Components
import { Button } from "./ui/button";

const Nav = () => {
  return (
    <nav className="w-[1400px] h-[80px] flex flex-row items-center justify-between px-4">
      <img src={logo} alt="logo" className="w-[130px]" />
      <Button className="w-[130px] h-[35px] bg-[#009263] cursor-pointer">
        Join Now
      </Button>
    </nav>
  );
};

export default Nav;

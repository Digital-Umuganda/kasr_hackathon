// Assets
import logo from "../../assets/logo.svg";

// Components
import Width from "../width";
import { Button } from "../ui/button";

const Nav = () => {
  return (
    <Width className="h-[100px] flex flex-row items-center justify-between px-4">
      <img src={logo} alt="logo" className="w-[150px]" />
      <Button className="w-[130px] h-[35px] bg-[#009263] cursor-pointer">
        Join Now
      </Button>
    </Width>
  );
};

export default Nav;

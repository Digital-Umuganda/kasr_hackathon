// Assets
import logo from "../../assets/logo.svg";

// Components
import Width from "../width";

const Nav = () => {
  return (
    <Width className="h-[100px] flex flex-row items-center justify-between px-4">
      <img src={logo} alt="logo" className="w-[150px]" />
    </Width>
  );
};

export default Nav;

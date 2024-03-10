import { Link, useLocation } from "react-router-dom";
import { BlueLogo, WhiteLogo } from "../assets";
import Button from "./button";
import "./style.scss";

const Header = () => {
  const { pathname } = useLocation();
  const headerStyle = pathname === "/";
  return (
    <header>
      <img src={headerStyle ? WhiteLogo : BlueLogo} alt="팀리턴로고" />
      <nav className={`navi-${headerStyle ? "blue" : "white"}`}>
        <Link to="/">비전 및 문화</Link>
        <Link
          to="/member"
          style={(pathname === "/member" && { color: "black" }) || {}}
        >
          멤버
        </Link>
        <Link to="/">JOBIS</Link>
      </nav>
      <aside>
        <Button size="md" type={headerStyle ? "light" : "gray"}>
          3기 지원하기
        </Button>
      </aside>
    </header>
  );
};

export default Header;

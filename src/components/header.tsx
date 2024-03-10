import { Link, useLocation } from "react-router-dom";
import { BlueLogo, Menu, WhiteLogo } from "../assets";
import Button from "./button";
import "./style.scss";
import { jobisUrl, recruitmentUrl, visionUrl } from "../utils/url";

const Header = () => {
  const { pathname } = useLocation();
  const headerStyle = pathname === "/";
  return (
    <header>
      <Link to="/">
        <img src={headerStyle ? WhiteLogo : BlueLogo} alt="팀리턴로고" />
      </Link>
      <nav className={`navi-${headerStyle ? "blue" : "white"}`}>
        {/* @todo 디자인 나오면 Link로 대체하기  */}
        <a href={visionUrl} target="_blank">
          비전 및 문화
        </a>
        <Link
          to="/member"
          style={(pathname === "/member" && { color: "black" }) || {}}
        >
          멤버
        </Link>
        {/* @todo 위와 마찬가지 */}
        <a href={jobisUrl} target="_blank">
          JOBIS
        </a>
      </nav>
      <aside>
        <Button
          size="md"
          type={headerStyle ? "light" : "gray"}
          onClick={() => {
            window.open(recruitmentUrl);
          }}
        >
          3기 지원하기
        </Button>
        <button className="menu">
          <img src={Menu} alt="메뉴" />
        </button>
      </aside>
    </header>
  );
};

export default Header;

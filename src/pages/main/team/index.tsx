import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GradientLogo } from "../../../assets";
import Button from "../../../components/button";
import { teamIntroduction } from "../../../utils/keyword";
import "./style.scss";

gsap.registerPlugin(useGSAP);

const Team = () => {
  const bg1 = "linear-gradient(109deg, #00539C 0%, #08f 50%, #00539C 80%)";
  const bg2 = "linear-gradient(80deg, #08f 0%,  #00539C 50% ,  #08f 100%)";

  useGSAP(() => {
    gsap.fromTo(
      "#logo",
      {
        background: bg1,
      },
      {
        ease: "none",
        duration: 2,
        background: bg2,
        repeat: -1,
        yoyo: true,
      }
    );
  });

  return (
    <article className="team">
      <div>
        <h2>
          <span className="highlight">Team return</span>은
          <br />
          어떤 팀인가요?
        </h2>
        <p className="introduction">{teamIntroduction}</p>
        <Button type="ghost" size="rg" onClick={() => {}}>
          Team return 더 알아보기
        </Button>
      </div>
      <div className="logo">
        <div className="gradientLogo" style={{ background: "none" }}>
          <img src={GradientLogo} alt="" />
          <div id="logo" />
        </div>
      </div>
    </article>
  );
};

export default Team;

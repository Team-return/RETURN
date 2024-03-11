import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GradientLogo } from "../../../assets";
import Button from "../../../components/common/button";
import { teamIntroduction } from "../../../utils/keyword";
import { visionUrl } from "../../../utils/url";
import "./style.scss";

gsap.registerPlugin(useGSAP);

const Team = () => {
  const bg1 = "linear-gradient(109deg, #B8DEFF, #08f, #00539C)";
  const bg2 = "linear-gradient(30deg, #00539C, #08f, #B8DEFF)";

  useGSAP(() => {
    gsap.fromTo(
      "#logo",
      {
        background: bg1,
      },
      {
        ease: "power1.inOut",
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
        <Button
          type="ghost"
          size="rg"
          onClick={() => {
            window.open(visionUrl);
          }}
        >
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

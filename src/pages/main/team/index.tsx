import { useGSAP } from "@gsap/react";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import Button from "../../../components/common/button";
import { teamIntroduction } from "../../../utils/keyword";
import { visionUrl } from "../../../utils/url";
import "./style.scss";

gsap.registerPlugin(useGSAP);

const Team = () => {

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
        <Spline scene="https://prod.spline.design/pMfpqW9ogK9z5MEx/scene.splinecode" />
      </div>
    </article>
  );
};

export default Team;

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollArrow } from "../../../assets";
import { IntroKeyword } from "../../../utils/keyword";
import "./style.scss";

gsap.registerPlugin(useGSAP);

const Intro = () => {
    
  useGSAP(() => {
    let timeline = gsap.timeline({
      repeat: -1,
      defaults: {
        delay: 1.5,
        duration: 0.2,
      },
    });
    timeline
      .to("#introKeywordRef", {
        y: 0,
        delay: 0,
      })
      .to("#introKeywordRef", {
        y: "-144rem",
      })
      .to("#introKeywordRef", {
        y: "-288rem",
      })
      .to("#introKeywordRef", {
        y: 0,
      });
  });

  return (
    <>
      <article className="intro">
        <div>
          <div className="intro-keyword">
            <div id="introKeywordRef">
              {IntroKeyword.map(keyword => (
                <h1>{keyword}</h1>
              ))}
            </div>
          </div>
          <h2>개발을 꿈꿉니다.</h2>
        </div>
        <div className="scroll-hint">
          <p>스크롤 하여 더 알아보세요!</p>
          <img src={ScrollArrow} alt="스크롤" />
        </div>
      </article>
      <div className="gradient" />
    </>
  );
};

export default Intro;

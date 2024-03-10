import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { JOBISMacBook } from "../../../assets";
import Button from "../../../components/button";
import "./style.scss";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Jobis = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".macbook",
      {
        x: "50%",
      },
      {
        scrollTrigger: {
          trigger: ".jobis",
          start: "top+=20 center",
        },
        x: "10%",
        duration: 3,
        ease: "power4.out'",
      }
    );
  });
  return (
    <article className="jobis">
      <section>
        <h2>
          취업의 지름길, <br /> <span className="highlight">JOBIS</span>를
          소개할게요!
        </h2>
        <p className="body">
          JOBIS는 DSM 교내 산학협력부와 진행중인 취업 지원 관리 시스템이에요.
          학교에서의 취업 프로세스를 자동화하고 학생들과 선생님들, 기업들의 학교
          취업을 보다 편리하게 도와줄 수 있어요.
        </p>
        <Button type="gray">JOBIS에 대해 알아보기</Button>
      </section>
      <div className="macbook">
        <img src={JOBISMacBook} alt="자비스" />
      </div>
    </article>
  );
};

export default Jobis;

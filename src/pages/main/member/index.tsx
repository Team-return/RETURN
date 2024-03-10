import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Button from "../../../components/button";
import MemberCard from "../../../components/memberCard";
import { memberIntroduction } from "../../../utils/keyword";
import { randomMemberList } from "../../../utils/mumbers";
import "./style.scss";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Member = () => {
  useGSAP(() => {
    gsap.to("#list2", {
      scrollTrigger: {
        trigger: ".member",
        start: "top+=50% top",
        end: "120% 100vh",
        scrub: 0.5,
      },
      y: 0,
    });
    gsap.to("#list1", {
      scrollTrigger: {
        trigger: ".member",
        start: "top+=50% top",
        end: "120% 100vh",
        scrub: 0.5,
      },
      y: "-50%",
    });
    gsap.to(".member", {
      scrollTrigger: {
        pin: true,
        trigger: ".member",
        start: "top top",
        end: "bottom bottom+=10%",
        endTrigger: "#list1",
      },
    });
  });
  return (
    <article className="member">
      <div>
        <h2>
          <span className="highlight">Team return</span>을
          <br />
          함께 만들어 나가는
          <br /> 멤버들을 소개합니다!
        </h2>
        <p className="introduction">{memberIntroduction}</p>
        <Button type="ghost" size="rg" onClick={() => {}}>
          팀원들 더 알아보기
        </Button>
      </div>
      <div className="membersList">
        <div>
          <div id="list1">
            {randomMemberList(1).map(item => (
              <MemberCard {...item} theme="dark" />
            ))}
          </div>
        </div>
        <div>
          <div id="list2">
            {randomMemberList(1).map(item => (
              <MemberCard {...item} theme="dark" />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Member;

import { useEffect } from "react";
import MemberCard from "../../components/common/memberCard";
import { membersInfo } from "../../utils/mumbers";
import "./style.scss";
import { useLocation } from "react-router-dom";

const MemberPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main id="member">
      <div className="headline">
        <h2>
          <span className="highlight">Team return</span>의 <br /> 자랑스러운
          멤버들이에요
        </h2>
      </div>
      <div className="listWrapper">
        {membersInfo.map((list, grade) => (
          <section key={grade}>
            <h2>{grade + 1}기</h2>
            <div className="listGrid">
              {list.map((item, idx) => (
                <MemberCard {...item} key={idx} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default MemberPage;

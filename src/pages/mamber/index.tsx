import MemberCard from "../../components/memberCard";
import { membersInfo } from "../../utils/mumbers";
import "./style.scss";

const MemberPage = () => {
  return (
    <main id="member">
      <div className="headline">
        <h2>
          <span className="highlight">Team Return</span>의 <br /> 자랑스러운
          멤버들이에요
        </h2>
      </div>
      <div className="listWrapper">
        {membersInfo.map((list, grade) => (
          <section>
            <h2>{grade + 1}기</h2>
            <div className="listGrid">
              {list.map(item => (
                <MemberCard {...item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default MemberPage;

import Button from "../../../components/button";
import "./style.scss";

const Recruitment = () => {
  return (
    <section className="recruitment">
      <section>
        <h2>
          현재 Team return은 <br />이 뒤를 이어갈 새 팀원을 찾고있어요!
        </h2>
        <p>
          현재 이 다음 이야기를 같이 이어나갈 3기 팀원들을 찾고 있어요. 만약
          함께하고 싶다면, 하단의 지원하기 버튼을 통해 지원해주세요.
        </p>
      </section>
      <Button type="ghost">3기 지원하기</Button>
    </section>
  );
};

export default Recruitment;

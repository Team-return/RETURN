import Intro from "./intro";
import Jobis from "./jobis";
import Member from "./member";
import Team from "./team";
// *지원하기 (지원시즌에만 사용)
// import Recruitment from "./recruitment";

const Main = () => {
  return (
    <main>
      <Intro />
      <Team />
      <Member />
      <Jobis />
      {/* *지원하기 (지원시즌에만 사용)  */}
      {/* <Recruitment /> */}
    </main>
  );
};

export default Main;

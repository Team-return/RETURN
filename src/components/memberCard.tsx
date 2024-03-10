import { MemberType } from "../types";

interface PropsType extends MemberType {
  theme?: "dark" | "light";
}

const MemberCard = ({ name, image, docs, job, theme = "light" }: PropsType) => {
  return (
    <div className={`memberCard ${theme}`}>
      <img src={image} />
      <div>
        <p className="name">{name}</p>
        <p className="job">{job}</p>
      </div>
      <p>{docs}</p>
    </div>
  );
};

export default MemberCard;

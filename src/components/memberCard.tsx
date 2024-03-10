import { MemberCardType } from "../types";

const MemberCard = ({ name, image, docs, job }: MemberCardType) => {
  return (
    <div className="memberCard">
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

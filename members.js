import { memberList } from "./util/memberCardInfo";

const cardList = document.querySelectorAll(".card-list");

const cardContainerBox = document.createElement("div");
cardContainerBox.className = "card-container";
const profileImage = document.createElement("img");
profileImage.src = "./assets/image/return-logo&text.svg";
const memberInfo = document.createElement("div");

//=====================================
const roleBox = document.createElement("div");
roleBox.className = "rolebox";

const nameText = document.createElement("p");
nameText.append("길근우");
nameText.className = "name";

const majorText = document.createElement("p");
majorText.append("Back-end Engineer");
majorText.style.color = "#FF8A00";

roleBox.appendChild(nameText);
roleBox.appendChild(majorText);

const word = document.createElement("p");
word.append("주도적인 백엔드 개발자 길근우입니다.");

memberInfo.appendChild(roleBox);
memberInfo.appendChild(word);

//=====================

cardContainerBox.appendChild(profileImage);
cardContainerBox.appendChild(memberInfo);
cardList[1].appendChild(cardContainerBox);

memberList.map((item) => {
  console.log(item);
});

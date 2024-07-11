import {
  KANGJIIN,
  KANGMIN,
  KANGYONGSU,
  KIMHAONEE,
  HONGSEUNGGJAE,
  GILGEUNWOO,
  JUNGJIKWAN,
  JUNGSEUNGHOON,
  PARKSIWON,
  LEEHASEONG,
  KANGHAEMIN,
  KIMDAEHYEON,
  KANGTAEYANG,
  KIMMYEONGJIN,
  LEEUIJIN,
  WONEUNJI,
  LEETAEGYU,
  PARKUIEL,
  YANGYUNHO,
  PARKJUYEONG,
  KIMEUNO,
} from "../assets";
import { MemberType } from "../types";

//  membersInfo[기수][멤버]

export const membersInfo: MemberType[][] = [
  [
    {
      name: "김하온",
      job: "UI/UX Designer",
      image: KIMHAONEE,
      docs: "시선과 감정을 고려하는 UX/UI 디자이너 김하온입니다.",
    },
    {
      name: "박시원",
      job: "UI/UX Designer",
      image: PARKSIWON,
      docs: "언제나 한발짝 더 앞서 나가는 디자이너 박시원입니다.",
    },
    {
      name: "강민",
      job: "Back-end Engineer",
      image: KANGMIN,
      docs: "집중력이 뛰어나고 성실한 개발자 강민입니다.",
    },
    {
      name: "길근우",
      job: "Back-end Engineer",
      image: GILGEUNWOO,
      docs: "주도적인 백엔드 개발자 길근우입니다.",
    },
    {
      name: "이하성",
      job: "Back-end Engineer",
      image: LEEHASEONG,
      docs: "끊임없이 정진하는 벡엔드 개발자 이하성입니다.",
    },
    {
      name: "강용수",
      job: "Front-end Engineer",
      image: KANGYONGSU,
      docs: "사용자가 최우선인 개발자 강용수입니다.",
    },
    {
      name: "강지인",
      job: "Front-end Engineer",
      image: KANGJIIN,
      docs: "꾸준히 성장하는 개발자 강지인입니다.",
    },
    {
      name: "정지관",
      job: "Front-end Engineer",
      image: JUNGJIKWAN,
      docs: "정점을 목표로 하는 프론트엔드 개발자 정지관입니다.",
    },
    {
      name: "박주영",
      job: "iOS Engineer",
      image: PARKJUYEONG,
      docs: "원하는걸 얻기위해 달리는 iOS개발자",
    },
    {
      name: "홍승재",
      job: "iOS Engineer",
      image: HONGSEUNGGJAE,
      docs: "사용자의 편의를 우선으로 하는 iOS 개발자",
    },
    {
      name: "김은오",
      job: "Android Engineer",
      image: KIMEUNO,
      docs: "간결한 구현에 집중하는 안드로이드 개발자 김은오 입니다.",
    },
    {
      name: "정승훈",
      job: "Android Engineer",
      image: JUNGSEUNGHOON,
      docs: "코딩이 취미인 안드로이드 개발자 정승훈입니다.",
    },
  ],
  [
    {
      name: "강해민",
      job: "UI/UX Designer",
      image: KANGHAEMIN,
      docs: "사용자에게 최고의 경험을 주는 UX UI 디자이너 강해민입니다.",
    },
    {
      name: "김대현",
      job: "UI/UX Designer",
      image: KIMDAEHYEON,
      docs: "최고의 디자인을 만들려는 디자이너 김대현입니다.",
    },
    {
      name: "강태양",
      job: "Back-end Engineer",
      image: KANGTAEYANG,
      docs: "궁금증을 해결하며 성장하는 개발자 강태양입니다.",
    },
    {
      name: "김명진",
      job: "Back-end Engineer",
      image: KIMMYEONGJIN,
      docs: "모든 일에 책임을 다하는 개발자 김명진입니다.",
    },
    {
      name: "이의진",
      job: "Front-end Engineer",
      image: LEEUIJIN,
      docs: "새로운 것에 도전하는 개발자 이의진입니다.",
    },
    {
      name: "원은지",
      job: "Front-end Engineer",
      image: WONEUNJI,
      docs: "항상 노력하는 개발자 원은지입니다.",
    },
    {
      name: "이태규",
      job: "iOS Engineer",
      image: LEETAEGYU,
      docs: "개발에 열정을 품고 노력하는 이태규입니다.",
    },
    {
      name: "박의엘",
      job: "Android Engineer",
      image: PARKUIEL,
      docs: "계속 성장해 나가는 개발자 박의엘입니다.",
    },
    {
      name: "박현아",
      job: "Front-end Engineer",
      image: https://avatars.githubusercontent.com/u/128463899?v=4,
      docs: "추가 예정",
    }
  ],
];

export const randomMemberList = (grade: number | "all"): MemberType[] => {
  if (grade === "all") {
    let allMembers: MemberType[] = [];
    membersInfo.map(list => {
      allMembers = [...allMembers, ...list];
    });
    return allMembers.sort(() => Math.random() - 0.5);
  } else {
    return membersInfo[grade - 1].sort(() => Math.random() - 0.5);
  }
};

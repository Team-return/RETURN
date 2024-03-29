type ButtonStyleType = "ghost" | "light" | "gray";
type ButtonSIzeType = "md" | "rg";

export interface ButtonType extends React.HTMLAttributes<HTMLButtonElement> {
  type?: ButtonStyleType;
  icon?: React.ReactNode;
  size?: ButtonSIzeType;
}

type JobType =
  | "UI/UX Designer"
  | "Front-end Engineer"
  | "Back-end Engineer"
  | "iOS Engineer"
  | "Android Engineer";

export interface MemberType {
  name: string;
  image: string;
  job: JobType;
  docs: string;
}

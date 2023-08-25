import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  color:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  onClick: () => void;
}

const style: React.CSSProperties = {
  whiteSpace: "pre-line",
};

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;

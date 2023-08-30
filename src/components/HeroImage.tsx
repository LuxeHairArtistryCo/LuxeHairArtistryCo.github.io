import { ReactNode } from "react";
import { Colors } from "../global";

interface Props {
  children?: ReactNode;
  className?: string;
  backgroundImagePath: string;
  minHeight?: string;
}

function HeroImage({
  children,
  className,
  backgroundImagePath,
  minHeight,
}: Props) {
  return (
    <div className={className}>
      <div
        className="card border-0 rounded-0"
        style={{
          backgroundImage: "url(" + backgroundImagePath + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: minHeight !== undefined ? minHeight : "50vh",
          backgroundColor: Colors.dark_a50,
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="text-light">{children}</div>
      </div>
    </div>
  );
}

export default HeroImage;

import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

function InstagramCarousel({ children, className }: Props) {
  return (
    <div className={className}>
      <div></div>
      {children}
    </div>
  );
}

export default InstagramCarousel;

import { memo } from "react";
import { type PropsWithChildren } from "react";

type PropType = PropsWithChildren<{
  image: {
    src: string;
    alt: string;
  };
}>;

function Header({ image, children }: PropType) {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  );
}

export default memo(Header);

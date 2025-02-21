
import type { SVGProps } from "react";

interface Props {
  size?: number;
  SVGProps?: SVGProps<SVGSVGElement>;
};

export const HeartIcon = ({ size, ...props }: Props) => {
  size = size ?? 40;
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}    height={size}
    fill="none"
    >
      <path d="M35.4414 6.09633C31.6055 -4.09282 19.1388 0.462329 18 5.55691C16.4417 0.162648 4.27461 -3.85308 0.558559 6.09633C-3.57704 17.1845 16.5615 27.134 18 28.7522C19.4385 27.4336 39.577 17.0047 35.4414 6.09633Z" fill="#FF5A79"/>
</svg>

  );
}

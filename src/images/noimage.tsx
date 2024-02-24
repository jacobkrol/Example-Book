import { MouseEventHandler } from "react";

export default function ImageNotSupported({
  size = 25,
  alt,
  onClick
}: {
  size?: number;
  alt?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height={`${size}px`}
      width={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      xlinkTitle={alt}
      onClick={onClick}
      style={onClick ? { cursor: "pointer" } : {}}
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M21.9 21.9l-8.49-8.49-9.82-9.82L2.1 2.1.69 3.51 3 5.83V19c0 1.1.9 2 2 2h13.17l2.31 2.31 1.42-1.41zM5 18l3.5-4.5 2.5 3.01L12.17 15l3 3H5zm16 .17L5.83 3H19c1.1 0 2 .9 2 2v13.17z"></path>
    </svg>
  );
}
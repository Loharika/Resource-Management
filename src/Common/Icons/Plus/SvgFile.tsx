import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={12} height={12} fill="none" viewBox="0 0 12 12" {...props}>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M5.25 5.25V0h1.5v5.25H12v1.5H6.75V12h-1.5V6.75H0v-1.5h5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgComponent;

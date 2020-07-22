import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
      <path
        fill="#171F46"
        fillRule="evenodd"
        d="M14 9.874L12.85 11 8 6.253 3.15 11 2 9.874l5.3-5.19c.39-.38 1.01-.38 1.4 0l5.3 5.19z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgComponent;

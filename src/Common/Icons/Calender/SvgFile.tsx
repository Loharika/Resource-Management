import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
      <path
        fill="#7E858E"
        fillRule="evenodd"
        d="M5.75 1v1.25h4.5V1h1.5v1.25H14c.966 0 1.75.784 1.75 1.75v10A1.75 1.75 0 0114 15.75H2A1.75 1.75 0 01.25 14V4c0-.966.784-1.75 1.75-1.75h2.25V1h1.5zm4.5 2.75h-4.5v2.5h4.5v-2.5zm1.5 2.5v-2.5H14a.25.25 0 01.25.25v2.25h-2.5zM2 3.75h2.25v2.5h-2.5V4A.25.25 0 012 3.75zm-.25 4V14c0 .138.112.25.25.25h12a.25.25 0 00.25-.25V7.75H1.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgComponent;

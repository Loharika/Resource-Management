import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
      <path
        fill="#7E858E"
        fillRule="evenodd"
        d="M15.226 4.836A.774.774 0 0016 4.062v-2.28C16 .798 15.191 0 14.194 0H1.806C.81 0 0 .798 0 1.782v2.28a.774.774 0 101.548 0v-2.28c0-.14.116-.255.258-.255h12.387c.143 0 .259.114.259.255v2.28c0 .428.346.774.774.774zM4.389 10.07l2.837-2.518V16h1.548V7.551l2.837 2.518 1.036-1.135-4.13-3.665a.777.777 0 00-1.035 0L3.353 8.934 4.39 10.07z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgComponent;

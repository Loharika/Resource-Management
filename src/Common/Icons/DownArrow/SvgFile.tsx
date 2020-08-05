import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
   return (
      <svg width={11} height={11} fill='none' viewBox='0 0 16 16' {...props}>
         <path
            fill='#171F46'
            fillRule='evenodd'
            d='M2 6.126L3.15 5 8 9.747 12.85 5 14 6.126l-5.3 5.19c-.39.38-1.01.38-1.4 0L2 6.125z'
            clipRule='evenodd'
         />
      </svg>
   )
}

export default SvgComponent

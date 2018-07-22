import React from 'react';

function Icon({
  name,
  size = '1em',
  fill = 'currentColor',
  width,
  height,
  ...props,
}) {
  return (
    <svg
      {...props}
      width={width || size}
      height={height || size}
      fill={fill}
      viewBox='0 0 32 32'
    >
      <path d={path} />
    </svg>
  )
}

export default Icon;

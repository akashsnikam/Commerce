import React from "react";

function Logo({ w, h }) {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 500 250"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="metallic" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#d1d1d1" />
          <stop offset="50%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#a0a0a0" />
        </linearGradient>
      </defs>

      <path
        d="M50 125 L200 50 L150 75 L200 100 L100 125 L200 150 L150 175 Z"
        fill="url(#metallic)"
        stroke="black"
        stroke-width="2"
      />

      <path
        d="M450 125 L300 50 L350 75 L300 100 L400 125 L300 150 L350 175 Z"
        fill="url(#metallic)"
        stroke="black"
        stroke-width="2"
      />

      <circle
        cx="250"
        cy="125"
        r="50"
        fill="none"
        stroke="url(#metallic)"
        stroke-width="5"
      />

      <text
        x="220"
        y="140"
        font-size="50"
        font-weight="bold"
        fill="url(#metallic)"
      >
        AK
      </text>
    </svg>
  );
}

export default Logo;

<div class="gate">
  <svg
    width="1087"
    height="1326"
    viewBox="0 0 1087 1326"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M544 6.5C823.179 6.5 1049.5 233.395 1049.5 513.287V1325.5H38.5V513.287C38.5001 233.395 264.821 6.5 544 6.5Z"
      stroke="#0055DD"
    />
    <rect
      x="115.5"
      y="318.5"
      width="29"
      height="33"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
    <rect
      x="161.5"
      y="211.5"
      width="29"
      height="140"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
    <rect
      x="207.5"
      y="211.5"
      width="29"
      height="140"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
    <rect
      x="253.5"
      y="164.5"
      width="29"
      height="187"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
    <rect
      x="299.5"
      y="91.5"
      width="29"
      height="260"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
    <rect
      x="345.5"
      y="91.5"
      width="29"
      height="260"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
    <rect
      x="391.5"
      y="91.5"
      width="29"
      height="260"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
    <rect
      x="437.5"
      y="91.5"
      width="29"
      height="260"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
    <rect
      x="483.5"
      y="91.5"
      width="29"
      height="260"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
    <rect
      x="529.5"
      y="91.5"
      width="29"
      height="260"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
    <rect
      x="575.5"
      y="91.5"
      width="29"
      height="260"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
    <rect
      x="621.5"
      y="91.5"
      width="29"
      height="260"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
    <rect
      x="667.5"
      y="91.5"
      width="29"
      height="260"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
    <rect
      x="713.5"
      y="91.5"
      width="29"
      height="260"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
    <rect
      x="759.5"
      y="91.5"
      width="29"
      height="260"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
    <rect
      x="805.5"
      y="164.5"
      width="29"
      height="187"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
    <rect
      x="851.5"
      y="234.5"
      width="29"
      height="117"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
    <rect
      x="897.5"
      y="234.5"
      width="29"
      height="117"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
    <rect
      x="943.5"
      y="318.5"
      width="29"
      height="33"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
    <path
      d="M544 26.5C813.239 26.5 1031.5 244.873 1031.5 514.25V1325.5H56.5V514.25L56.5098 511.096C58.2057 243.17 275.813 26.5 544 26.5ZM544 106.5C313.421 106.5 126.5 293.589 126.5 524.375V1245.5H961.5V524.375C961.5 293.589 774.579 106.5 544 106.5Z"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
    <rect
      x="16.5"
      y="538.5"
      width="123"
      height="34"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
    <rect
      x="0.5"
      y="474.5"
      width="155"
      height="82"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
    <rect
      x="947.5"
      y="538.5"
      width="123"
      height="34"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
    <rect
      x="931.5"
      y="474.5"
      width="155"
      height="82"
      fill="#EFFDFF"
      stroke="#0055DD"
    />
  </svg>
</div>

<style>
  .gate {
    width: 70vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -20%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;

    /* Maintain aspect ratio (100 / 34 = ~2.94) */
    aspect-ratio: 1087 / 1326;
  }

  .gate svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    .gate {
      width: 135vw;
      bottom: 50%;
      left: 50%;
      transform: translate(-50%, 40%);
      z-index: 10;
    }
  }
</style>

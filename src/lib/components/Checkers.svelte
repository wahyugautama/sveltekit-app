<script>
  export let width = "200px"; // default width
</script>

<div class="checkers" style={`width: ${width}`}>
  <svg
    width="145"
    height="16"
    viewBox="0 0 145 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M145 0V16H0V0H145ZM1 15H144V1H1V15Z" fill="currentColor" />
    <rect
      x="0.5"
      y="16"
      width="8"
      height="8"
      transform="rotate(-90 0.5 16)"
      fill="currentColor"
    />
    <rect
      x="16.5"
      y="16"
      width="8"
      height="8"
      transform="rotate(-90 16.5 16)"
      fill="currentColor"
    />
    <rect
      x="32.5"
      y="16"
      width="8"
      height="8"
      transform="rotate(-90 32.5 16)"
      fill="currentColor"
    />
    <rect
      x="8.5"
      y="8"
      width="8"
      height="8"
      transform="rotate(-90 8.5 8)"
      fill="currentColor"
    />
    <rect
      x="24.5"
      y="8"
      width="8"
      height="8"
      transform="rotate(-90 24.5 8)"
      fill="currentColor"
    />
    <rect
      x="40.5"
      y="8"
      width="8"
      height="8"
      transform="rotate(-90 40.5 8)"
      fill="currentColor"
    />
    <rect
      x="48.5"
      y="16"
      width="8"
      height="8"
      transform="rotate(-90 48.5 16)"
      fill="currentColor"
    />
    <rect
      x="64.5"
      y="16"
      width="8"
      height="8"
      transform="rotate(-90 64.5 16)"
      fill="currentColor"
    />
    <rect
      x="80.5"
      y="16"
      width="8"
      height="8"
      transform="rotate(-90 80.5 16)"
      fill="currentColor"
    />
    <rect
      x="56.5"
      y="8"
      width="8"
      height="8"
      transform="rotate(-90 56.5 8)"
      fill="currentColor"
    />
    <rect
      x="72.5"
      y="8"
      width="8"
      height="8"
      transform="rotate(-90 72.5 8)"
      fill="currentColor"
    />
    <rect
      x="88.5"
      y="8"
      width="8"
      height="8"
      transform="rotate(-90 88.5 8)"
      fill="currentColor"
    />
    <rect
      x="96.5"
      y="16"
      width="8"
      height="8"
      transform="rotate(-90 96.5 16)"
      fill="currentColor"
    />
    <rect
      x="112.5"
      y="16"
      width="8"
      height="8"
      transform="rotate(-90 112.5 16)"
      fill="currentColor"
    />
    <rect
      x="128.5"
      y="16"
      width="8"
      height="8"
      transform="rotate(-90 128.5 16)"
      fill="currentColor"
    />
    <rect
      x="104.5"
      y="8"
      width="8"
      height="8"
      transform="rotate(-90 104.5 8)"
      fill="currentColor"
    />
    <rect
      x="120.5"
      y="8"
      width="8"
      height="8"
      transform="rotate(-90 120.5 8)"
      fill="currentColor"
    />
    <rect
      x="136.5"
      y="8"
      width="8"
      height="8"
      transform="rotate(-90 136.5 8)"
      fill="currentColor"
    />
  </svg>
</div>

<style>
  .checkers {
    display: flex;
    align-items: center;
    justify-content: center;

    /* Maintain aspect ratio (100 / 34 = ~2.94) */
    aspect-ratio: 100 / 34;
  }

  .checkers svg {
    width: 100%;
    height: 100%;
  }
</style>

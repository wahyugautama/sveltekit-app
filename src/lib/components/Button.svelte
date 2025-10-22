<script>
  import { onMount } from "svelte";
  export let buttonText = "Click me";
  export let link = "#";
  export let variant = "default";

  onMount(() => {
    const btns = document.querySelectorAll(".btn");
    const move = (e) => {
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
    };
    const leave = (e) => (e.currentTarget.style.transform = "translate(0,0)");

    btns.forEach((b) => {
      b.addEventListener("mousemove", move);
      b.addEventListener("mouseleave", leave);
    });

    return () =>
      btns.forEach((b) => {
        b.removeEventListener("mousemove", move);
        b.removeEventListener("mouseleave", leave);
      });
  });
</script>

<div class="button-wrapper">
  <svg
    width="16"
    height="100%"
    viewBox="0 0 16 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="8" height="8" fill="currentColor" />
    <rect y="16" width="8" height="8" fill="currentColor" />
    <rect y="32" width="8" height="8" fill="currentColor" />
    <rect x="8" y="8" width="8" height="8" fill="currentColor" />
    <rect x="8" y="24" width="8" height="8" fill="currentColor" />
    <rect x="8" y="40" width="8" height="8" fill="currentColor" />
    <path d="M16 0V48H0V0H16ZM1 47H15V1H1V47Z" fill="currentColor" />
  </svg>

  <a href={link} class="btn {variant}" target="_blank">
    {buttonText}
  </a>
  <svg
    width="16"
    height="100%"
    viewBox="0 0 16 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="8" height="8" fill="currentColor" />
    <rect y="16" width="8" height="8" fill="currentColor" />
    <rect y="32" width="8" height="8" fill="currentColor" />
    <rect x="8" y="8" width="8" height="8" fill="currentColor" />
    <rect x="8" y="24" width="8" height="8" fill="currentColor" />
    <rect x="8" y="40" width="8" height="8" fill="currentColor" />
    <path d="M16 0V48H0V0H16ZM1 47H15V1H1V47Z" fill="currentColor" />
  </svg>
</div>

<style>
  .button-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .btn {
    display: inline-block;
    padding: 1rem 2rem;
    border: 1px solid #0f5ad0;
    color: #0f5ad0;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .btn:hover {
    background-color: #0f5ad0;
    color: white;
  }

  /* Inverted variant */
  .btn.invert {
    background-color: #0f5ad0;
    color: white;
    border-color: white;
  }

  .btn.invert:hover {
    background-color: white;
    color: #0f5ad0;
  }

  @media (max-width: 768px) {
    .btn {
      padding: 0.75rem 1.5rem;
      font-size: 0.875rem;
    }
  }
</style>

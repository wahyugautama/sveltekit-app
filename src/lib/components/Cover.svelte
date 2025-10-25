<script>
  import Wrapper from "./Wrapper.svelte";
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  import { gsap } from "gsap";
  import HeadSVG from "./HeadSVG.svelte";
  import SplitText from "gsap/SplitText";

  let coverEl;
  let buttonEl;
  let guestName = "Guest";

  onMount(() => {
    // Prevent scrolling while cover is active
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline();
    tl.from(".script", {
      y: 40,
      opacity: 0,
      ease: "circ.out",
    })
      .from(
        ".title",
        {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(".date", {
        y: 0,
        opacity: 0,
        duration: 1,
        ease: "circ.out",
      })
      .from(
        ".divider",
        {
          rotateY: 90,
          duration: 2,
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(
        ".to",
        {
          y: 0,
          opacity: 0,
          duration: 2,
          ease: "circ.out",
        },
        "<"
      )
      .from(
        ".button-wrapper",
        {
          y: 40,
          opacity: 0,
          duration: 2,
          ease: "circ.out",
        },
        "-=0.75"
      );

    // Read ?guest=<Name> from URL
    try {
      const params = new URLSearchParams(window.location.search);
      const g = params.get("guest");
      if (g && g.trim()) guestName = decodeURIComponent(g.trim());
    } catch (_) {}

    // 🟢 Click handler to animate cover away
    const handleClick = () => {
      gsap.to(coverEl, {
        y: "-100%",
        duration: 1.5,
        ease: "expo.inOut",
        onComplete: () => {
          // Hide the element after animation
          coverEl.style.display = "none";
          // Re-enable scrolling when cover is hidden
          document.body.style.overflow = "";
        },
      });
      gsap.from(".profile", {
        y: "50%",
        opacity: 0,
        duration: 2,
        ease: "circ.out",
        onComplete: () => {
          // Hide the element after animation
          coverEl.style.display = "none";
          // Re-enable scrolling when cover is hidden
          document.body.style.overflow = "";
        },
      });

      const split = new SplitText("#hero h1", {
        type: "chars",
        mask: "chars",
      });

      gsap.from(split.chars, {
        yPercent: 101,
        ease: "power2.out",
        stagger: 0.05,
        delay: 1,
      });
    };

    buttonEl?.addEventListener("click", handleClick);
    return () => buttonEl?.removeEventListener("click", handleClick);
  });
</script>

<div class="cover" bind:this={coverEl} aria-label="Invitation cover">
  <HeadSVG width="8rem" />
  <div
    style="display: flex; flex-direction: column; align-items: center; gap: .5rem; margin-top: 3rem;"
  >
    <span class="script">The wedding of</span>
    <h1 class="title">Wahyu &amp; Novi</h1>
    <p class="date">10 November 2025</p>
  </div>
  <div class="divider">
    <div class="img-container">
      <img src="/images/cover-img.webp" alt="" class="img-parallax" />
    </div>
  </div>

  <p class="to"><sup>to</sup> {guestName}</p>
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
    <button
      bind:this={buttonEl}
      type="button"
      class="btn"
      aria-label="Open invitation"
    >
      Open invitation
    </button>
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
</div>

<style scoped>
  .cover {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: #0f5ad0;
    color: white;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    z-index: 9999;
    /* for GSAP starting positions */
    transform: translateY(0);
    opacity: 1;
  }

  .button-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .btn {
    display: inline-block;
    font-family: "Della Respira";
    padding: 1rem 2rem;
    border: 1px solid white;
    color: white;
    background-color: transparent;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .btn:hover {
    background-color: white;
    color: #0f5ad0;
  }

  .title {
    font-size: clamp(2rem, 5vw, 3rem);
    margin: 0 0 0.25rem;
    letter-spacing: 0.03em;
  }
  .divider {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .to {
    margin: 0 0 0.75rem;
    font-size: 1rem;
    font-family: "Della Respira";
    text-transform: uppercase;
    opacity: 0.9;
  }

  .img-container {
    width: 15rem;
    flex-shrink: 0;
    margin: 3rem 0;
    aspect-ratio: 1 / 1;
    border: 0.5rem solid white;
    overflow: hidden;
  }

  .date {
    margin: 0;
    font-size: 1rem;
    letter-spacing: 0.05em;
  }

  .img-parallax {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

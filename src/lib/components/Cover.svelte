<script>
  import Wrapper from "./Wrapper.svelte";
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  let coverEl;
  let buttonEl;
  let guestName = "Guest";

  onMount(() => {
    // Prevent scrolling while cover is active
    document.body.style.overflow = "hidden";

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
    };

    buttonEl?.addEventListener("click", handleClick);
    return () => buttonEl?.removeEventListener("click", handleClick);
  });
</script>

<div class="cover" bind:this={coverEl} aria-label="Invitation cover">
  <h1 class="title">Wahyu &amp; Novi</h1>
  <p class="to">to: {guestName}</p>

  <div class="details">
    <p class="date">10 November 2025</p>
    <p class="location">Br. Delod Pempatan, Lukluk, Mengwi, Badung</p>
  </div>

  <button
    bind:this={buttonEl}
    type="button"
    class="open-btn"
    aria-label="Open invitation"
  >
    Open invitation
  </button>
</div>

<style>
  .cover {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: #0070f3;
    color: white;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    padding: 2rem;
    z-index: 9999;
    /* for GSAP starting positions */
    transform: translateY(0);
    opacity: 1;
  }

  .title {
    font-size: clamp(2rem, 5vw, 3rem);
    margin: 0 0 0.25rem;
    letter-spacing: 0.03em;
  }

  .to {
    margin: 0 0 0.75rem;
    font-size: 1rem;
    opacity: 0.9;
  }

  .details {
    display: grid;
    gap: 0.25rem;
    margin-bottom: 1rem;
  }

  .date,
  .location {
    margin: 0;
    font-size: 1rem;
  }

  .open-btn {
    border: 0;
    padding: 0.75rem 1.25rem;
    border-radius: 999px;
    background: white;
    color: #0070f3;
    font-weight: 600;
    cursor: pointer;
  }

  .open-btn:focus {
    outline: 3px solid rgba(255, 255, 255, 0.7);
    outline-offset: 2px;
  }
</style>

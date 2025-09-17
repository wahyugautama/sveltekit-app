<script lang="ts">
  import CustomCursor from "$lib/components/CustomCursor.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { onMount, tick } from "svelte";
  import { browser } from "$app/environment";
  import { goto, afterNavigate } from "$app/navigation";
  import gsap from "gsap";
  import "../app.css";

  let lenis: any;
  let pageContainer: HTMLDivElement;

  onMount(async () => {
    if (!browser) return;

    // Init Lenis
    const module = await import("$lib/utils/lenis");
    lenis = module.lenis;
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Intercept link click to reset .cover position
    document.body.addEventListener("click", async (e) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (
        anchor &&
        anchor.origin === window.location.origin &&
        !anchor.hasAttribute("target") &&
        !anchor.hasAttribute("data-no-transition")
      ) {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        if (!href) return;

        console.log("[Navigation] link clicked:", href);

        // Reset the cover so it's ready to animate again
        if (pageContainer) {
          gsap.set(pageContainer, { xPercent: 0 });
        }

        goto(href);
      }
    });
  });

  // Animate overlay away (reveal content)
  afterNavigate(() => {
    animateIn();
  });

  async function animateIn() {
    console.log("[Transition] animateIn triggered");

    if (pageContainer) {
      const tl = gsap.timeline();

      // Step 1: reset position and origin
      tl.set(pageContainer, {
        xPercent: 0,
        scaleX: 0, // optional: start from collapsed
        transformOrigin: "left",
      });

      // Step 2: scale to full width (optional)
      tl.to(pageContainer, {
        scaleX: 1,
        duration: 1,
        ease: "circ.inOut",
      });

      // Step 3: slide out to right
      tl.to(pageContainer, {
        xPercent: 100,
        duration: 1,
        ease: "circ.inOut",
        backgroundColor: "red", // optional
        onComplete: () => {
          gsap.set(pageContainer, { backgroundColor: "blue" });
        },
      });

      await tl;
    }
  }
</script>

<CustomCursor />
<Navbar />

<!-- Overlay that covers and uncovers -->
<div bind:this={pageContainer} class="cover"></div>

<div class="page-wrapper">
  <slot />
  <Footer />
</div>

<style>
  .page-wrapper {
    padding-top: 4rem;
    will-change: transform, opacity;
  }

  .cover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: blue;
    z-index: 99;
    pointer-events: none;
    transform: translateX(0%); /* Start covered */
  }
</style>

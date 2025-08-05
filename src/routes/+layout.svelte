<script lang="ts">
  import CustomCursor from "$lib/components/CustomCursor.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { onMount } from "svelte";
  import { browser } from "$app/environment";

  import { tick } from "svelte";
  import gsap from "gsap";
  import "../app.css";

  let lenis: any;
  export let data: { url: string };

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

    // First mount animation
    animateIn();
  });

  // Watch page change
  $: (data.url, animateIn());

  async function animateIn() {
    await tick();
    if (pageContainer) {
      gsap.fromTo(
        pageContainer,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  }

  async function animateOut() {
    if (pageContainer) {
      await gsap.to(pageContainer, {
        opacity: 0,
        x: 100,
        duration: 0.4,
        ease: "power2.in",
      });
    }
  }
</script>

<CustomCursor />
<Navbar />

<div bind:this={pageContainer} class="page-wrapper">
  <slot />
  <Footer />
</div>

<style>
  .page-wrapper {
    will-change: transform, opacity;
  }
</style>

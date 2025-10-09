<script lang="ts">
  import CustomCursor from "$lib/components/CustomCursor.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Cover from "$lib/components/Cover.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "../app.css";
  import Lenis from "@studio-freight/lenis";
  import { onMount, onDestroy } from "svelte";

  let lenis: Lenis | null = null;

  onMount(() => {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true, // ✅ still valid
      touchMultiplier: 1.5, // ✅ replaces the old smoothTouch
    });

    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    console.log("✅ Lenis initialized");

    onDestroy(() => {
      lenis?.destroy();
      lenis = null;
      console.log("🧹 Lenis destroyed");
    });
  });
</script>

<CustomCursor />

<div class="page-wrapper">
  <Cover />
  <Navbar />
  <slot />
  <Footer />
</div>

<style>
  .page-wrapper {
    padding-top: 4rem;
  }
</style>

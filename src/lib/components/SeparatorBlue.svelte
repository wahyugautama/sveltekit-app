<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    // get all .line elements and reverse the order
    const lines = gsap.utils.toArray(".line");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".line-wrapper",
        start: "top bottom",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
    });

    // animate from last to first (because we reversed the array)
    lines.forEach((line, i) => {
      tl.to(
        line,
        {
          scaleY: 0,
          ease: "none",
          duration: 1,
          transformOrigin: "top center",
        },
        i * 0.2 // stagger spacing along scroll
      );
    });
  });
</script>

<div class="line-wrapper">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
</div>

<style scoped>
  .line-wrapper {
    position: absolute;
    bottom: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    height: 20rem;
    width: 100%;
  }

  .line {
    flex-grow: 1;
    height: auto;
    background-color: #0f5ad0;
  }
</style>

<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import SplitText from "gsap/SplitText";
  import { linesReveal } from "$lib/actions/lineReveal";
  import Separator from "./Separator.svelte";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    gsap.to(".img-full", {
      y: "-10%",
      scaleY: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: ".img-full",
        start: "top bottom", // when the top of .img-full hits bottom of viewport
        end: "bottom top", // when the bottom of .img-full hits top of viewport
        scrub: true,
      },
    });

    gsap.to(".img-container1", {
      rotateY: 360,
      ease: "none",
      scrollTrigger: {
        trigger: ".img-full",
        start: "top bottom", // when the top of .img-full hits bottom of viewport
        end: "bottom center", // when the bottom of .img-full hits top of viewport
        scrub: true,
      },
    });

    const split = new SplitText("#image h2", { type: "chars", mask: "chars" });

    gsap.from(split.chars, {
      yPercent: 101,
      ease: "power2.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: "#image",
        start: "top 80%",
        end: "bottom center",
        scrub: true,
      },
    });
  });
</script>

<section id="image">
  <Separator />
  <div class="img-content">
    <h2>The</h2>
    <h2>Journey</h2>
    <div class="img-container1">
      <img src="/images/dance-bg.webp" alt="" class="img-parallax" />
    </div>
    <h2>Continues</h2>
  </div>
  <img src="/images/dance-bg.webp" alt="" class="img-full" />
</section>

<style scoped>
  #image {
    position: relative;
    text-align: center;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
  }

  .img-content {
    z-index: 1;
    position: relative;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .img-full {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    object-fit: cover;
    z-index: 0;
  }

  .img-container1 {
    width: 15rem;
    aspect-ratio: 1 / 1;
    border: 0.5rem solid white;
    overflow: hidden;
  }

  .img-parallax {
    width: 100%;
    height: 120%;
    object-fit: cover;
  }
</style>

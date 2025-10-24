<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import SplitText from "gsap/SplitText";
  import Checkers from "./Checkers.svelte";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".story-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { rotate: 15, x: "60vw" },
        {
          rotate: -15,
          x: "-110vw",
          ease: "power2.in",
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top bottom", // animation starts when card enters viewport
            end: "bottom 50%", // scrub region
            scrub: true,
          },
        }
      );
    });

    const split = new SplitText("#story h1", { type: "chars", mask: "chars" });

    gsap.from(split.chars, {
      yPercent: 101,
      ease: "power2.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".sticky-story",
        start: "top 80%",
        end: "bottom center",
        scrub: true,
      },
    });
  });
</script>

<section id="story">
  <div class="sticky-story">
    <div
      style="position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);"
    >
      <Checkers width="8rem" />
    </div>
    <h1 style="text-align: center;">Our<br />Story</h1>
  </div>

  <div class="story-wrapper">
    <div class="story-card">
      <div class="story-line"></div>
      <img src="/images/story-01.webp" alt="" class="img-parallax" />
      <p>
        We met the swipe-right way, but the real spark happened at a small
        coffee shop in Seminyak called The Library. Coffee in hand, laughs
        flowing, and the realization that we’re both the kind of people who
        treat food as the main reason to travel. From there, things only got
        better.
      </p>
    </div>
    <div class="story-card">
      <div class="story-line"></div>
      <img src="/images/story-02.webp" alt="" class="img-parallax" />
      <p>
        We’ve shared everything from working on projects side by side to hunting
        down the best street food, great restaurants & AYCEs, booking spa days,
        and arguing over thriller plot twists. Most importantly, we’ve always
        been able to be ourselves around each other.
      </p>
    </div>
    <div class="story-card">
      <div class="story-line"></div>
      <img src="/images/story-03.webp" alt="" class="img-parallax" />
      <p>
        Over time, talking about the future felt less like a “what if” and more
        like the obvious next step. With Wahyu's career shift, feeling ready
        mentally and financially, and knowing we’re the most compatible versions
        of ourselves, marriage just feels like the natural next step.
      </p>
    </div>
  </div>
</section>

<style scoped>
  #story {
    min-height: 100vh;
    background-color: var(--blue-primary);
    color: white;
  }

  .sticky-story {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .story-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    overflow-x: hidden;
    gap: 8rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .story-card {
    width: 25rem;
    position: relative;
    top: auto;
    background-color: white;
    color: var(--blue-primary);
    padding: 1rem;
    transform-origin: center;
    transform-style: preserve-3d;
  }

  .story-line {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    height: 25rem;
    width: 1px;
    background-color: var(--blue-primary);
  }

  p {
    margin-bottom: 1rem;
  }

  .img-parallax {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    .story-card {
      width: 20rem;
    }
  }
</style>

<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";

  export let text: string = "Works";
  export let link: string = "/";

  let navlinkEl: HTMLAnchorElement;

  onMount(() => {
    const links = document.querySelectorAll(".navlink");

    links.forEach((link) => {
      const underline = link.querySelector(".underline");
      const text = link.querySelector(".text");
      const arrow = link.querySelectorAll(".arrow, .arrow.slide");

      link.addEventListener("mouseenter", () => {
        gsap.to(underline, {
          scaleX: 1,
          duration: 0.4,
          ease: "power3.out",
          onComplete: () => {
            gsap.set(underline, { transformOrigin: "right" });
          },
        });

        gsap.to(text, {
          yPercent: -100,
          duration: 0.4,
          ease: "power4.out",
        });

        gsap.to(arrow, {
          xPercent: 100,
          duration: 0.2,
          ease: "power4.out",
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(underline, {
          scaleX: 0,
          duration: 0.4,
          ease: "power3.in",
          onComplete: () => {
            gsap.set(underline, { transformOrigin: "left" });
          },
        });

        gsap.to(text, {
          yPercent: 0,
          duration: 0.4,
          ease: "power4.in",
        });

        gsap.to(arrow, {
          xPercent: 0,
          duration: 0.2,
          ease: "power4.in",
        });
      });
    });
  });
</script>

<a href={link} aria-label={text} class="navlink" bind:this={navlinkEl}>
  <span class="text">{text}</span>
  <span class="underline"></span>
  <div class="arrow-container">
    <svg
      class="arrow"
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-2.22404e-07 5.06818L-1.72732e-07 3.93182L6.81818 3.93182L3.69318 0.806818L4.5 -1.96701e-07L9 4.5L4.5 9L3.69318 8.19318L6.81818 5.06818L-2.22404e-07 5.06818Z"
        fill="currentColor"
      />
    </svg>
    <svg
      class="arrow slide"
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-2.22404e-07 5.06818L-1.72732e-07 3.93182L6.81818 3.93182L3.69318 0.806818L4.5 -1.96701e-07L9 4.5L4.5 9L3.69318 8.19318L6.81818 5.06818L-2.22404e-07 5.06818Z"
        fill="currentColor"
      />
    </svg>
  </div>
</a>

<style>
  .navlink {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    text-decoration: none;
    color: inherit;
    overflow: hidden;
  }

  .text {
    text-shadow: 0 16px 0 currentColor;
    color: inherit;
    margin-right: 0.25rem;
    display: inline-block;
  }

  .navlink .underline {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: currentColor;
    transform-origin: left;
    transform: scaleX(0);
    pointer-events: none;
  }

  .arrow-container {
    width: 9px;
    height: 9px;
    position: relative;
    overflow: hidden;
  }

  .arrow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.3s ease;
  }

  .slide {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-100%, -50%);
  }
</style>

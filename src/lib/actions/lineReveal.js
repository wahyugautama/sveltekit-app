// src/lib/actions/linesReveal.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/**
 * Use: <div class="line-wrapper" use:linesReveal> ... </div>
 * Assumes child elements with class .line inside the node.
 */
export function linesReveal(node) {
  const ctx = gsap.context(() => {
    // only look inside this node — no global selectors
    const lines = Array.from(node.querySelectorAll(".line")).reverse();

    // initial state
    gsap.set(lines, { scaleY: 1, transformOrigin: "top center" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: node,
        start: "top bottom",
        end: "bottom center",
        scrub: true,
        markers: true, // set to false if you don’t want markers globally
      },
    });

    lines.forEach((line, i) => {
      tl.to(
        line,
        {
          scaleY: 0,
          ease: "none",
          duration: 1,
          transformOrigin: "top center",
        },
        i * 0.2
      );
    });
  }, node);

  // clean up when the element is destroyed or remounted (e.g., route change)
  return {
    destroy() {
      ctx.revert();
    },
  };
}

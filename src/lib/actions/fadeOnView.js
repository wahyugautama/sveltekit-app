import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Only works with a Club GSAP license:
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function fadeOnView(node, options = {}) {
  const defaults = {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.03,
    split: "chars", // 'chars' | 'words' | 'lines'
  };
  const config = { ...defaults, ...options };

  // Split text using GSAP's SplitText
  const split = new SplitText(node, { type: config.split });
  const targets = split[config.split];

  const tween = gsap.from(targets, {
    scrollTrigger: {
      trigger: node,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    y: config.y,
    opacity: config.opacity,
    duration: config.duration,
    ease: config.ease,
    stagger: config.stagger,
  });

  return {
    destroy() {
      tween.kill();
      split.revert(); // restores original text
    },
  };
}

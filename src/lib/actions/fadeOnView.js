import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function fadeOnView(node, options = {}) {
  const defaults = {
    duration: 2,
    y: 80,
    opacity: 0,
    ease: "power4.out",
    stagger: 0.03,
  };

  const config = { ...defaults, ...options };

  const tween = gsap.from(node, {
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
    },
  };
}

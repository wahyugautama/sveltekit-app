<!-- src/lib/components/CustomCursor.svelte -->
<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  // Writable stores for the latest mouse coords
  const mouseX = writable(-100);
  const mouseY = writable(-100);

  let cursorEl: HTMLDivElement;

  onMount(() => {
    // Update mouse coords on move
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Smooth animation loop
    let targetX = 0;
    let targetY = 0;
    const unsubX = mouseX.subscribe((v) => (targetX = v));
    const unsubY = mouseY.subscribe((v) => (targetY = v));

    function tick() {
      const { left: curX, top: curY } = cursorEl.getBoundingClientRect();
      // lerp towards target
      const nextX = curX + (targetX - curX) * 0.15;
      const nextY = curY + (targetY - curY) * 0.15;
      cursorEl.style.transform = `translate3d(${nextX}px, ${nextY}px, 0)`;
      requestAnimationFrame(tick);
    }
    tick();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      unsubX();
      unsubY();
    };
  });
</script>

<div bind:this={cursorEl} class="cursor"></div>

<style>
  .cursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    pointer-events: none;
    background-color: white;
    transform: translate3d(-50%, -50%, 0);
    z-index: 10000;
    mix-blend-mode: difference; /* optional: inverts color over backgrounds */
  }
</style>

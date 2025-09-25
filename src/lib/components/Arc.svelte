<script>
  import { onMount, afterUpdate } from "svelte";

  export let text = "A RITUAL TAILORED TO EACH SEASON";
  export let radius = 100;
  export let pad = 32;
  export let fit = true;

  let arc; // <path>
  let t; // <text>

  // upper semicircle centered at (0,0)
  $: d = `M ${-radius} 0 A ${radius} ${radius} 0 0 1 ${radius} 0`;
  // roomy viewBox to avoid clipping
  $: vb = `${-radius - pad} ${-radius - pad} ${2 * (radius + pad)} ${radius + 2 * pad}`;

  function applyFit() {
    if (!arc || !t) return;

    const arcLen = arc.getTotalLength();
    const target = arcLen * 0.7; // leave margins at ends

    if (!fit) {
      t.removeAttribute("textLength");
      t.removeAttribute("lengthAdjust");
      return;
    }

    const cur = t.getComputedTextLength();

    if (cur > target) {
      t.setAttribute("lengthAdjust", "spacingAndGlyphs"); // gentle compress
      t.setAttribute("textLength", String(target));
    } else {
      t.setAttribute("lengthAdjust", "spacing"); // loosen spacing
      t.setAttribute("textLength", String(target));
    }
  }

  onMount(applyFit);
  afterUpdate(applyFit);
</script>

<link
  href="https://fonts.googleapis.com/css2?family=Della+Respira&display=swap"
  rel="stylesheet"
/>

<svg viewBox={vb} aria-label={text}>
  <path id="arc" bind:this={arc} {d} />
  <text bind:this={t} dy="-3">
    <textPath href="#arc" startOffset="50%" text-anchor="middle">
      {text}
    </textPath>
  </text>
</svg>

<style>
  svg {
    width: 100%;
    max-width: 20rem;
    display: block;
    overflow: visible;
  }
  #arc {
    fill: none;
    stroke: none;
  }
  text {
    font-family: "Della Respira", serif;
    font-size: 0.75rem;
    fill: #b55a32;
    text-rendering: geometricPrecision;
  }
</style>

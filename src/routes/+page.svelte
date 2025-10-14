<script>
  import Button from "$lib/components/Button.svelte";
  import Wrapper from "$lib/components/Wrapper.svelte";
  import SectionHero from "$lib/components/SectionHero.svelte";
  import SectionFAQ from "$lib/components/SectionFAQ.svelte";
  import SectionRSVP from "$lib/components/SectionRSVP.svelte";
  import SectionDate from "$lib/components/SectionDate.svelte";
  import SectionStory from "$lib/components/SectionStory.svelte";
  import Ornament from "$lib/components/Ornament.svelte";
  import CTA from "$lib/components/CTA.svelte";
  import Cover from "$lib/components/Cover.svelte";
  import ArcText from "$lib/components/Arc.svelte";
  import SectionLocation from "$lib/components/SectionLocation.svelte";
</script>

<SectionHero />
<Ornament />
<SectionStory />
<SectionDate />
<SectionLocation />
<div class="btn-flip">
  <button class="flip-1">wedding location</button>
  <button class="flip-2">get direction</button>
</div>
<SectionFAQ />
<SectionRSVP />

<style scoped>
  .btn-flip {
    position: relative;
    display: flex;
    width: 20rem;
    flex-direction: column;
    perspective: 600px; /* adds 3D depth */
    cursor: pointer;
  }

  .flip-1,
  .flip-2 {
    text-transform: uppercase;
    height: 3rem;
    letter-spacing: 0.05em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
    backface-visibility: hidden;
  }

  .flip-1 {
    background-color: pink;
    transform-origin: top;
    transform: rotateX(0deg);
  }

  .flip-2 {
    background-color: black;
    color: aliceblue;
    position: absolute;
    top: 0;
    transform-origin: bottom;
    transform: rotateX(-90deg);
  }

  .btn-flip:hover .flip-1 {
    transform: rotateX(180deg);
  }

  .btn-flip:hover .flip-2 {
    transform: rotateX(0deg);
  }
</style>

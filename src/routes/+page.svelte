<script>
  import Button from "$lib/components/Button.svelte";
  import Wrapper from "$lib/components/Wrapper.svelte";
  import CTA from "$lib/components/CTA.svelte";
  import { onMount } from "svelte";
  import gsap from "gsap";

  let name = "world";
  let titleEl;
  onMount(() => {
    gsap.from(titleEl, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
    });
  });
</script>

<Wrapper paddingY="small">
  <h1>This site is repurposed for now</h1>
</Wrapper>

<script>
  import Button from "$lib/components/Button.svelte";
  import Wrapper from "$lib/components/Wrapper.svelte";
  import SectionFAQ from "$lib/components/SectionFAQ.svelte";
  import SectionRSVP from "$lib/components/SectionRSVP.svelte";
  import SectionDate from "$lib/components/SectionDate.svelte";
  import CTA from "$lib/components/CTA.svelte";
  import Cover from "$lib/components/Cover.svelte";
  import ArcText from "$lib/components/Arc.svelte";
</script>

<Wrapper paddingY="small">
  <h1>
    The wedding celebration will be held at The Garden ROOm at Sleepy Ridge in
    Orem, Utah.
  </h1>
  <ArcText text="HELLO AUTUMN" />
  <ArcText text="A RITUAL TAILORED TO EACH SEASON" />
  <p>
    Please note that Sleepy Ridge is home to multiple reception areas. The
    ceremony will be held at the Garden Patio before moving into the Garden Room
    for the reception. You will be ushered upon arrival. There is plenty of free
    parking at the venue or on the street.
  </p>
  <Button
    buttonText="Get Direction"
    link="https://maps.app.goo.gl/JcLeM3jsCgbEnjsW7"
  />
  <SectionDate />
  <SectionFAQ />
  <SectionRSVP />
</Wrapper>

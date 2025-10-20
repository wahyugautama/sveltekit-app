<script lang="ts">
  import Button from "./Button.svelte";
  import HeadSVG from "./HeadSVG.svelte";
</script>

<section id="location">
  <div class="heading">
    <span class="script">Wedding</span>
    <h2>Location</h2>
  </div>
  <HeadSVG width="7.5rem" />
  <div class="divider-wrapper">
    <hr />
    <span>-8.5903118, 115.185418</span>
    <hr />
  </div>

  <p class="description">
    Come by car or motorbike. <br />Parking is available at the venue and along
    the street.
  </p>
  <h3 class="address">BR. DELOD PEMPATAN<br />LUKLUK, MENGWI</h3>
  <p>badung, bali</p>
  <Button
    buttonText="Get Direction"
    link="https://maps.app.goo.gl/JcLeM3jsCgbEnjsW7"
    variant="invert"
  />
</section>

<style scoped>
  .address {
    font-size: 1.25rem;
    line-height: 1.25;
  }
  #location {
    min-height: 100vh;
    background-color: #0f5ad0;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem 1rem;
    gap: 1.5rem;
    position: relative;
  }

  .divider-wrapper {
    font-size: 0.75rem;
    font-family: "ABC Diatype Mono";
    display: flex;
    width: 100%;
    align-items: center;
    gap: 0.5rem;
  }

  hr {
    flex-grow: 1;
    border: none;
    height: 1px;
    background-color: white;
  }

  .description {
    max-width: 55ch;
    position: absolute;
    right: 2rem;
    text-align: right;
    bottom: 4rem;
  }

  .heading {
    max-width: 30rem;
    position: absolute;
    left: 2rem;
    top: 4rem;
    text-align: left;
  }
</style>

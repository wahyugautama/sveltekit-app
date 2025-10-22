<script>
  import HeadSVG from "./HeadSVG.svelte";
</script>

<section id="hero">
  <h1>groom & bride</h1>
  <div class="profile">
    <div class="grid">
      <div class="profile">
        <HeadSVG width="7.5rem" />
        <div class="names">
          <h2 class="name">Wahyu Gautama</h2>
          <p class="role">son of <br />Lord Montague & Lady Montague</p>
        </div>
      </div>
      <div class="img-container">
        <img src="/images/cover-img.webp" alt="" class="img-parallax" />
      </div>
      <div class="profile">
        <HeadSVG width="7.5rem" />
        <div class="names">
          <h2 class="name">Novi Fitriani</h2>
          <p class="role">daughter of <br />Lord Montague & Lady Montague</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style scoped>
  #hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem 1rem;
    gap: 2rem;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 2rem;
  }

  .name {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }

  .role {
    font-size: 0.875rem;
    font-family: "ABC Diatype Mono";
    line-height: 1.25;
  }

  .img-container {
    width: 15rem;
    aspect-ratio: 1 / 1;
    border: 0.5rem solid white;
    margin: 4rem;
    overflow: hidden;
  }

  .img-parallax {
    width: 100%;
    height: 120%;
    object-fit: cover;
  }
</style>

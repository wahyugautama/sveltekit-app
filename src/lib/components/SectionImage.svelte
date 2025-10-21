<section id="image">
  <div class="img-content">
    <h2>The</h2>
    <h2>Journey</h2>
    <div class="img-container"></div>

    <h2>Continues</h2>
  </div>
  <img src="/images/section-img.webp" alt="" class="img-full" />
</section>

<style scoped>
  #image {
    position: relative;
    text-align: center;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
  }

  .img-content {
    z-index: 1;
    position: relative;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .img-full {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    object-fit: cover;
    z-index: 0;
  }
  .img-container {
    width: 15rem;
    aspect-ratio: 1 / 1;
    border: 0.5rem solid white;
  }
</style>

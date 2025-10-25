<script>
  import HeadSVG from "./HeadSVG.svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";

  onMount(() => {
    gsap.to("#right", {
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      rotate: 15,
      y: "-25vh",
      ease: "none",
    });

    gsap.to("#left", {
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      rotate: -15,
      y: "-50vh",
      ease: "none",
    });
  });
</script>

<section id="hero">
  <h1>groom & <br />bride</h1>
  <div class="grid">
    <div id="left" class="profile">
      <div class="img-container">
        <img src="/images/wahyu.webp" alt="" class="img-parallax" />
      </div>
      <div class="names">
        <h2 class="name">Wahyu <br />Gautama</h2>
        <p class="role">
          son of <br />I Made Suparna <br />& Ni Kompiang Suparmi
        </p>
      </div>
    </div>
    <div class="dots">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div id="right" class="profile">
      <div class="img-container">
        <img src="/images/novi.webp" alt="" class="img-parallax" />
      </div>
      <div class="names">
        <h2 class="name">Novi <br />Fitriani</h2>
        <p class="role">
          daughter of <br />(alm.) Erick Connyawan <br />& Effi Herawati
        </p>
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

  .dots {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }

  .dot {
    width: 0.25rem;
    height: 0.25rem;
    background-color: var(--blue-primary);
    border-radius: 50%;
  }
  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .grid {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 6rem;
  }

  .name {
    font-size: 1.5rem;
    margin-bottom: 1rem;
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
    overflow: hidden;
  }

  .img-parallax {
    width: 100%;
    height: 120%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .grid {
      flex-direction: column;
      gap: 2rem;
    }
    #hero {
      padding-top: 6rem;
    }
  }
</style>

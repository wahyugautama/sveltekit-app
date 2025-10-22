<script lang="ts">
  // Smooth scroll with offset (in case the fixed navbar hides top content)
  function smoothAnchor(e: MouseEvent) {
    const a = e.currentTarget as HTMLAnchorElement;
    const href = a.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    e.preventDefault();

    // Blur animation
    const pageWrapper = document.querySelector(".page-wrapper") as HTMLElement;
    if (pageWrapper) {
      pageWrapper.style.transition = "all 0.3s ease";
      pageWrapper.style.filter = "blur(.5rem)";

      // Remove blur after animation
      setTimeout(() => {
        pageWrapper.style.filter = "none";
      }, 300);
    }
    const el = document.querySelector(href);
    if (el) {
      const navHeight = 0; // adjust to your nav height in px
      const rect = el.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const targetY = rect.top + scrollTop - navHeight;

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });

      history.pushState(null, "", href);
    }
  }
</script>

<nav>
  <!-- Section Links -->
  <div class="nav-links">
    <div class="navlink-item">
      <div class="no">I</div>
      <a href="#date" on:click={smoothAnchor}>Date</a>
    </div>
    <div class="navlink-item">
      <div class="no">II</div>
      <a href="#location" on:click={smoothAnchor}>Location</a>
    </div>
    <div class="navlink-item">
      <div class="no">III</div>
      <a href="#story" on:click={smoothAnchor}>Story</a>
    </div>
    <div class="navlink-item">
      <div class="no">IV</div>
      <a href="#faq" on:click={smoothAnchor}>FAQ</a>
    </div>

    <div class="navlink-item">
      <div class="no">V</div>
      <a href="#rsvp" on:click={smoothAnchor}>RSVP</a>
    </div>
  </div>
</nav>

<style>
  nav {
    position: fixed;
    background-color: white;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    z-index: 1000;
    border: 1px solid #0f5ad0;
    border-right: none;
  }

  .no {
    height: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    display: flex;
    font-size: 0.75rem;
    align-items: center;
    justify-content: center;
    border: 1px solid #0f5ad0;
  }
  .nav-links {
    display: flex;
  }

  .nav-links a {
    text-decoration: none;
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-weight: 500;
    transition: color 0.2s ease;
    border-right: 1px solid #0f5ad0;
    border-left: 1px solid #0f5ad0;
    flex-grow: 1;
  }

  .nav-links a:hover {
    background-color: #0f5ad0;
    color: white;
  }

  .navlink-item {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }

  @media (max-width: 768px) {
    nav {
      display: none;
    }
  }
</style>

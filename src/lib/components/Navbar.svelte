<script>
  import { page } from '$app/stores';
  import { derived } from 'svelte/store';

  // reactive store for the current pathname
  const currentPath = derived(page, ($page) => $page.url.pathname);

  let isOpen = false;
</script>

<nav class="navbar">
  <div class="nav-brand">MyApp</div>

  <button class="nav-toggle" on:click={() => isOpen = !isOpen}>
    ☰
  </button>

  <ul class:open={isOpen} class="nav-links">
  <li class:active={$currentPath === '/'}>
    <a href="/">Home</a>
  </li>
  <li class:active={$currentPath === '/about'}>
    <a href="/about">About</a>
  </li>
  <li class:active={$currentPath === '/blog'}>
    <a href="/blog">Blog</a>
  </li>
  <li class:active={$currentPath === '/contact'}>
    <a href="/contact">Contact</a>
  </li>
</ul>

</nav>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #111;
    color: #fff;
  }

  .nav-brand {
    font-weight: bold;
    font-size: 1.2rem;
  }

  .nav-toggle {
    font-size: 1.5rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    display: none;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
    list-style: none;
  }

  .nav-links li a {
    color: white;
    text-decoration: none;
  }

  .nav-links li.active a {
    color: #00f0ff;
    border-bottom: 2px solid #00f0ff;
  }

  @media (max-width: 640px) {
    .nav-toggle {
      display: block;
    }

    .nav-links {
      display: none;
      flex-direction: column;
      gap: 1rem;
      position: absolute;
      top: 100%;
      left: 0;
      background: #111;
      width: 100%;
      padding: 1rem;
    }

    .nav-links.open {
      display: flex;
    }
  }
</style>

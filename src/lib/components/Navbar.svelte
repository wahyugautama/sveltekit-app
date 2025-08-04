<script lang="ts">
  import { page } from "$app/stores";
  import { derived } from "svelte/store";
  import { locale } from "svelte-i18n";

  // reactive store for the current pathname
  const currentPath = derived(page, ($page) => $page.url.pathname);

  let isOpen = false;
</script>

<nav class="navbar">
  <div class="nav-brand">MyApp</div>

  <!-- Language switcher -->
  <div class="lang-switcher">
    <button class:active={$locale === "en"} on:click={() => locale.set("en")}>
      EN
    </button>
    <button class:active={$locale === "id"} on:click={() => locale.set("id")}>
      ID
    </button>
  </div>

  <button class="nav-toggle" on:click={() => (isOpen = !isOpen)}> ☰ </button>

  <ul class="nav-links" class:open={isOpen}>
    <li class:active={$currentPath === "/"}>
      <a href="/">Home</a>
    </li>
    <li class:active={$currentPath === "/about"}>
      <a href="/about">About</a>
    </li>
    <li class:active={$currentPath === "/blog"}>
      <a href="/blog">Blog</a>
    </li>
    <li class:active={$currentPath === "/contact"}>
      <a href="/contact">Contact</a>
    </li>
  </ul>
</nav>

<style>
  .navbar {
    display: flex;
    height: 72px;
    align-items: center;
    padding: 1rem;
    background-color: #111;
    color: #fff;
  }

  .nav-brand {
    font-weight: bold;
    font-size: 1.2rem;
    margin-right: auto;
  }

  .lang-switcher {
    display: flex;
    gap: 0.5rem;
    margin-left: 1rem;
  }
  .lang-switcher button {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
  }
  .lang-switcher button.active {
    border-bottom: 2px solid #00f0ff;
  }

  .nav-toggle {
    font-size: 1.5rem;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    display: none;
    margin-left: 1rem;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
    list-style: none;
  }
  .nav-links.open {
    display: flex;
  }

  .nav-links li a {
    color: #fff;
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
      position: absolute;
      top: 72px;
      left: 0;
      background: #111;
      width: 100%;
      padding: 1rem;
      z-index: 10;
    }
    .lang-switcher {
      margin-bottom: 1rem;
    }
    .nav-links.open {
      display: flex;
    }
  }
</style>

<script lang="ts">
  import { page } from "$app/stores";
  import { derived } from "svelte/store";
  import { goto } from "$app/navigation";
  import Wrapper from "./Wrapper.svelte";

  const currentPath = derived(page, ($page) => $page.url.pathname);
  let isOpen = false;

  function navigateTo(path: string) {
    isOpen = false;
    goto(path);
  }
</script>

<nav>
  <Wrapper paddingY="small">
    <div class="navbar">
      <div class="nav-brand">MyApp</div>

      <button class="nav-toggle" on:click={() => (isOpen = !isOpen)}>☰</button>

      <ul class:open={isOpen} class="nav-links">
        <li class:active={$currentPath === "/"}>
          <a href="/" on:click|preventDefault={() => navigateTo("/")}>Home</a>
        </li>
        <li class:active={$currentPath === "/about"}>
          <a href="/about" on:click|preventDefault={() => navigateTo("/about")}
            >About</a
          >
        </li>
        <li class:active={$currentPath === "/blog"}>
          <a href="/blog" on:click|preventDefault={() => navigateTo("/blog")}
            >Blog</a
          >
        </li>
        <li class:active={$currentPath === "/contact"}>
          <a
            href="/contact"
            on:click|preventDefault={() => navigateTo("/contact")}>Contact</a
          >
        </li>
      </ul>
    </div>
  </Wrapper>
</nav>

<style>
  .navbar {
    display: flex;
    align-items: center;
  }

  .nav-brand {
    font-weight: bold;
    font-size: 1.2rem;
    margin-right: auto;
  }

  .nav-toggle {
    font-size: 1.5rem;
    background: none;
    border: none;
    color: black;
    cursor: pointer;
    display: none;
    margin-left: 1rem;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
    list-style: none;
  }

  .nav-links li a {
    color: black;
    text-decoration: none;
  }

  .nav-links li.active a {
    color: aqua;
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
      top: 48px;
      left: 0;
      background: grey;
      width: 100%;
      padding: 1rem;
      z-index: 10;
    }

    .nav-links.open {
      display: flex;
    }
  }
</style>

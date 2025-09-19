<script lang="ts">
  import { page } from "$app/stores";
  import { derived } from "svelte/store";
  import { goto } from "$app/navigation";
  import Wrapper from "./Wrapper.svelte";
  import Navlink from "./Navlink.svelte";

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
      <a href="/"><div class="nav-brand">Shapeshifter</div></a>

      <button class="nav-toggle" on:click={() => (isOpen = !isOpen)}>☰</button>

      <ul class:open={isOpen} class="nav-links">
        <li class:active={$currentPath === "/about"}>
          <Navlink text="About" link="/blog" />
        </li>
        <li>
          <Navlink text="FAQ" link="#faq" />
        </li>
        <li class:active={$currentPath === "/contact"}>
          <Navlink text="Contact" link="/contact" />
        </li>
      </ul>
    </div>
  </Wrapper>
</nav>

<style>
  nav {
    background: white;
    border-bottom: 1px solid #ddd;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
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

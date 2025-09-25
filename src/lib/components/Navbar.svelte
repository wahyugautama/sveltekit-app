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
      <a href="/"><div class="nav-brand">W&N Wedding</div></a>
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
</style>

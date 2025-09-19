<script>
  import Wrapper from "./Wrapper.svelte";
  import { onMount } from "svelte";

  let coverEl;
  let buttonEl;

  onMount(() => {
    buttonEl.addEventListener("click", () => {
      coverEl.style.display = "none";
    });
  });
</script>

<div class="cover" bind:this={coverEl}>
  <h1>This is a cover</h1>
  <button bind:this={buttonEl}>Open invitation</button>
</div>

<style>
  .cover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0070f3;
    color: white;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
</style>

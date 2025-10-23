<script>
  import { linesReveal } from "$lib/actions/lineReveal";
</script>

<div class="line-wrapper" use:linesReveal>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
</div>

<style scoped>
  .line-wrapper {
    position: absolute;
    pointer-events: none;
    top: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    height: 20rem;
    width: 100%;
  }

  .line {
    flex-grow: 1;
    height: auto;
    background-color: #0f5ad0;
  }
</style>

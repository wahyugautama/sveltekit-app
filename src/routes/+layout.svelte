<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte'
  import '../app.css';
</script>
<Navbar />

<main>
  <div class="page-container">
    <slot />
  </div>
</main>

<style>
  .page-container {
    min-height: 100vh;
    will-change: opacity;
	padding: 3rem;
  }
</style>
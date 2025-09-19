<script lang="ts">
  import CustomCursor from "$lib/components/CustomCursor.svelte";
  import Cover from "$lib/components/Cover.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "../app.css";
</script>

<CustomCursor />

<div class="page-wrapper">
  <Cover />
  <slot />
  <Footer />
</div>

<style>
  .page-wrapper {
    padding-top: 4rem;
    min-height: 100vh;
  }
</style>

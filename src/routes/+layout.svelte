<script lang="ts">
  import CustomCursor from "$lib/components/CustomCursor.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Cover from "$lib/components/Cover.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "../app.css";
</script>

<CustomCursor />

<div class="page-wrapper">
  <Cover />
  <Navbar />
  <slot />
  <Footer />
</div>

<style>
  .page-wrapper {
    padding-top: 4rem;
  }
</style>

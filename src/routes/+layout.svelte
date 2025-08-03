<script lang="ts">

  import Navbar from '$lib/components/Navbar.svelte';
  import '../app.css';
  import Footer from '$lib/components/Footer.svelte';


</script>

<Navbar />
      <slot />
<Footer />

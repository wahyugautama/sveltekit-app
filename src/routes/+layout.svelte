<script context="module" lang="ts">
  import { register } from "svelte-i18n";

  register("en", () => import("$lib/locales/en.json"));
  register("id", () => import("$lib/locales/id.json"));
</script>

<script lang="ts">
  import { locale, t } from "svelte-i18n";
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Navbar />

<main>
  <slot />
</main>

<Footer />

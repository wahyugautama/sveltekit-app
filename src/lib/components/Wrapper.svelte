<script lang="ts">
  export let paddingY: "none" | "small" | "medium" | "large" | "x-large" =
    "medium";

  const paddingMap = {
    none: "py-none",
    small: "py-sm",
    medium: "py-md",
    large: "py-lg",
    "x-large": "py-xl",
  };
</script>

<div class={`wrapper ${paddingMap[paddingY]}`}>
  <slot />
</div>

<style>
  /* Responsive vertical padding using clamp(min, fluid, max) */

  :global(.py-none) {
    padding-block: 0;
  }

  :global(.py-sm) {
    padding-block: clamp(0.5rem, 1.5vw, 1rem);
  }

  :global(.py-md) {
    padding-block: clamp(1rem, 2.5vw, 2rem);
  }

  :global(.py-lg) {
    padding-block: clamp(1.5rem, 4vw, 3rem);
  }

  :global(.py-xl) {
    padding-block: clamp(2rem, 5vw, 4rem);
  }

  .wrapper {
    padding-inline: 24px;
  }

  @media (min-width: 768px) {
    .wrapper {
      padding-inline: 64px;
    }
  }
</style>

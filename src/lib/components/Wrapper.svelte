<script lang="ts">
  export let paddingY: string = '3rem';
</script>

<div class="wrapper" style="padding-block: {paddingY}">
  <slot />
</div>

<style>
  .wrapper {
    padding-inline: 24px;
  }

  @media (min-width: 768px) {
    .wrapper {
      padding-inline: 64px;
    }
  }
</style>

<script>
  import Button from './Button.svelte';

  export let heading = '';
  export let description = '';
  export let showButton = true;
  export let buttonProps = {buttonText,link}; // pass anything you’d pass to <Button {...} />
</script>

<section class="cta">
  <h2>{heading}</h2>
  <p>{description}</p>

  {#if showButton}
    <Button {...buttonProps} />
  {/if}
</section>

<style>
  .cta {
    padding: 2rem;
    text-align: center;
    background: #f7f7f7;
  }

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
    color: #555;
  }
</style>

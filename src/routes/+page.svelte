<script>
    import Button from '$lib/components/Button.svelte';
  let name = 'world';
</script>

<h1>Hello {name}!</h1>
<input bind:value={name} placeholder="Enter your name" />
<Button buttonText="Go to About" link="/about" />
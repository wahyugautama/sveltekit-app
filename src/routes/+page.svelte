<script>
    import Button from '$lib/components/Button.svelte';
    import Wrapper from '$lib/components/Wrapper.svelte';
  let name = 'world';
</script>


<Wrapper paddingY="5rem">
  <h1>Hello with 5rem vertical padding</h1>
  <h1>Hello {name}!</h1>
<input bind:value={name} placeholder="Enter your name" />
<Button buttonText="Go to About" link="/about" />
</Wrapper>
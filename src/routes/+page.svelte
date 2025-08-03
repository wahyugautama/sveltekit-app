<script>
    import Button from '$lib/components/Button.svelte';
    import Wrapper from '$lib/components/Wrapper.svelte';
    import CTA from '$lib/components/CTA.svelte';

  let name = 'world';
</script>


<Wrapper paddingY="5rem">
  <h1>Hello with 5rem vertical padding</h1>
  <h1>Hello {name}!</h1>
<input bind:value={name} placeholder="Enter your name" />

<CTA
  heading="Ready to get started?"
  description="Join us today and take your skills to the next level."
  showButton={true}
  buttonProps={{
    buttonText: 'Get Started',
    link: '/contact',
  }}
/>
</Wrapper>
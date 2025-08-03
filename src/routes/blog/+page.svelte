<script>
    import Wrapper from '$lib/components/Wrapper.svelte';
  export let data;
  const { posts } = data;
</script>
<Wrapper paddingY="5rem">   
    <h1>Blog</h1>

<ul>
  {#each posts as post}
    <li>
      <a href={`/blog/${post.slug}`}>
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
        <small>{post.date}</small>
      </a>
    </li>
  {/each}
</ul>
</Wrapper>


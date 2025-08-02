<script>
  export let data;
</script>

<h1>Blog Posts</h1>
{#each data.posts as post}
  <article>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
  </article>
{/each}
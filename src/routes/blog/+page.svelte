<script>
  import Wrapper from "$lib/components/Wrapper.svelte";
  export let data;
</script>

<Wrapper paddingY="medium">
  <h1>Articles</h1>

  {#if data.posts.length === 0}
    <p>No posts available.</p>
  {:else}
    <div class="post-grid">
      {#each data.posts as post}
        <article class="post-card">
          <a href={`/blog/${post.slug}`} class="image-wrap">
            {#if post.coverImage}
              <img src={`https:${post.coverImage}`} alt={post.title} />
            {/if}
          </a>
          <div class="post-content">
            <h2><a href={`/blog/${post.slug}`}>{post.title}</a></h2>
            <p class="date">
              {new Date(post.publishingDate).toLocaleDateString()}
            </p>
          </div>
        </article>
      {/each}
    </div>
  {/if}
</Wrapper>

<style>
  .post-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .post-card {
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
    transition: box-shadow 0.3s ease;
  }

  .post-card:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }

  .image-wrap img {
    width: 100%;
    height: auto;
    display: block;
  }

  .post-content {
    padding: 1.25rem;
  }

  .post-content h2 {
    margin: 0 0 0.5rem;
    font-size: 1.25rem;
  }

  .post-content a {
    color: inherit;
    text-decoration: none;
  }

  .post-content a:hover {
    text-decoration: underline;
  }

  .date {
    font-size: 0.875rem;
    color: #888;
    margin-top: 0.25rem;
  }
</style>

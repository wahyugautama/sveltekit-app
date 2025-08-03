<script>
  import Wrapper from "$lib/components/Wrapper.svelte";
  import { onMount } from "svelte";
  import { browser } from "$app/environment";

  export let data;
  const { post } = data;

  let shareUrl = "";
  let copied = false;
  const formattedDate = new Date(post.publishingDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  onMount(() => {
    if (browser) shareUrl = window.location.href;
  });

  function copyToClipboard() {
    navigator.clipboard.writeText(shareUrl).then(() => {
      copied = true;
      setTimeout(() => (copied = false), 2000);
    });
  }
</script>

<Wrapper paddingY="5rem">
  <a href="/blog">All articles</a>
  <article>
    <h1>{post.title}</h1>
    <p><em>{formattedDate}</em></p>
    {#if post.coverImage}
      <img src={post.coverImage} alt={post.title} width="100%" />
    {/if}
    <div>{@html post.content}</div>
  </article>

  <div style="margin-top: 2rem;">
    <h3>Share this post:</h3>
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
        target="_blank">LinkedIn</a
      >

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank">Facebook</a
      >

      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
        target="_blank">X / Twitter</a
      >

      <button on:click={copyToClipboard}>
        {#if copied}Copied!{:else}Copy Link{/if}
      </button>
    </div>
  </div>
</Wrapper>

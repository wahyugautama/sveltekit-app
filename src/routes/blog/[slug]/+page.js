// src/routes/blog/[slug]/+page.js
export async function load({ params }) {
  const { slug } = params;

  // Example: Simulated blog content (replace with fetch or file read)
  const posts = {
    "hello-world": {
      title: "Hello World",
      content: "This is my first blog post.",
    },
    "sveltekit-rocks": {
      title: "Why SvelteKit Rocks",
      content: "SvelteKit is fast and fun to use.",
    },
  };

  const post = posts[slug];

  if (!post) {
    throw error(404, "Post not found");
  }

  return {
    post,
  };
}

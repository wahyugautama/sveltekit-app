// src/routes/blog/+page.js

/** @type {import('./$types').PageLoad} */
export async function load() {
  const posts = [
    {
      slug: "hello-world",
      title: "Hello World",
      excerpt: "This is my first blog post.",
      date: "2025-08-01",
    },
    {
      slug: "sveltekit-rocks",
      title: "Why SvelteKit Rocks",
      excerpt: "SvelteKit is fast and fun to use.",
      date: "2025-08-02",
    },
  ];

  return {
    posts,
  };
}

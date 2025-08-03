import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { client } from "$lib/contentful";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const { slug } = params;

  const entries = await client.getEntries({
    content_type: "blogPost",
    "fields.slug[in]": [`${slug}`, `${slug}/`],
    limit: 1,
  });

  if (!entries.items.length) {
    throw error(404, "Post not found");
  }

  const post = entries.items[0].fields;

  return {
    post: {
      title: post.title,
      content: documentToHtmlString(post.content), // ✅ convert rich text to HTML
      slug: post.slug,
      coverImage: post.coverImage?.fields.file.url,
      publishingDate: post.publishingDate,
    },
  };
}

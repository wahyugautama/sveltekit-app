import { client } from "$lib/contentful";

export async function load() {
  const entries = await client.getEntries({
    content_type: "blogPost",
    order: "-fields.publishingDate",
  });
  return {
    posts: entries.items.map((item) => ({
      slug: item.fields.slug,
      title: item.fields.title,
      content: item.fields.content,
      coverImage: item.fields.coverImage?.fields.file.url,
      publishingDate: item.fields.publishingDate,
    })),
  };
}

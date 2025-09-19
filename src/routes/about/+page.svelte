<script lang="ts">
  import FAQ from "$lib/components/SectionFAQ.svelte";
  import Wrapper from "$lib/components/Wrapper.svelte";
  import Tabs from "$lib/components/Tabs.svelte";
  export let data;
  const tabData = [
    { label: "Introduction", content: "<p>Welcome to the intro tab!</p>" },
    {
      label: "Projects",
      content: "<ul><li>Project A</li><li>Project B</li></ul>",
    },
    { label: "Contact", content: "<p>Email me at hello@example.com</p>" },
  ];

  const faqs = [
    {
      question: "What is SvelteKit?",
      answer:
        "SvelteKit is a framework for building web applications using Svelte.",
    },
    {
      question: "Can I use it for static sites?",
      answer: "Yes, SvelteKit supports static site generation out of the box.",
    },
    {
      question: "How do I deploy it?",
      answer:
        "You can deploy SvelteKit apps to Netlify, Vercel, or any platform that supports Node or static hosting.",
    },
  ];
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.description} />
  <meta property="og:title" content={data.title} />
  <meta property="og:description" content={data.description} />
  <meta property="og:url" content={data.url} />
  <meta name="twitter:card" content="summary_large_image" />

  <link rel="canonical" href={data.url} />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Sandikala Studio",
      url: data.url,
      description: data.description
    })}
  </script>
</svelte:head>

<Wrapper paddingY="small">
  <h1>About</h1>
  <Tabs tabs={tabData} />
</Wrapper>

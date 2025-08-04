<script lang="ts">
  import FAQ from "$lib/components/FAQ.svelte";
  import Wrapper from "$lib/components/Wrapper.svelte";
  import Tabs from "$lib/components/Tabs.svelte";
  import { t } from "svelte-i18n";
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

<Wrapper paddingY="5rem">
  <h1>{$t("about.title")}</h1>
  <p>{$t("about.description")}</p>
  <FAQ {faqs} />
  <Tabs tabs={tabData} />
</Wrapper>

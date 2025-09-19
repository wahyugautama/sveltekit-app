<script>
  // Example FAQ data
  let faqs = [
    {
      question: "When is the event?",
      answer: "The event will be held on Saturday, October 12th at 4:00 PM.",
    },
    {
      question: "Where is the venue?",
      answer: "The venue is at The Garden Room, Sleepy Ridge in Orem, Utah.",
    },
    {
      question: "Is parking available?",
      answer: "Yes, free parking is available at the venue and nearby streets.",
    },
  ];

  // Track which item is open
  let openIndex = null;

  function toggleFAQ(index) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<section id="faq" class="faq">
  <h2>Frequently Asked Questions</h2>
  <ul>
    {#each faqs as faq, i}
      <li class="faq-item">
        <button class="faq-question" on:click={() => toggleFAQ(i)}>
          {faq.question}
        </button>
        {#if openIndex === i}
          <p class="faq-answer">{faq.answer}</p>
        {/if}
      </li>
    {/each}
  </ul>
</section>

<style>
  .faq {
    max-width: 600px;
    margin: 2rem auto;
    padding: 1rem;
  }

  .faq h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .faq-item {
    margin-bottom: 1rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.5rem;
  }

  .faq-question {
    width: 100%;
    text-align: left;
    font-size: 1rem;
    font-weight: bold;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem 0;
  }

  .faq-answer {
    margin-top: 0.5rem;
    color: #444;
    font-size: 0.95rem;
  }
</style>

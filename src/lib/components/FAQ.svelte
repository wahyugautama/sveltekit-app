<script>
  export let faqs = [];

  let openIndex = null;

  function toggle(index) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<section class="faq-section">
  <h2>Frequently Asked Questions</h2>
  <div class="faq-list">
    {#each faqs as { question, answer }, index}
      <div class="faq-item">
        <button class="faq-question" on:click={() => toggle(index)}>
          {question}
          <span class="arrow">{openIndex === index ? '−' : '+'}</span>
        </button>
        {#if openIndex === index}
          <div class="faq-answer">
            {@html answer}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</section>

<style>

  .faq-question {
    width: 100%;
    text-align: left;
    font-weight: bold;
    font-size: 1.1rem;
    padding: 1rem;
    background: none;
    border: none;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .faq-answer {
    padding: 1rem;
    background-color: #f9f9f9;
    border-bottom: 1px solid #ddd;
  }

  .arrow {
    font-size: 1.2rem;
    line-height: 1;
  }
</style>

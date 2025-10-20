<script>
  import { slide } from "svelte/transition";
  import Wrapper from "./Wrapper.svelte";
  import Checkers from "./Checkers.svelte";
  import { fadeOnView } from "$lib/actions/fadeOnView.js";

  let faqs = [
    {
      no: "001",
      question: "Where is the wedding taking place?",
      answer:
        "Both the ceremony and reception are at Gg. Panti no. 12, Lukluk, Mengwi, Badung, Bali",
    },
    {
      no: "002",
      question: "How do I get there? Is parking available?",
      answer:
        "Come by car or motorbike. Parking is available at the venue and along the street.",
    },
    {
      no: "003",
      question: "What time should I come?",
      answer:
        "The Balinese ceremony runs 6:00 AM – 12:00 PM (join anytime …). The reception begins at 1:00 PM and goes until finish.",
    },
    {
      no: "004",
      question: "What’s the dress code?",
      answer:
        "Anything casual works! A simple kebaya or traditional attire is also great. Since it’s daytime, light and comfy outfits are best.",
    },
    {
      no: "005",
      question: "What food will be served?",
      answer:
        "A buffet of halal Indonesian dishes. Come hungry and enjoy as much as you like.",
    },
    {
      no: "006",
      question: "Can I bring someone with me?",
      answer: "Plus-ones are welcome if confirmed in your RSVP…",
    },
  ];

  let openIndex = null;

  function toggleFAQ(i) {
    // Reset all rotations and lines
    document.querySelectorAll(".toggle-inner").forEach((el) => {
      el.style.transform = "rotate(0deg)";
      el.style.transition = "transform 0.5s ease";
    });
    document.querySelectorAll(".faq-line").forEach((el) => {
      el.style.width = "2rem";
      el.style.transition = "width 0.5s ease";
    });

    // Toggle index
    openIndex = openIndex === i ? null : i;

    // Animate the active FAQ
    if (openIndex !== null) {
      const currentItem = document.querySelector(
        `.faq-item:nth-child(${i + 1})`
      );
      const toggleInner = currentItem?.querySelector(".toggle-inner");
      const faqLine = currentItem?.querySelector(".faq-line");

      if (toggleInner) toggleInner.style.transform = "rotate(45deg)";
      if (faqLine) faqLine.style.width = "100%";
    }
  }
</script>

<Wrapper paddingY="large" />
<section id="faq" class="faq">
  <span class="script">Frequently</span>
  <h2 use:fadeOnView={{ split: "lines", stagger: 0.05 }}>Asked Questions</h2>

  <div class="faq-list">
    {#each faqs as faq, i}
      <div class="faq-item">
        <div class="faq-line"></div>
        <div class="faq-no">
          <p>{faq.no}</p>
        </div>

        <div
          class="faq-header"
          role="button"
          tabindex="0"
          aria-expanded={openIndex === i}
          aria-controls={"faq-answer-" + i}
          on:click={() => toggleFAQ(i)}
          on:keydown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleFAQ(i);
            }
          }}
        >
          <h3 class="faq-question">{faq.question}</h3>
          <div class="btn-toggle">
            <div class="toggle-inner">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="8.2002"
                  y1="0.299805"
                  x2="8.2002"
                  y2="15.2998"
                  stroke="#0055DD"
                />
                <line
                  x1="0.700195"
                  y1="7.7998"
                  x2="15.7002"
                  y2="7.7998"
                  stroke="#0055DD"
                />
              </svg>
            </div>
          </div>
        </div>

        {#if openIndex === i}
          <div
            id={"faq-answer-" + i}
            class="faq-answer-wrap"
            transition:slide={{ duration: 100, easing: (t) => t }}
          >
            <p class="faq-answer">{faq.answer}</p>
          </div>
        {/if}
      </div>
    {/each}
  </div>
  <Checkers width="8rem" />
</section>
<Wrapper />

<style>
  #faq {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .faq h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .faq-list {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    margin-bottom: 3rem;
    gap: 2rem;
    width: 90%;
  }

  .faq-line {
    height: 1px;
    background-color: #0f5ad0;
    position: absolute;
    top: 0;
    left: 0;
    width: 2rem;
  }
  .faq-item {
    display: grid;
    position: relative;
    grid-template-columns: 1fr 2fr 2fr 1fr;
    border-top: 1px solid #a8c4f0;
    color: #0f5ad0;
  }
  .faq-no {
    padding-top: 0.5rem;
    grid-column: 1 / 2;
    align-self: top;
  }

  .faq-header {
    grid-column: 2 / 5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    user-select: none;
    padding: 0.5rem 0;
  }
  .faq-question {
    font-size: 1rem;
    line-height: 1.2;
    color: #0f5ad0;
    text-transform: uppercase;
    margin: 0;
  }
  .btn-toggle {
    margin-left: 1rem;
    border: #0f5ad0 solid 1px;
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
  }

  .toggle-inner {
    border-radius: 50%;
    border: #0f5ad0 solid 1px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .faq-answer-wrap {
    grid-column: 2 / 5;
  }
  .faq-answer {
    margin-top: 0.5rem;
    color: #0f5ad0;
    font-size: 0.825rem;
  }
</style>

<script>
  import { slide } from "svelte/transition";
  import { onMount } from "svelte";
  import Wrapper from "./Wrapper.svelte";
  import Checkers from "./Checkers.svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { fadeOnView } from "$lib/actions/fadeOnView";
  import Separator from "./Separator.svelte";

  let faqs = [
    {
      no: "001",
      question: "Where is the wedding taking place?",
      answer:
        "Both the ceremony and reception will be held at Gg. Panti no. 12, Lukluk, Badung, Bali, so no need to move around.",
    },
    {
      no: "002",
      question: "How do I get there? Is parking available?",
      answer:
        "Come by car or motorbike. Parking is available at the venue and along the roadside nearby.",
    },
    {
      no: "003",
      question: "What time should I come?",
      answer:
        "The ceremony runs 9:00 AM – 12:00 PM. You’re welcome to join at any point to witness the tradition, or simply come for the reception starting at 2:00 PM till finish.",
    },
    {
      no: "004",
      question: "What’s the dress code?",
      answer:
        "Anything casual works! A simple kebaya or traditional attire is also nice. Since it’s daytime, light and comfy outfits are best.",
    },
    {
      no: "005",
      question: "What food will be served?",
      answer: "A buffet of halal Indonesian dishes.",
    },
    {
      no: "006",
      question: "Can I bring someone with me?",
      answer:
        "Plus-ones are welcome if confirmed on your RSVP. We kindly ask that only those listed on the invitation attend, so we can prepare the right amount of food and drinks for everyone.",
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

  onMount(() => {
    gsap.from(".faq-item", {
      scrollTrigger: {
        trigger: ".faq-list",
        start: "top bottom",
        end: "bottom center",
        scrub: true,
      },
      opacity: 0,
      y: 32,
      stagger: 0.3,
      ease: "none",
    });
  });
</script>

<section id="faq" class="faq">
  <Separator />
  <span class="script">Frequently</span>
  <h2 use:fadeOnView>Asked Questions</h2>

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

<style>
  #faq {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    justify-content: center;
    position: relative;
    padding: 6rem 0;
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
    width: 50%;
  }

  .faq-line {
    height: 1px;
    background-color: var(--blue-primary);
    position: absolute;
    top: 0;
    left: 0;
    width: 2rem;
  }
  .faq-item {
    display: grid;
    position: relative;
    grid-template-columns: 1fr 2fr 2fr 1fr;
    border-top: 1px solid var(--border);
    color: var(--blue-primary);
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
    color: var(--blue-primary);
    text-transform: uppercase;
    margin: 0;
  }
  .btn-toggle {
    margin-left: 1rem;
    border: var(--blue-primary) solid 1px;
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
  }

  .toggle-inner {
    border-radius: 50%;
    border: var(--blue-primary) solid 1px;
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
    color: var(--blue-primary);
    font-size: 0.825rem;
  }

  @media (max-width: 768px) {
    .faq-list {
      width: 90%;
    }

    .faq-answer {
      max-width: 85%;
    }
  }
</style>

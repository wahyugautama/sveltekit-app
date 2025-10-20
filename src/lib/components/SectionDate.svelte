<script lang="ts">
  import { onMount } from "svelte";
  import { fadeOnView } from "$lib/actions/fadeOnView.js";
  import Button from "./Button.svelte";
  import HeadSVG from "./HeadSVG.svelte";
  // Target wedding date
  const weddingDate = new Date("2025-11-10T00:00:00");

  // State for countdown
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  // Update countdown every second
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate.getTime() - now;

    if (distance > 0) {
      days = Math.floor(distance / (1000 * 60 * 60 * 24));
      hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((distance % (1000 * 60)) / 1000);
    } else {
      days = hours = minutes = seconds = 0;
    }
  }

  onMount(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  });
</script>

<section id="date" class="section-date">
  <HeadSVG width="7.5rem" />

  <span class="script">Wedding Date</span>
  <h3 use:fadeOnView={{ split: "chars", stagger: 0.05 }}>Nov 10, 2025</h3>

  <p class="countdown">
    {days}d {hours}h {minutes}m {seconds}s
  </p>
  <div class="wrapper">
    <div class="schedule">
      <p class="time">06:00</p>
      <h4>Ceremony</h4>
    </div>
    <div class="schedule">
      <p class="time">12:00-20:00</p>
      <h4>Reception</h4>
    </div>
    <Button
      buttonText="save the date"
      link="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Wahyu+%26+Novi&dates=20251110/20251111&details=Join+us+on+our+special+day!&location=Lukluk,+Badung,+Bali"
    />
  </div>
</section>

<style scoped>
  .section-date {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    min-height: 100vh;
  }

  .wrapper {
    width: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    .wrapper {
      width: 90%;
    }
  }

  .schedule {
    display: flex;
    align-items: top;
    flex-grow: 1;
    width: 100%;
    justify-content: space-between;
    gap: 0.5rem;
    border-top: 1px solid #a8c4f0;
  }

  h4 {
    font-size: 1.25rem;
    text-transform: uppercase;
    margin-top: 0.25rem;
  }

  .schedule .time {
    padding: 0.5rem 0;
    border-top: 1px solid #0f5ad0;
  }
</style>

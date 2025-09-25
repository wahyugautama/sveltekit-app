<script lang="ts">
  import { onMount } from "svelte";
  import ArcText from "./Arc.svelte";

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

  // Google Calendar event link (all-day event on Nov 10, 2025)
  const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Wahyu+%26+Novi&dates=20251110/20251111&details=Join+us+on+our+special+day!&location=Lukluk,+Badung,+Bali`;
</script>

<div class="section-date">
  <ArcText text="WEDDING DATE" />
  <h3>November 10, 2025</h3>

  <span class="countdown">
    {days}d {hours}h {minutes}m {seconds}s
  </span>

  <button on:click={() => window.open(gcalUrl, "_blank")}>
    Add to Google Calendar
  </button>
</div>

<style>
  .section-date {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    min-height: 100vh;
  }
  .countdown {
    font-family: monospace;
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }
  button {
    background: #d6336c;
    color: white;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
  }
  button:hover {
    background: #b82b5c;
  }
</style>

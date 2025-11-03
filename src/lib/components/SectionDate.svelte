<script lang="ts">
  import { onMount } from "svelte";
  import Button from "./Button.svelte";

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
  <img src="/images/gate-png.png" alt="" class="gate" />
  <div style="text-align: center;">
    <span class="script">Wedding date</span>
    <h2 id="big">Nov 10, 2025</h2>
  </div>

  <p class="countdown">
    {days}d: {hours}h: {minutes}m: {seconds}s
  </p>
  <div class="wrapper">
    <div class="schedule">
      <p class="time">06:00 WITA</p>
      <h4>Ceremony</h4>
    </div>
    <div class="schedule">
      <p class="time">14:00 wita - finish</p>
      <h4>Reception</h4>
    </div>
  </div>
  <Button
    buttonText="save the date"
    link="https://calendar.google.com/calendar/u/0/r/eventedit?text=Wedding+of+Wahyu+%26+Novi&dates=20251110/20251111&details=Join+us+on+our+special+day!&location=JOJO%27S+HOME%2C+Gg.+Panti+No.12%2C+Lukluk%2C+Kec.+Mengwi%2C+Kabupaten+Badung%2C+Bali+80351%2C+Indonesia"
  />
</section>

<style scoped>
  #big {
    font-size: 6rem;
  }
  .section-date {
    margin-top: 20vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
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

  .gate {
    position: absolute;
    bottom: 0;
    width: 65%;
    height: auto;
    pointer-events: none;
    user-select: none;
  }

  @media (max-width: 768px) {
    #big {
      font-size: 3.5rem;
    }
    #date {
      overflow: hidden;
    }
    .gate {
      width: 130%;
      top: 0;
    }
    .section-date {
      margin-top: 0;
      padding-top: 4rem;
    }
  }
</style>

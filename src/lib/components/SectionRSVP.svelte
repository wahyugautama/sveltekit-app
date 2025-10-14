<script lang="ts">
  import { enhance } from "$app/forms";
  import Wrapper from "$lib/components/Wrapper.svelte";

  let status: "idle" | "sending" | "success" | "error" = "idle";
  let errors: Record<string, string> = {};

  // local reactive flags for UI
  let attendingLocal: "yes" | "no" = "yes";
  let plusOneLocal: "yes" | "no" = "no";

  function enhancer() {
    status = "sending";
    return async ({ result, update }: any) => {
      if (result.type === "success") {
        status = "success";
        errors = {};
      } else if (result.type === "failure") {
        status = "error";
        errors = result.data?.errors ?? {};
      } else {
        status = result.type === "redirect" ? "success" : "error";
      }
      await update({ reset: result.type === "success" });
      if (result.type === "success") {
        attendingLocal = "yes";
        plusOneLocal = "no";
      }
    };
  }

  function onSelectAttending(value: "yes" | "no") {
    attendingLocal = value;
    if (value === "no") plusOneLocal = "no";
  }

  function onSelectPlusOne(value: "yes" | "no") {
    plusOneLocal = value;
  }
</script>

<section id="rsvp">
  <Wrapper paddingY="large">
    <span class="script">Celebrate</span>
    <h3>With us</h3>

    <form method="POST" use:enhance={enhancer} class="rsvp-form">
      <!-- Name -->
      <label class="field">
        <span class="label">Name *</span>
        <input name="name" type="text" required placeholder="Your name" />
        {#if errors.name}
          <p class="error">{errors.name}</p>
        {/if}
      </label>

      <!-- Attendance -->
      <fieldset class="pill-group">
        <legend>Will you be attending? *</legend>

        <label class="pill">
          <input
            type="radio"
            name="attending"
            value="yes"
            required
            checked
            on:change={() => onSelectAttending("yes")}
          />
          <span>Yes</span>
        </label>

        <label class="pill">
          <input
            type="radio"
            name="attending"
            value="no"
            on:change={() => onSelectAttending("no")}
          />
          <span>No</span>
        </label>

        {#if errors.attending}
          <p class="error">{errors.attending}</p>
        {/if}
      </fieldset>

      <!-- Plus one -->
      <fieldset class="pill-group">
        <legend>Will you be bringing a plus-one?</legend>

        <label class="pill">
          <input
            type="radio"
            name="plusOne"
            value="yes"
            on:change={() => onSelectPlusOne("yes")}
          />
          <span>Yes</span>
        </label>

        <label class="pill">
          <input
            type="radio"
            name="plusOne"
            value="no"
            checked
            on:change={() => onSelectPlusOne("no")}
          />
          <span>No</span>
        </label>

        {#if errors.plusOne}
          <p class="error">{errors.plusOne}</p>
        {/if}
      </fieldset>

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Submitting…" : "Submit RSVP"}
      </button>
    </form>

    {#if status === "success"}
      <p class="success">
        ✅ Thanks for your RSVP! We look forward to seeing you.
      </p>
    {:else if status === "error"}
      <p class="error">❌ Oops, something went wrong.</p>
    {/if}
  </Wrapper>
</section>

<style>
  #rsvp {
    position: relative;
    margin-bottom: 70vh;
    z-index: 1;
  }
  .rsvp-form {
    display: grid;
    gap: 1.25rem;
    max-width: 560px;
    margin-top: 1.5rem;
  }

  .field {
    display: grid;
    gap: 0.5rem;
  }
  .label {
    font-weight: 600;
  }

  input[type="text"] {
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 1px solid #cfcfcf;
    border-radius: 10px;
    font-family: inherit;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;
    background: #fff;
  }
  input[type="text"]:focus {
    border-color: #146ef5;
    outline: none;
    box-shadow: 0 0 0 3px rgba(20, 110, 245, 0.12);
  }

  fieldset {
    border: none;
    padding: 0;
    margin: 0;
  }
  legend {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .pill-group {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    align-items: center;
  }

  .pill input[type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    pointer-events: none;
  }

  .pill {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
  }

  .pill span {
    display: inline-block;
    padding: 0.5rem 1.1rem;
    border: 2px solid #146ef5;
    color: #146ef5;
    background: #fff;
    border-radius: 9999px;
    font-weight: 600;
    line-height: 1;
    transition:
      background 0.2s ease,
      color 0.2s ease,
      box-shadow 0.2s ease,
      border-color 0.2s ease;
  }

  .pill:hover span {
    background: #e8f0ff;
  }

  .pill input[type="radio"]:checked + span {
    background: #146ef5;
    color: #fff;
    box-shadow: 0 0 0 3px rgba(20, 110, 245, 0.18);
  }

  button {
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
    background-color: #146ef5;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
    transition:
      background-color 0.2s ease,
      transform 0.02s ease-in;
  }
  button:hover:enabled {
    background-color: #0f5ad0;
  }
  button:disabled {
    background: #98b7fb;
    cursor: not-allowed;
  }

  .error {
    color: #c00;
    font-size: 0.9rem;
  }
  .success {
    color: #0a7c2f;
    font-size: 0.95rem;
    margin-top: 1rem;
  }
</style>

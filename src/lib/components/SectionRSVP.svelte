<script lang="ts">
  import { enhance } from "$app/forms";
  import Wrapper from "$lib/components/Wrapper.svelte";

  let status: "idle" | "sending" | "success" | "error" = "idle";
  let errors: Record<string, string> = {};

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
        // handles 'error' or 'redirect' generically
        status = result.type === "redirect" ? "success" : "error";
      }
      await update({ reset: result.type === "success" });
    };
  }
</script>

<Wrapper paddingY="medium">
  <h1>RSVP</h1>
  <p>Please let us know if you’ll be joining us!</p>

  <form method="POST" use:enhance={enhancer}>
    <!-- Name -->
    <label>
      Name *
      <input name="name" type="text" required placeholder="Your name" />
      {#if errors.name}
        <p class="error">{errors.name}</p>
      {/if}
    </label>

    <!-- Attendance -->
    <fieldset>
      <legend>Will you be attending? *</legend>
      <label>
        <input type="radio" name="attending" value="yes" required />
        Yes
      </label>
      <label>
        <input type="radio" name="attending" value="no" />
        No
      </label>
      {#if errors.attending}
        <p class="error">{errors.attending}</p>
      {/if}
    </fieldset>

    <!-- Plus one -->
    <fieldset>
      <legend>Will you be bringing a plus-one?</legend>
      <label>
        <input type="radio" name="plusOne" value="yes" />
        Yes
      </label>
      <label>
        <input type="radio" name="plusOne" value="no" />
        No
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

<style>
  form {
    display: grid;
    gap: 1.5rem;
    max-width: 500px;
    margin-top: 2rem;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    gap: 0.5rem;
  }

  input[type="text"] {
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: inherit;
    transition: border-color 0.2s ease;
  }

  input[type="text"]:focus {
    border-color: #0070f3;
    outline: none;
  }

  fieldset {
    border: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  legend {
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  input[type="radio"] {
    margin-right: 0.5rem;
  }

  button {
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.2s ease;
  }

  button:disabled {
    background-color: #888;
    cursor: not-allowed;
  }

  button:hover:enabled {
    background-color: #005bd1;
  }

  .error {
    color: #c00;
    font-size: 0.875rem;
  }

  .success {
    color: #080;
    font-size: 0.95rem;
    margin-top: 1rem;
  }
</style>

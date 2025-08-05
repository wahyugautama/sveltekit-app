<script lang="ts">
  import { enhance } from "$app/forms";
  import Wrapper from "$lib/components/Wrapper.svelte";

  let status: "idle" | "sending" | "success" | "error" = "idle";
  let errors: Record<string, string> = {};

  function enhancer(event: any) {
    const { form, data, action, cancel, submitter } = event;
    status = "sending";

    return async ({ result, update }: any) => {
      if (result.type === "success") {
        status = "success";
      } else {
        status = "error";
        errors = result?.data?.errors ?? {};
      }
      await update({ reset: true });
    };
  }
</script>

<Wrapper paddingY="medium">
  <h1>Contact Us</h1>
  <p>Feel free to reach out with any questions or feedback!</p>

  <form method="POST" use:enhance={enhancer}>
    <label>
      Name
      <input name="name" type="text" placeholder="Your name" />
    </label>

    <label>
      Email *
      <input name="email" type="email" required placeholder="you@example.com" />
      {#if errors.email}
        <p class="error">{errors.email}</p>
      {/if}
    </label>

    <label>
      Message
      <textarea name="message" rows="4" placeholder="Your message…"></textarea>
    </label>

    <button type="submit" disabled={status === "sending"}>
      {status === "sending" ? "Sending…" : "Send"}
    </button>
  </form>

  {#if status === "success"}
    <p class="success">✅ Thanks! Check your inbox.</p>
  {:else if status === "error"}
    <p class="error">❌ Oops, something went wrong.</p>
  {/if}
</Wrapper>

<style>
  form {
    display: grid;
    gap: 1rem;
    max-width: 400px;
    margin-top: 2rem;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    gap: 0.5rem;
  }

  input,
  textarea {
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: inherit;
    transition: border-color 0.2s ease;
  }

  input:focus,
  textarea:focus {
    border-color: #0070f3;
    outline: none;
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

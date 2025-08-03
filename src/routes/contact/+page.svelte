<script lang="ts">
  import { enhance } from '$app/forms';

  let status: 'idle'|'sending'|'success'|'error' = 'idle';
  let errors: Record<string,string> = {};

  // Option C: untyped enhancer
  function enhancer(event: any) {
    const { form, data, action, cancel, submitter } = event;
    status = 'sending';

    return async ({ result, update }: any) => {
      if (result.type === 'success') {
        status = 'success';
      } else {
        status = 'error';
        errors = result?.data?.errors ?? {};
      }
      await update({ reset: true });
    };
  }
</script>

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

  <button type="submit" disabled={status === 'sending'}>
    {status === 'sending' ? 'Sending…' : 'Send'}
  </button>
</form>

{#if status === 'success'}
  <p class="success">✅ Thanks! Check your inbox.</p>
{:else if status === 'error'}
  <p class="error">❌ Oops, something went wrong.</p>
{/if}

<style>
  form { display: grid; gap: 1rem; max-width: 400px; }
  .error { color: #c00; font-size: 0.9rem; }
  .success { color: #080; }
</style>

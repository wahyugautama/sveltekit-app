<script lang="ts">
  // Footer props
  export let companyName: string = 'Sandikala Creative Studio';
  export let address: string = 'Jl. Example No. 123, Bali, Indonesia';
  export let email: string = 'hello@sandikalastudio.com';
  export let links: { name: string; href: string }[] = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];
  export let socialLinks: { name: string; href: string }[] = [
    { name: 'Twitter', href: 'https://twitter.com/username' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/username' },
    { name: 'Instagram', href: 'https://instagram.com/username' },
  ];

  // Newsletter state
  export let resendAudienceId: string = import.meta.env.VITE_RESEND_AUDIENCE_ID;
  let emailInput: string = '';
  let status: 'idle' | 'success' | 'error' = 'idle';
  let errorMessage: string = '';

  /**
   * Call SvelteKit endpoint to subscribe via Resend Audience API
   */
  async function subscribe() {
    status = 'idle';
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: emailInput,
          audienceId: resendAudienceId
        })
      });
      if (res.ok) {
        status = 'success';
        emailInput = '';
      } else {
        const data = await res.json();
        throw new Error(data.message || 'Subscription failed');
      }
    } catch (err) {
      status = 'error';
      errorMessage = err.message;
    }
  }

  const currentYear: number = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="footer-container">
    <!-- Company Info -->
    <div class="footer-section">
      <h2>{companyName}</h2>
      <address>{address}</address>
      <p><a href={`mailto:${email}`}>{email}</a></p>
    </div>

    <!-- Navigation Links -->
    <div class="footer-section footer-links">
      <h2>Links</h2>
      <ul>
        {#each links as link}
          <li><a href={link.href}>{link.name}</a></li>
        {/each}
      </ul>
    </div>

    <!-- Social Media -->
    <div class="footer-section footer-social">
      <h2>Follow Us</h2>
      {#each socialLinks as social}
        <a href={social.href} target="_blank" rel="noopener noreferrer">{social.name}</a>
      {/each}
    </div>

    <!-- Newsletter Signup -->
    <div class="footer-section footer-newsletter">
      <h2>Newsletter</h2>
      <form on:submit|preventDefault={subscribe}>
        <label for="newsletter-email" class="visually-hidden">Email address</label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          placeholder="Enter your email"
          bind:value={emailInput}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {#if status === 'success'}
        <p class="success">Thank you for subscribing!</p>
      {:else if status === 'error'}
        <p class="error">{errorMessage}</p>
      {/if}
    </div>
  </div>

  <!-- Bottom Copyright -->
  <div class="footer-bottom">
    &copy; {currentYear} {companyName}. All rights reserved.
  </div>
</footer>

<style>
  .footer {
    background-color: #222;
    color: #ccc;
    padding: 2rem 0;
    font-family: Arial, sans-serif;
  }
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .footer-section {
    flex: 1;
    min-width: 200px;
    margin: 0.5rem 1rem;
  }
  .footer-section h2 {
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  .footer-section address,
  .footer-section p {
    margin: 0.5rem 0;
    font-style: normal;
  }
  .footer-section a {
    color: #4fa;
    text-decoration: none;
  }
  .footer-section a:hover {
    text-decoration: underline;
  }
  .footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .footer-links li {
    margin-bottom: 0.5rem;
  }
  .footer-social a {
    margin-right: 1rem;
  }

  /* Newsletter */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  .footer-newsletter form {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
  .footer-newsletter input[type="email"] {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #555;
    border-radius: 4px;
    background: #333;
    color: #fff;
  }
  .footer-newsletter button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background: #4fa;
    color: #222;
    cursor: pointer;
  }
  .footer-newsletter button:hover {
    background: #37a;
  }
  .footer-newsletter .success {
    color: #6c6;
    margin-top: 0.5rem;
  }
  .footer-newsletter .error {
    color: #c66;
    margin-top: 0.5rem;
  }

  .footer-bottom {
    border-top: 1px solid #444;
    margin-top: 2rem;
    padding-top: 1rem;
    text-align: center;
    font-size: 0.9rem;
    color: #888;
  }
</style>

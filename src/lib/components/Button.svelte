<script>
  export let buttonText = 'Click me';
  export let link = '#';
</script>

<a href={link} class="btn">
  {buttonText}
</a>

<style>
  .btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #111;
    color: white;
    border-radius: 6px;
    font-weight: 500;
    text-decoration: none;
    transition: background 0.2s ease;
  }

  .btn:hover {
    background-color: #333;
  }
</style>

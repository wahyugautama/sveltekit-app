<script>
  export let buttonText = "Click me";
  export let link = "#";
</script>

<div class="button-wrapper">
  <a href={link} class="btn" target="_blank">
    {buttonText}
  </a>
</div>

<style>
  .button-wrapper {
    border: 1px solid #0070f3;
    width: fit-content;
  }
  .btn {
    display: inline-block;
    padding: 1rem 2rem;
    border: 1px solid #0070f3;
    color: #0070f3;
    text-transform: uppercase;
    border-radius: 10rem;
    font-weight: 500;
    text-decoration: none;
    transition: background 0.2s ease;
  }

  .btn:hover {
    background-color: #0070f3;
    color: white;
  }
</style>

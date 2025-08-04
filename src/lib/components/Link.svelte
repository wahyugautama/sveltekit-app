<script>
  export let text = "Click me";
  export let href = "#";

  let original = text;
  let scrambled = "";
  let interval;

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  function scrambleText() {
    let iterations = 0;
    clearInterval(interval);

    interval = setInterval(() => {
      scrambled = original
        .split("")
        .map((char, i) => {
          if (i < iterations) return original[i];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      if (iterations >= original.length) {
        clearInterval(interval);
      }
      iterations += 1 / 3;
    }, 30);
  }

  function resetText() {
    clearInterval(interval);
    scrambled = original;
  }
</script>

<a {href} on:mouseenter={scrambleText} on:mouseleave={resetText} class="link">
  {scrambled || text}
</a>

<style>
  .link {
    text-decoration: none;
    color: inherit;
    position: relative;
    cursor: pointer;
    transition: color 0.2s;
  }

  .link:hover {
    color: #0070f3;
  }
</style>

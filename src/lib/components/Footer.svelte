<script lang="ts">
  const currentYear: number = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="footer-bottom">
    <span>*</span>
    <span>&copy; {currentYear}</span>
    <span>
      Site by
      <a
        href="https://www.sandikalastudio.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sandikala Studio
      </a>
    </span>
  </div>
</footer>

<style>
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-image: url(https://images.unsplash.com/photo-1584278773680-8d940a213dcf?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  }
  .footer-bottom {
    min-height: 70vh;
    display: flex;
    text-transform: uppercase;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;
    letter-spacing: 0.05em;
  }
</style>

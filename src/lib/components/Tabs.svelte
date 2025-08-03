<script>
  export let tabs = []; // [{ label: 'Tab 1', content: 'Content 1' }, ...]
  let activeIndex = 0;
</script>

<div class="tabs">
  <div class="tab-buttons">
    {#each tabs as tab, i}
      <button
        on:click={() => (activeIndex = i)}
        class:selected={i === activeIndex}
      >
        {tab.label}
      </button>
    {/each}
  </div>

  <div class="tab-content">
    {@html tabs[activeIndex].content}
  </div>
</div>

<style>
  .tab-buttons {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  button {
    background: none;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-weight: bold;
    border-bottom: 2px solid transparent;
  }

  button.selected {
    border-color: #333;
  }

  .tab-content {
    padding: 1rem;
    border: 1px solid #ddd;
  }
</style>

<script>
  export let data;
</script>

{#each data.components as component}
  <svelte:component this={component} />
{/each}

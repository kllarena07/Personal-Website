<script lang="ts">
  import { Skills } from "$lib/skills";
</script>

<main>
  <h1>Skills 🛠️</h1>
  <ul>
    {#each Skills as {name, src} }
      <img src={src} alt="{name} is one of Kieran Llarena's skills" />
    {/each}
  </ul>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    padding: 0 1rem 2rem;
    align-items: center;
  }
  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }
  ul {
    display: flex;
    max-width: 416px;
    gap: .25rem;
    flex-wrap: wrap;
    padding: 0;
    list-style-type: none;
  }
  img {
    width: 5rem;
    height: 5rem;
  }
</style>
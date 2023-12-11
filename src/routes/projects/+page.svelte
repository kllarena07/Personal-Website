<script lang="ts">
  import Project from "$lib/general/Project.svelte";
  import { Projects } from "$lib/projects";
</script>

<main>
  <h1>Projects ⚡</h1>
  <ul>
    {#each Projects as { name, thumbnail, link, desc, tech }}
      <li>
        <Project {name} {link} {thumbnail} {desc} {tech} />
      </li>
    {/each}
  </ul>
</main>

<style>
  main {
    padding: 0 2rem;
  }
  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }
  ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2.5rem;
    padding: 0;
    list-style-type: none;
  }
</style>
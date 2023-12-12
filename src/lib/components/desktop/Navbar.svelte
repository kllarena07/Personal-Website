<script lang="ts">
  import { page } from "$app/stores";
</script>

<header>
  <nav>
    <a href='/' class={$page.route.id == '/' ? 'underlined' : ''}>Home 🏠</a>
    <a href='/projects' class={$page.route.id == '/projects' ? 'underlined' : ''}>Projects ⚡</a>
    <a href='/skills' class={$page.route.id == '/skills' ? 'underlined' : ''}>Skills 🛠️</a>
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem .75rem;
  }
  nav {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  a {
    text-decoration: none;
  }
  .underlined {
    text-decoration: underline;
  }
</style>
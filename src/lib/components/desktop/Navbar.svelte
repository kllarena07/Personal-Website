<script lang="ts">
  import { page } from "$app/stores";
</script>

<header>
  <nav>
    <nav>
      <a href='/' class={$page.route.id == '/' ? 'underlined' : ''} on:click={toggleNavbar}>Home 🏠</a>
      <a href='/projects' class={$page.route.id == '/projects' ? 'underlined' : ''} on:click={toggleNavbar}>Projects ⚡</a>
      <a href='/skills' class={$page.route.id == '/skills' ? 'underlined' : ''} on:click={toggleNavbar}>Skills 🛠️</a>
    </nav>
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
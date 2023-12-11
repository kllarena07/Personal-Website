<script lang="ts">
  import { page } from "$app/stores";
</script>

<section>
  <nav>
    <a href='/' class={$page.route.id == '/' ? 'underlined' : ''}>Home 🏠</a>
    <a href='/projects' class={$page.route.id == '/projects' ? 'underlined' : ''}>Projects ⚡</a>
    <a href='/skills' class={$page.route.id == '/skills' ? 'underlined' : ''}>Skills 🛠️</a>
  </nav>
</section>

<style>
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    height: calc(100svh - 70.5px);
  }
  a {
    text-decoration: none;
  }
  .underlined {
    text-decoration: underline;
  }
</style>
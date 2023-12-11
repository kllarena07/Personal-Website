<script lang="ts">
  import { page } from "$app/stores";
	import { mobileDropdownEnabled } from "$lib/state";

  const toggleNavbar = () => {
    mobileDropdownEnabled.update(currVal => currVal = !currVal)
  }
</script>

<section>
  <nav>
    <a href='/' class={$page.route.id == '/' ? 'underlined' : ''} on:click={toggleNavbar}>Home 🏠</a>
    <a href='/projects' class={$page.route.id == '/projects' ? 'underlined' : ''} on:click={toggleNavbar}>Projects ⚡</a>
    <a href='/skills' class={$page.route.id == '/skills' ? 'underlined' : ''} on:click={toggleNavbar}>Skills 🛠️</a>
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
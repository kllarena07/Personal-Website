<script lang="ts">
	import NavDropdown from "$lib/mobile/NavDropdown.svelte";
  import MobileNavbar from "$lib/mobile/Navbar.svelte";

  let mobileNavbarIsToggled: boolean
</script>

<MobileNavbar bind:isToggled={mobileNavbarIsToggled}  />
{#if !mobileNavbarIsToggled}
  <slot />
{:else}
  <NavDropdown />
{/if}
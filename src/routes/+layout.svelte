<script lang="ts">
	import NavDropdown from "$lib/mobile/NavDropdown.svelte";
  import MobileNavbar from "$lib/mobile/Navbar.svelte";
	import { mobileDropdownEnabled } from "$lib/state";

  let mNavbarIsToggled: boolean
  mobileDropdownEnabled.subscribe(val => {
    mNavbarIsToggled = val
  })
</script>

<MobileNavbar />
{#if !mNavbarIsToggled}
  <slot />
{:else}
  <NavDropdown />
{/if}
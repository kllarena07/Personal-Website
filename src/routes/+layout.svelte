<script lang="ts">
	import NavDropdown from "$lib/components/mobile/NavDropdown.svelte";
	import Navbar from "$lib/components/desktop/Navbar.svelte";
  import MobileNavbar from "$lib/components/mobile/Navbar.svelte";
	import { mobileDropdownEnabled } from "$lib/state";

  let mNavbarIsToggled: boolean
  mobileDropdownEnabled.subscribe(val => {
    mNavbarIsToggled = val
  })
</script>

<div id="mobile">
  <MobileNavbar />
  {#if !mNavbarIsToggled}
    <slot />
  {:else}
    <NavDropdown />
  {/if}
</div>
<div id="normal">
  <Navbar />
  <slot />
</div>

<style>
  @media screen and (max-width: 768px) {
    #normal {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    #mobile {
      display: none;
    }
  }
</style>
<script lang="ts">
	import { mobileDropdownEnabled } from "$lib/state";

  let isToggled: boolean
  mobileDropdownEnabled.subscribe(val => {
    isToggled = val
  })

  const toggleNavbar = () => {
    mobileDropdownEnabled.update(currVal => currVal = !currVal)
  }
</script>

<header>
  <nav>
    <button on:click={toggleNavbar}>
      {#if !isToggled}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      {/if}
    </button>
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem .75rem;
  }
  button {
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
</style>
<script lang="ts">
  import Myself from '$lib/assets/Group 6.png'
  import LinkedIn from '$lib/assets/linkin.svg'
  import GitHub from '$lib/assets/github.svg'
  import Hashnode from '$lib/assets/hashnode.svg'
</script>

<main>
  <section id="grid">
    <section>
      <h1>Hi! I'm <span>Kieran Llarena</span></h1>
      <h2>A 19-year-old developer from Michigan</h2>
    </section>
    <img src={Myself} alt="Portrait of Kieran Llarena" />
    <a id="explore" href='/projects'>Explore</a>
    <section id="flex">
      <a href='https://www.linkedin.com/in/kllarena07/' target="_blank" rel="noreferrer">
        <img src={LinkedIn} alt="LinkedIn icon that when clicked leads you to Kieran Llarena's LinkedIn" />
      </a>
      <a href='https://github.com/kllarena07/' target="_blank" rel="noreferrer">
        <img src={GitHub} alt="GitHub icon that when clicked leads you to Kieran Llarena's GitHub" />
      </a>
      <a href='https://bytesfromkrayon.hashnode.dev/' target="_blank" rel="noreferrer">
        <img src={Hashnode} alt="The Hashnode icon that when clicked leads you to Kieran Llarena's Hashnode" />
      </a>
    </section>
  </section>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100svh - 70.5px);
  }
  #grid {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    gap: 1rem;
  }
  #flex {
    display: flex;
    gap: 1rem;
  }
  #explore {
    padding: .7rem 3rem;
    border-radius: 3rem;
    text-decoration: none;
    background-color: #AD00FF;
  }
  h1, h2 {
    text-align: center;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1rem;
  }
  span {
    color: #AD00FF;
  }
</style>
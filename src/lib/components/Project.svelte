<script lang="ts">
  export let name: string
  export let thumbnail: string
  export let desc: string
  export let link: string
  export let tech: string[]
  export let orientation: string
</script>

<a href={link} target="_blank" rel="noreferrer">
  <div class="thumb-wrapper">
    <img src={thumbnail} alt="Thumbnail for project: {name}" width="600" height="120" class={orientation} />
    <div class="techstack">
      {#each tech as _, i}
        <img src={tech[i]} alt="{tech[i]} icon. It was used in this project: {name}" />
      {/each}
    </div>
  </div>
  <section class="main">
    <h3>{name}</h3>
    <p>{desc}</p>
  </section>
</a>

<style>
  a {
    display: block;
    max-width: 600px;
    border-radius: 1rem;
    overflow: hidden;
    text-decoration: none;
  }
  p {
    font-size: .9rem;
  }
  .main {
    padding: .5rem 1rem;
    background-color: #AD00FF;
  }
  .thumb-wrapper {
    position: relative;
  }
  img {
    object-fit: cover;
  }
  .top {
    object-position: top;
  }
  .bottom {
    object-position: bottom;
  }
  .center {
    object-position: center;
  }
  .left {
    object-position: left;
  }
  .right {
    object-position: right;
  }
  .techstack {
    position: absolute;
    display: flex;
    right: 0;
    bottom: 0;
    padding: .25rem;
    gap: .5rem;
  }
  .techstack img {
    width: 1.5rem;
    height: 1.5rem;
  }
</style>
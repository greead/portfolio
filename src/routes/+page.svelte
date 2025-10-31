<script lang="ts">
    import About from "$lib/about.svelte";
    import BgCanvas from "$lib/bg_canvas.svelte";
    import Navigation from "$lib/navigation.svelte";
    import Portfolio from "$lib/portfolio.svelte";
    import TopMatter from "$lib/top_matter.svelte";

    let sfx_toggle = $state(true);

</script>

{#if sfx_toggle}
    <BgCanvas />
{/if}
<main>
    <TopMatter bind:sfx={sfx_toggle}/>
    <Navigation active={0} />
    <Portfolio />
    <About />
</main>

<style>
    main {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;
    }
</style>

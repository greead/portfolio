<script>
    import About from "$lib/about.svelte";
import Navigation from "$lib/navigation.svelte";

</script>
<div class="about">
    <Navigation active={1}/>
    <About />
</div>

<style>
    .about {
        display: flex;
        flex-direction: column;
        width: 55%;
        margin: 0 auto;
    }
</style>
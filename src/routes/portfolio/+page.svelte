<script>
    import Navigation from "$lib/navigation.svelte";
    import Portfolio from "$lib/portfolio.svelte";

</script>

<div class="portfolio">
    <div class="nav"> 
        <Navigation active={3}/>
    </div>
    <Portfolio />
</div>

<style>
    .portfolio {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }

    .portfolio .nav {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 55%;
    }
    
</style>


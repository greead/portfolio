<script lang="ts">
    import Landing from "$lib/landing.svelte";
    import Navigation from "$lib/navigation.svelte";
</script>

<div class="landing">
    <Landing/>
    <Navigation active={0}/>
</div>

<style>
    .landing {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 55%;
        min-height: 100vh;
        margin: 0 auto;
    }
</style>
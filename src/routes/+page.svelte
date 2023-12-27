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
        text-align: center;
        max-width: 1280px;
        padding: 2rem;
    }
</style>
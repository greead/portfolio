<script>
    import Navigation from "$lib/navigation.svelte";
    import Timeline from "$lib/timeline.svelte";
</script>

<div class="timeline">
    <Navigation active={2}/>
    <Timeline />
</div>

<style>
    .timeline{
        display: flex;
        flex-direction: column;
        width: 55%;
        margin: 0 auto;
    }
</style>

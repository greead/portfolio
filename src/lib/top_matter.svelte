<script>
    // TODO
    // @ts-ignore
    import Portrait from "./portrait.svelte";
</script>

<section id="top">
    <Portrait image={"me.jpg"} orient={"vertical"} offset={0} />
    <h1>Alekzander <span style="color: var(--color_font_secondary)">Green</span></h1>
    <h2>Aspiring Software Engineer</h2>
</section>

<style>
    section {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;
        min-width: 55vw;
    }
    h1 {
        font-family: "NovaCut-Regular";
        font-size: 5vw;
        font-weight: bolder;
        text-align: center;
        text-wrap: nowrap;
        margin-bottom: 10px;
    }
    h2 {
        font-family: "NovaCut-Regular";
        font-size: 3vw;
        text-align: center;
        text-wrap: nowrap;
        margin-bottom: 40px;
    }
</style>

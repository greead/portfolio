<script>
    // TODO
    // @ts-ignore
    import Portrait from "./portrait.svelte";
</script>

<section class="switches">
    <label class="switch">
        <input type="checkbox" checked />
        <span class="toggle"></span>
        <img src="/sfx_blk.svg" alt="SFX toggle" />
    </label>
    <label class="switch">
        <input type="checkbox" checked />
        <span class="toggle"></span>
        <img src="/dark_mode.svg" alt="DarkMode toggle" />
    </label>
</section>
<section class="top-matter">
    <Portrait image={"me.jpg"} orient={"vertical"} offset={0} />
    <h1>
        Alekzander <span style="color: var(--color_font_secondary)">Green</span>
    </h1>
    <h2>Aspiring Techno-Wizard</h2>
</section>

<style>
    section.switches {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        width: 100%;

        .switch {
            position: relative;
            width: 8vmin;
            height: 8vmin;
            border-radius: 50%;
            background-color: var(--color_primary);
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
            border: 3px solid var(--color_font_secondary);
            margin: 1vw 1vh;
        }

        input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .toggle {
            position: absolute;
            top: 0;
            left: 0;
            cursor: pointer;
            width: 100%;
            height: 100%;
            border-radius: 100%;
            background-color: var(--color_secondary);
        }

        input:checked + .toggle {
            background-color: var(--color_font_secondary);
        }

        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            z-index: 1;
        }
    }

    section.top-matter {
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

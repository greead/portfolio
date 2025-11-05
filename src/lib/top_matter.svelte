<script>
    import { onMount } from "svelte";
    import Portrait from "./portrait.svelte";
    import { browser } from "$app/environment";
    let { sfx = $bindable() } = $props();

    let dark_mode = $state(true);
    let show_sfx_toggle = $state(true);

    export function toggleTheme() {
        if (browser) {
            localStorage.setItem("theme", !dark_mode ? "dark" : "light");
            document.documentElement.classList.toggle("light", dark_mode);
        }
    }

    export function toggleSFX() {
        if (browser) {
            localStorage.setItem("sfx", !sfx ? "on" : "off");
        }
    }

    onMount(() => {
        if (browser) {
            const saved_theme = localStorage.getItem("theme");
            if (saved_theme) {
                dark_mode = saved_theme == "dark";
            } else {
                dark_mode = window.matchMedia(
                    "(prefers-color-scheme: dark)",
                ).matches;
                console.log(dark_mode);
            }
            document.documentElement.classList.toggle("light", !dark_mode);

            const saved_sfx = localStorage.getItem("sfx");
            if (saved_sfx && saved_sfx == "disabled") {
                sfx = false;
                show_sfx_toggle = false;
            } else if (saved_sfx) {
                sfx = saved_sfx == "on";
            } else {
                sfx = true;
            }
        }
    });
</script>

<section class="switches">
    {#if show_sfx_toggle}
        <label class="switch" id="sfx-toggle">
            <input type="checkbox" bind:checked={sfx} onclick={toggleSFX} />
            <span class="toggle"></span>
            <img src="/sfx_blk.svg" alt="SFX toggle" />
        </label>
    {/if}
    <label class="switch">
        <input type="checkbox" bind:checked={dark_mode} onclick={toggleTheme} />
        <span class="toggle"></span>
        <img src="/dark_mode.svg" alt="Dark Mode toggle" />
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
            width: 34px;
            height: 34px;
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

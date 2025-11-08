<script>
    import { onMount } from "svelte";
    import Portrait from "./portrait.svelte";
    import { browser } from "$app/environment";
    import Switch from "./switch.svelte";
    let { sfx = $bindable() } = $props();
    
    // TODO: Add an effect selector to switch between different bg SFX
    // TODO: Swap between a list of flairs underneath the name
    // TODO: Implement a typewriter effect on the flairs as they switch out

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

<span id="home"></span>
<div class="switches">
    {#if show_sfx_toggle}
        <Switch
            bind:switch_state={sfx}
            onclick={toggleSFX}
            image="/sfx_blk.svg"
            alt="SFX"
        />
    {/if}
    <Switch
        bind:switch_state={dark_mode}
        onclick={toggleTheme}
        image="/dark_mode.svg"
        alt="Dark Mode"
    />
</div>
<header class="top-matter">
    <Portrait image={"me.jpg"} orient={"vertical"} offset={0} />
    <h1>
        Alekzander <span style="color: var(--color_font_secondary)">Green</span>
    </h1>
    <h2>Aspiring Techno-Wizard</h2>
</header>

<style>
    .switches {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        width: 100%;
    }

    .top-matter {
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

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
    <Portrait image={"/me.jpg"} orient={"vertical"} offset={0} />
    <div class="slight-bg">
        <h1>
            Alekzander <span class="green">Green</span>
        </h1>
        <h2>Aspiring Techno-Wizard</h2>
    </div>
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
        font-size: clamp(2rem, 5vw, 4rem);
        font-weight: bolder;
        text-align: center;
        margin-top: 0;
    }

    h2 {
        font-family: "NovaCut-Regular";
        font-size: clamp(1.5rem, 3vw, 2rem);
        text-align: center;
        margin-bottom: 40px;
    }

    .green {
        color: var(--color_font_secondary);
    }

    .slight-bg {
        background-color: color-mix(in srgb, var(--color_bg), transparent 20%);
        box-shadow: 0 0 20px 20px color-mix(in srgb, var(--color_bg), transparent 20%);
        border-radius: 10px;
        width: calc(76vw - 40px);
        margin-top: 25px;
        height: min-content;
    }
</style>

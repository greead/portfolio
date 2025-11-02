<script>
    import { onMount } from "svelte";

    // import ContactButton from "./contact_button.svelte";
    let { active = 0 } = $props();
    let width = $state(0);
    let showtext = $derived(width > 800)
</script>
<svelte:window bind:innerWidth={width} />

<ul id="nav">
    <li>
        <a href="#top" class="text-icon">
            <img class="small" src="/home_icon.svg" alt="Icon" />
            {#if showtext}Home{/if}            
        </a>
    </li>
    <li>
        <a href="#portfolio" class="text-icon">
            <img class="small" src="/portfolio_icon.svg" alt="Icon" />
            {#if showtext}Portfolio{/if}
        </a>
    </li>
    <li>
        <a href="#about" class="text-icon">
            <img class="small" src="/about_icon.svg" alt="Icon" style="" />
            {#if showtext}About{/if}
        </a>
    </li>
    <a style:margin-left="auto" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/greead/">
        <img class="padded-icon" src="/InBug-White.png" alt="LinkedIn Link" />
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/greead">
        <img class="padded-icon" src="/github-mark-white.svg" alt="GitHub Link" />
    </a>
    <a target="_blank" rel="noopener noreferrer" href="mailto:alekz.green08@gmail.com">
        <img class="padded-icon" src="/mail-white.png" alt="Email Link" />
    </a>
</ul>

<style>
    ul {
        /* Alignment */
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        top: 1vh;
        position: sticky;
        min-width: 76vw;
        z-index: 1;
        opacity: 0.95;

        /* Style */
        border: 1px solid green;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

        /* Remove default list attributes */
        list-style-type: none;
        margin: 0;
        padding: 0;
        background-color: var(--color_secondary);
    }

    li {
        padding: 1vh 1vw;
        text-align: center;
        font-size: 1em;
        text-decoration: none;
    }

    a {
        color: var(--color_primary);
        text-decoration: none;
    }

    .text-icon {
        display: inline;
    }

    .small {
        height: 1em;
        padding-right: 5px;
    }

    .padded-icon {
        display: block;
        padding-right: 10px;
        height: 1.5em;
    }

    /* a.active {
        color: var(--color_secondary);
        text-decoration: none;
    } */
</style>

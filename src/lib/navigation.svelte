<script>
    import { onMount } from "svelte";

    // TODO: Extract nav elements into a new component
    // TODO: Extract link elements into a new component
    // TODO: Consider simplifying and unifying presentation
    // TODO: Consider adding a "nav" tag?
    // TODO: Highlight the current page section based on scrolling
    // TODO: Add tooltips for social links

    // onMount(() => {
    //     const links = navlist.querySelectorAll('a[href^="#');
    //     console.log('links', links);
    // })
</script>

<nav class="rounded" id="nav">
    <a href="#top" class="text-icon">
        <img class="small" src="/home_icon.svg" alt="Icon" />
        <span class="hide-mobile">Home</span>
    </a>
    <a href="#portfolio" class="text-icon">
        <img class="small" src="/portfolio_icon.svg" alt="Icon" />
        <span class="hide-mobile">Portfolio</span>
    </a>
    <a href="#about" class="text-icon">
        <img class="small" src="/about_icon.svg" alt="Icon" style="" />
        <span class="hide-mobile">About</span>
    </a>
    <a
        style:margin-left="auto"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/greead/"
    >
        <img class="padded-icon" src="/InBug-White.png" alt="LinkedIn Link" />
    </a>
    <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/greead"
    >
        <img
            class="padded-icon"
            src="/github-mark-white.svg"
            alt="GitHub Link"
        />
    </a>
    <a
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:alekz.green08@gmail.com"
    >
        <img class="padded-icon" src="/mail-white.png" alt="Email Link" />
    </a>
</nav>

<style>
    nav {
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

    a {
        color: mintcream;
        text-decoration: none;
    }

    .text-icon {
        padding: 1vh 1vw;
        text-align: center;
        font-size: 1em;
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

    a.active {
        color: var(--color_secondary);
    }

    @media (max-width: 800px) {
        .hide-mobile {
            display: none;
        }
    }
</style>

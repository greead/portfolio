<script>
    import { onMount } from "svelte";
    import PageLink from "./page_link.svelte";
    import { text } from "@sveltejs/kit";
    import SocialLink from "./social_link.svelte";

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
    <div class="page-links">
        <PageLink href="#top" src="/home_icon.svg" text="Home" />
        <PageLink href="#portfolio" src="portfolio_icon.svg" text="Portfolio" />
        <PageLink href="#about" src="/about_icon.svg" text="About" />
    </div>
    <div class="social-links">
        <SocialLink href="https://www.linkedin.com/in/greead/" src="/InBug-White.png"/>
        <SocialLink href="https://github.com/greead" src="/github-mark-white.svg" />
        <SocialLink href="mailto:alekz.green08@gmail.com" src="/mail-white.png" />
    </div>
</nav>

<style>
    nav {
        /* Grid */
        display: grid;
        grid-template-columns: 1fr 1fr;

        /* Sticky position */
        top: 1vh;
        position: sticky;
        z-index: 1;

        /* Size */
        min-width: 74vw;
        padding: 1vh 1vw;

        /* Styling */
        opacity: 0.95;
        border: 1px solid green;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        background-color: var(--color_secondary);
    }

    .page-links {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-start;
    }
    
    .social-links {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-end;
    }

</style>

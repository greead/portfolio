<script>
    import PageLink from "./page_link.svelte";
    import SocialLink from "./social_link.svelte";

    // TODO: Highlight the current page section based on scrolling
    // TODO: Add tooltips for social links

</script>
<nav class="rounded" id="nav">
    <div class="row page-links">
        <PageLink href="#top" src="/home_icon.svg" text="Home"/>
        <PageLink href="#portfolio" src="portfolio_icon.svg" text="Portfolio" />
        <PageLink href="#about" src="/about_icon.svg" text="About" />
    </div>
    <div class="row social-links">
        <SocialLink href="https://www.linkedin.com/in/greead/" src="/InBug-White.png" tooltip="linkedin.com/in/greead" />
        <SocialLink href="https://github.com/greead" src="/github-mark-white.svg" tooltip="github.com/greead" />
        <SocialLink href="mailto:alekz.green08@gmail.com" src="/mail-white.png" tooltip="alekz.green08@gmail.com" />
        <SocialLink href="/resume.pdf" src="/resume.svg" tooltip="View resume"/>
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

    .row {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .page-links {
        justify-content: flex-start;
    }

    .social-links {
        justify-content: flex-end;
    }
</style>

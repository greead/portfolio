<script>
    // import ContactButton from "./contact_button.svelte";
    /** @type {{active?: number}} */
    let { active = 0 } = $props();
</script>

<ul id="nav">
    <li><a href="#top">Top</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#about">About</a></li>
    <a style:margin-left="auto" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/greead/">
        <img src="/InBug-White.png" alt="LinkedIn Link" />
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/greead">
        <img src="/github-mark-white.svg" alt="GitHub Link" />
    </a>
    <a target="_blank" rel="noopener noreferrer" href="mailto:alekz.green08@gmail.com">
        <img src="/mail-white.png" alt="Email Link" />
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
        padding: 1vh 2vw;
        text-align: center;
        font-size: 1em;
        text-decoration: none;
    }

    img {
        display: block;
        height: 3vh;
        padding-right: 1vw;
    }

    /* 
    li.active {
        background-color: var(--color_primary);
    } */

    a {
        color: var(--color_primary);
        text-decoration: none;
    }

    /* a.active {
        color: var(--color_secondary);
        text-decoration: none;
    } */
</style>

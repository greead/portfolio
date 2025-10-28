<script>
    // import ContactButton from "./contact_button.svelte";
    /** @type {{active?: number}} */
    let { active = 0 } = $props();
</script>

<ul id="nav">
    <li><a href="#top">Home</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#about">About</a></li>
    <!-- <li class="contact"><ContactButton /></li> -->
</ul>

<style>
    ul {
        /* Alignment */
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        top: 20px;
        position: sticky;
        min-width: 76vw;

        /* Style */
        border: 1px solid green;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

        /* Remove default list attributes */
        list-style-type: none;
        margin: 0;
        padding: 0;
        background-color: var(--color_secondary);
        margin-bottom: 0;
    }

    li {
        padding: 1em 2em 1em 2em;
        text-decoration: none;
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

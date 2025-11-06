<script lang="ts">
    interface Props {
        children?: import("svelte").Snippet;
    }

    let { children }: Props = $props();
</script>

<a href="/"><img src="/logo.svg" alt="Logo" /></a>

{@render children?.()}

<style>
    :global(html) {
        font-family: Arial, Helvetica, sans-serif;
        line-height: 150%;
        scroll-behavior: smooth;
        --color_primary: mintcream;
        --color_secondary: #333;
        --color_bg: #333;
        --color_font_primary: mintcream;
        --color_font_secondary: rgba(152, 251, 152, 1);
        --color_font_visited: rgb(255, 200, 154);
        color: var(--color_font_primary);
    }

    :global(html.light) {
        --color_primary: rgba(152, 251, 152);
        --color_secondary: #333;
        --color_bg: mintcream;
        --color_font_primary: #333;
        --color_font_secondary: green;
        --color_font_visited: rgb(160, 72, 0);
    }

    :global(body) {
        background-color: var(--color_bg);
        background-image: url("/wavey.png");
        background-repeat: repeat-y;
    }

    :global(section) {
        width: 76vw;
    }

    :global(h1.section-header) {
        font-family: "NovaCut-Regular";
        text-align: center;
        background-color: var(--color_bg);
        border: 1px solid green;
        opacity: 0.95;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        width: calc(100% - 2px);
        padding: 1vh 0;
    }

    :global(a:link) {
        color: var(--color_font_secondary);
    }

    :global(a:visited) {
        color: var(--color_font_visited);
    }

    :global(.reftag) {
        position: relative;
        top: -4rem;
    }

    @font-face {
        font-family: "NovaCut-Regular";
        src: url("/PermanentMarker-Regular.ttf");
    }

    @font-face {
        font-family: "Lobster";
        src: url("/Lobster-Regular.ttf");
    }

    img {
        height: 100%;
    }

    a {
        position: absolute;
        height: 48px;
        padding-left: 30px;
        padding-top: 30px;
        background-color: mintcream;
        padding: 5px;
        border-radius: 25%;
    }
</style>

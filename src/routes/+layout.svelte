<script lang="ts">
    interface Props {
        children?: import("svelte").Snippet;
    }

    let { children }: Props = $props();
</script>

<a href="/"><img src="/logo.png" alt="Logo" /></a>

{@render children?.()}

<style>
    :global(html) {
        font-family: Arial, Helvetica, sans-serif;
        line-height: 150%;
        scroll-behavior: smooth;
        --color_primary: rgba(152, 251, 152, 0.9);
        --color_secondary: #333;
        --color_bg: mintcream;
        --secondary_color_grn: green;
        
    }

    :global(body) {
        background-color: var(--color_bg);
        background-image: url("/wavey.png");
        background-repeat: repeat-y;
    }

    :global(h1) {
        font-family: "NovaCut-Regular";
    }

    /* :global(div) {
        background-color: rgba(152, 251, 152, 0.9);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        border: 1px solid green;
    } */

    @font-face {
        font-family: "NovaCut-Regular";
        src: url("/PermanentMarker-Regular.ttf");
    }

    @font-face {
        font-family: "Lobster";
        src: url("/Lobster-Regular.ttf");
    }

    img {
        width: 50px;
    }

    a {
        position: fixed;
        left: 20px;
        top: 20px;
    }
</style>

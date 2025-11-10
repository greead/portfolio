<script lang="ts">
    import { asset } from "$app/paths";
import { modal_data } from "./modal_data.svelte";
    let { image, title, body, link, link_text, tools } = $props();
    const show_modal = () => {
        modal_data.active = true;
        modal_data.img = image;
        modal_data.text = title;
    };
    // TODO: Swap to using rounded, colored tags instead of a list of items in the figcaption
    // TODO: Swap to using gifs, videos, or webps for portfolio items as necessary
</script>

<div class="card rounded">
    <button onclick={show_modal}>
        <figure>
            <img class="portfolio-img" src={asset(image)} alt="Project" />
            <figcaption>
                <img class="tooling-icon" src={asset("/tooling_icon.svg")} alt="icon" />
                <span class="tooling-list">{tools.join(", ")}</span>
            </figcaption>
        </figure>
    </button>
    <h4 class="title"><b>{title}</b></h4>
    {body}
    <a href={link}>{link_text}</a>
</div>

<style>
    .card {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        background-color: var(--color_bg);
        border: 1px solid green;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        width: 45%;
        padding: 1rem;
        margin-bottom: 1rem;
        text-align: justify;
    }

    @media (max-width: 1200px) {
        .card {
            width: 100%;
        }
    }

    button {
        all: unset;
        cursor: zoom-in;
    }

    figure {
        display: flex;
        flex-flow: column wrap;
        border: 1px solid green;
        margin: 0;
        width: 100%;
        align-items: center;
    }

    .portfolio-img {
        max-height: 30vh;
        width: 100%;
        max-width: fit-content;
    }

    figcaption {
        display: flex;
        flex-flow: row nowrap;
        background-color: #333;
        color: mintcream;
        text-align: left;
        align-self: flex-start;
        width: 100%;
        align-items: center;
    }

    .tooling-icon {
        height: 1em;
        padding: 5px 5px;
    }

    .title {
        text-align: center;
        padding: 0;
        margin-bottom: 10px;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
</style>

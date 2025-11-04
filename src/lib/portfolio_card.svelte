<script lang="ts">
    let { image, title, body, link, link_text, tools } = $props();
</script>

<div class="card">
    <figure>
        <img class="portfolio-img" src="/{image}" alt="Project" />
        <figcaption>
            <img class="tooling-icon" src="/tooling_icon.svg" alt="icon" />
            <span class="tooling-list">{tools.join(", ")}</span>
        </figcaption>
    </figure>
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

    figure {
        display: flex;
        flex-flow: column wrap;
        border: 1px solid green;
        margin: 0;
        width: 100%;
        align-items: center;
        padding: 10px;
        padding-bottom: 0;
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

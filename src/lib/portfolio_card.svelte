<script lang="ts">
    let { image, title, body, link, link_text, tools } = $props();
</script>

<div class="card">
    <figure>
        <img class="portfolio-img" src="/{image}" alt="Project" />
        <figcaption>
            <img class="tooling-icon" src="/tooling_icon.svg" alt="icon" />
            {tools.join(", ")}
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
        opacity: 0.95;
        border: 1px solid green;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        width: 46%;
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
    }

    .portfolio-img {
        max-height: 30vh;
        width: 100%;
        max-width: fit-content;
    }

    figcaption {
        background-color: #333;
        opacity: 95%;
        color: mintcream;
        padding: 3px 5px;
        text-align: left;
        align-self: flex-start;
        max-width: initial;
    }

    .tooling-icon {
        height: 1em;
        padding-right: 5px;
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

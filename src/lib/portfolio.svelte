<script lang="ts">
    import { portfolio_items } from "./store";
</script>

<span style="position: relative; top: -4rem;" id="portfolio"></span>
<main>
    <h1>Portfolio</h1>
    <section>
        {#each portfolio_items as portfolio_item}
            <div class="card">
                <figure>
                    <img class="portfolio-img" src="/{portfolio_item.image}" alt="Project" />
                    <figcaption><img class="tooling-icon" src="/tooling_icon.svg" alt="icon"/>TEST</figcaption>
                </figure>
                
                <h4><b>{portfolio_item.title}</b></h4>
                <p>{portfolio_item.body}</p>
                <a href={portfolio_item.link}>{portfolio_item.link_text}</a>
            </div>
        {/each}
    </section>
</main>

<style>
    .portfolio-img {
        max-height: 30vh;
        width: 100%;
        max-width: fit-content;
    }

    .tooling-icon {
        height: 1em;
        padding-right: 5px;
    }

    figure {
        display: flex;
        flex-flow: column nowrap;
        border: 1px solid green;
    }

    figcaption {
        background-color: #333;
        opacity: 95%;
        color: mintcream;
        padding: 3px 5px;
        text-align: left;

    }

    h1 {
        text-align: center;
        background-color: var(--color_bg);
        border: 1px solid green;
        opacity: 0.95;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        width: calc(100% - 2px);
        padding: 1vh 0;
        /* top: 10vh;
        position: sticky; */
    }

    p {
        text-align: justify;
    }

    main {
        width: 76vw;
    }

    section {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        text-align: center;
    }

    .card {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        background-color: var(--color_bg);
        opacity: 0.95;
        border: 1px solid green;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        /* width: calc(50% - 2px - 4rem); */
        width: 46%;
        padding: 1rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 1200px) {
        .card {
            width: 100%;
        }
    }

    /* .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    } */
</style>

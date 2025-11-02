<script lang="ts">
    import { portfolio_items } from "./store";
    let selectedRadio = "All";
</script>

<span style="position: relative; top: -4rem;" id="portfolio"></span>
<main>
    <h1>Portfolio</h1>
    <section class="portfolio-filter">
        {#each ["All", "Data Analytics", "Graphics & Tech Art", "Game Dev", "Research", "Full-stack", "Backend", "Frontend", "Databases", "Testing"].sort() as btn}
            <label for={btn}  class="filter-btn">
                <input
                    type="radio"
                    id={btn}
                    name="portfolio-filter"
                    bind:group={selectedRadio}
                    value={btn}
                />
                <span class="filter-toggle"></span>
                <span class="filter-text">{btn}</span>
            </label>
        {/each}
    </section>
    <section class="portfolio-card">
        {#each portfolio_items as portfolio_item}
            {#if selectedRadio == "All" || portfolio_item.tags.includes(selectedRadio)}
                <div class="card">
                    <figure>
                        <img
                            class="portfolio-img"
                            src="/{portfolio_item.image}"
                            alt="Project"
                        />
                        <figcaption>
                            <img
                                class="tooling-icon"
                                src="/tooling_icon.svg"
                                alt="icon"
                            />
                            {portfolio_item.tools.join(", ")}
                        </figcaption>
                    </figure>
                    <h4 class="title"><b>{portfolio_item.title}</b></h4>
                    {portfolio_item.body}
                    <a href={portfolio_item.link}>{portfolio_item.link_text}</a>
                </div>
            {/if}
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
        flex-flow: column wrap;
        border: 1px solid green;
        margin: 0;
        width: 100%;
        align-items: center;
    }

    figcaption {
        background-color: #333;
        opacity: 95%;
        /* white-space: nowrap; */
        color: mintcream;
        padding: 3px 5px;
        text-align: left;
        align-self: flex-start;
        max-width: initial;

    }

    h1 {
        text-align: center;
        background-color: var(--color_bg);
        border: 1px solid green;
        opacity: 0.95;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        width: calc(100% - 2px);
        padding: 1vh 0;
    }

    .title {
        text-align: center;
        padding: 0;
        margin-bottom: 10px;
    }

    main {
        width: 76vw;
    }

    .portfolio-card {
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
        text-align: justify;
    }

    @media (max-width: 1200px) {
        .card {
            width: 100%;
        }
    }

    .portfolio-filter {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;

        input {
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
        }

        .filter-btn {
            position: relative;
            width: fit-content;
            height: fit-content;
            padding: 0vh 1vw;
            border-radius: 5%;
            margin-bottom: 1vh;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
            border: 3px solid var(--color_font_secondary);
            background-color: transparent;
            cursor: pointer;
        }

        .filter-toggle {
            position: absolute;
            top: 0;
            left: 0;
            cursor: pointer;
            width: 100%;
            height: 100%;
            background-color: var(--color_secondary);
            z-index: -1;
        }

        input:checked + .filter-toggle {
            background-color: var(--color_font_secondary);
        }

        input:checked ~ .filter-text {
            color: var(--color_bg);
        }
    }

    /* .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    } */
</style>

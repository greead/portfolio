<script lang="ts">
    import FilterButton from "./filter_button.svelte";
    import PortfolioCard from "./portfolio_card.svelte";
    import { portfolio_items } from "./store";

    let selectedRadio = $state("All");
</script>

<span style="position: relative; top: -4rem;" id="portfolio"></span>
<section>
    <h1>Portfolio</h1>
    <div class="portfolio-filter">
        {#each ["All", "Data Analytics", "Graphics & Tech Art", "Game Dev", "Research", "Full-stack", "Backend", "Frontend", "Databases", "Testing"].sort() as btn}
            <FilterButton {btn} bind:selectedRadio />
        {/each}
    </div>
    <div class="portfolio-card">
        {#each portfolio_items as portfolio_item}
            {#if selectedRadio == "All" || portfolio_item.tags.includes(selectedRadio)}
                <PortfolioCard {...portfolio_item} />
            {/if}
        {/each}
    </div>
</section>

<style>
    section {
        width: 76vw;
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

    .portfolio-filter {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
    }

    .portfolio-card {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        text-align: center;
    }
</style>

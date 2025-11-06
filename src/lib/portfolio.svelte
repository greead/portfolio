<script>
    import FilterButton from "./filter_button.svelte";
    import PortfolioCard from "./portfolio_card.svelte";
    import { portfolio_items } from "$lib/site_data.svelte";
    
    let selectedRadio = $state("All");
</script>

<span class="reftag" id="portfolio"></span>
<section>
    <h1>Portfolio</h1>
    <div class="portfolio-filters">
        {#each ["All", "Data Analytics", "Graphics & Tech Art", "Game Dev", "Research", "Full-stack", "Backend", "Frontend", "Databases", "Testing"].sort() as btn}
            <FilterButton {btn} bind:selectedRadio />
        {/each}
    </div>
    <div class="portfolio-cards">
        {#each portfolio_items as portfolio_item}
            {#if selectedRadio == "All" || portfolio_item.tags.includes(selectedRadio)}
                <PortfolioCard {...portfolio_item} />
            {/if}
        {/each}
    </div>
</section>

<style>
    .portfolio-filters {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
    }

    .portfolio-cards {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        text-align: center;
    }
</style>

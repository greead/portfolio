<script>
    import FilterButton from "./filter_button.svelte";
    import PortfolioCard from "./portfolio_card.svelte";
    import { portfolio_items } from "$lib/site_data.svelte";
    
    const tags = new Map([
        ["all", "All"],
        ["data", "Data Analysis & ML"],
        ["graphics", "Graphics & Tech Art"],
        ["games", "Game Dev"],
        ["research", "Research"],
        ["fullstack", "Full-stack"],
        ["backend", "Backend"],
        ["frontend", "Frontend"],
        ["db", "Databases"],
        ["testing", "Testing"],
    ]);

    let selectedRadio = $state("All");

    // TODO: Extract the tags list into/from the site_data store
</script>

<span class="reftag" id="portfolio"></span>
<section>
    <h1 class="section-header rounded">Portfolio</h1>
    <div class="portfolio-filters">
        {#each tags.values() as btn}
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

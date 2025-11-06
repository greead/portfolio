<script lang="ts">
    let { btn, selectedRadio = $bindable() } = $props();
    // TODO: Add tooltip
    // TODO: Look into border radii
</script>

<label for={btn} class="filter-btn">
    <input type="radio" id={btn} name="portfolio-filter" bind:group={selectedRadio} value={btn} />
    <span class="filter-toggle"></span>
    <span class="filter-text">{btn}</span>
</label>

<style>
    .filter-btn {
        position: relative;
        width: fit-content;
        height: fit-content;
        padding: 0vh 1vw;
        border-radius: 15px;
        margin-bottom: 1vh;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        border: 3px solid var(--color_font_secondary);
        background-color: transparent;
        cursor: pointer;
    }

    input {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }

    .filter-toggle {
        position: absolute;
        top: 0;
        left: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        background-color: var(--color_bg);
        color: var(--color_font_primary);
        z-index: -1;
        border-radius: 10px;
    }

    input:checked ~ .filter-toggle {
        background-color: var(--color_font_secondary);
    }

    input:checked ~ .filter-text {
        color: var(--color_bg);
    }
</style>

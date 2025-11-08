<script>
    let { switch_state = $bindable(), onclick, image, alt="toggle" } = $props();
</script>

<label class="switch">
    <input type="checkbox" bind:checked={switch_state} {onclick} />
    <span class="toggle"></span>
    <img src={image} {alt} />
    <span class="tooltip">{alt}</span>
</label>

<style>
    .switch {
        position: relative;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background-color: var(--color_primary);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        border: 3px solid var(--color_font_secondary);
        margin: 1vw 1vh;
    }

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .toggle {
        position: absolute;
        top: 0;
        left: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        background-color: var(--color_secondary);
    }

    input:checked + .toggle {
        background-color: var(--color_font_secondary);
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        z-index: 1;
    }

    .tooltip {
        visibility: hidden; /* Hidden by default */
        white-space: nowrap;
        background-color: black;
        color: white;
        text-align: center;
        padding: 5px 5px;
        border-radius: 6px;
        position: absolute;
        z-index: 1; /* Ensure tooltip is displayed above content */
        right: 45%;
        top: 120%;
    }

    @media (min-width: 800px) {
        label:hover .tooltip {
            visibility: visible;
        }
    }
</style>

<script>
    import { asset } from "$app/paths";

    let { image = "/whispers.png", orient = "horizontal", offset = 6 } = $props();

    // TODO: Consider simplifying massively
    let isHorz = orient == "horizontal";
    let top_offset = isHorz ? "0px" : `-${offset}vw`;
    let left_offset = isHorz ? `-${offset}vw` : "0px";
    let width = isHorz ? "auto" : "100%";
    let height = isHorz ? "100%" : "auto" 
</script>

<div class="circular">
    <img
        src={asset(image)}
        style:margin-top={top_offset}
        style:margin-left={left_offset}
        style:width
        style:height
        alt="portrait"
    />
</div>

<style>
    .circular {
        width: 15vw;
        height: 15vw;
        border-radius: 50%;
        align-self: center;
        overflow: hidden;
        margin-top: 5%;
        background-color: var(--primary_color_grn);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        border: 1px solid green;
    }

    img {
        width: auto;
        height: 100%;
    }
</style>

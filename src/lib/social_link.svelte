<script>
    import { asset } from "$app/paths";

    let { href, src, alt = "Link", tooltip = href} = $props();
</script>

<a target="_blank" rel="noopener noreferrer" {href}>
    <img class="padded-icon" src={asset(src)} alt="Link" />
    <span class="tooltip">{tooltip}</span>
</a>

<style>
    a {
        color: mintcream;
        text-decoration: none;
    }

    .padded-icon {
        display: block;
        padding: 0 5px;
        height: 1.5em;
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
        right: 0px;
    }

    @media (min-width: 800px) {
        a:hover .tooltip {
            visibility: visible;
        }
    }
</style>

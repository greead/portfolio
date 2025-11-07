<script>
    let { href, src, alt = "Link" } = $props();
</script>

<a target="_blank" rel="noopener noreferrer" {href}>
    <img class="padded-icon" {src} alt="Link" />
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
</style>

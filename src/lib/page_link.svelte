<script>
    let { href, src, text, alt="icon" } = $props();
</script>

<a {href}>
    <img class="small" {src} {alt} />
    <span class="mobile-hide">{text}</span>
</a>

<style>
    a {
        color: mintcream;
        text-decoration: none;
        text-align: center;
        font-size: 1em;
        padding: 0 10px;
    }

    .small {
        height: 1em;
        /* padding-right: 4px; */
    }

    a.active {
        color: var(--color_secondary);
    }

    @media (max-width: 800px) {
        .mobile-hide {
            display: none;
        }
    }
</style>

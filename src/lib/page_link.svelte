<script>
    let { hidetext = false } = $props();
</script>

<li>
    <a href="#top" class="text-icon">
        <img class="small" src="/home_icon.svg" alt="Icon" />
        <span class="mobile-hide">Home</span>
    </a>
</li>

<style>
    @media(max-width: 800px) {
        .mobile-hide {
            display: none;
        }
    }
</style>
<script>
    import { asset } from "$app/paths";

    let { href, src, text, active=false, alt="icon" } = $props();

    // let scrollY = $state(0);
    // let innerHeight = $state(0);
    // let innerCenter = $derived(innerHeight / 2);
</script>

<!-- <svelte:window bind:scrollY bind:innerHeight/> -->

<a {href} class={{active}}>
    <img class="small" src={asset(src)} {alt} />
    <span class="mobile-hide">{text}</span>
</a>

<style>
    a {
        color: mintcream;
        text-decoration: none;
        font-size: 1em;
        padding: 0 10px;
    }

    .small {
        height: 1em;
    }

    .active {
        color: rgb(152, 251, 152);
        border-bottom: 2px solid rgb(152, 251, 152);
    }

    @media (max-width: 800px) {
        .mobile-hide {
            display: none;
        }
    }
</style>

<script>
    import { asset } from "$app/paths";

    let { title, data, href = data } = $props();
</script>

<details>
    <summary>{title}</summary>
    <object {title} data={asset(data)} type="application/pdf">
        <p>
            PDF in-page preview unavailable. Use another browser or download by clicking <a {href} download>here</a>.
        </p>
    </object>
</details>

<style>
    summary {
        background-color: var(--color_bg);
        border: 1px solid green;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        padding: 1vh 1vw;
    }

    object {
        width: calc(100% - 2px);
        height: 80vh;
        border: 1px solid green;
    }

    details {
        padding-bottom: 1vh;
    }
</style>

<script>
    import { modal_data, clickOutside } from "$lib/modal_data.svelte";
    const hide_modal = () => (modal_data.active = false);

    // TODO: Consider simplifying structure
    // TODO: Adjust modal to adjust size based on content
    // TODO: Consider swapping to padding approach or setting width/height or max-width/height
</script>

<div id="modal" class="modal">
    <div class="modal-content" use:clickOutside onclick_outside={hide_modal}>
        <button type="button" class="close" onclick={hide_modal}>×</button>
        <img id="img01" alt="modal" src={modal_data.img} />
        <p>{modal_data.text}</p>
    </div>
</div>

<style>
    .modal {
        position: fixed;
        top: 10vh;
        left: 10vw;
        z-index: 2;
        width: 80%;
        height: 80%;
        background-color: rgba(33, 33, 33, 0.95);
        border-radius: 15px;
    }

    .modal-content {
        display: flex;
        flex-flow: column nowrap;
        justify-items: flex-start;
        align-items: center;
        max-height: 100%;
        width: 100%;
        height: 100%;
        /* overflow: scroll; */
    }

    img {
        height: fit-content;
        max-height: 85%;
        max-width: 90%;
        border-radius: 15px;
    }

    p {
        text-align: center;
        color: mintcream;
    }

    .close {
        background-color: transparent;
        border: none;
        margin: 0;
        color: mintcream;
        align-self: flex-end;
        font-size: 28px;
        font-weight: bold;
        padding: 5px 15px;
    }

    .close:hover,
    .close:focus {
        color: var(--color_font_secondary);
        text-decoration: none;
        cursor: pointer;
    }
</style>

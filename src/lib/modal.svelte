<script>
    import { modal_data } from "$lib/modal_data.svelte"

    // let modal = $state();
    // let modal_content = $state();
</script>

<!-- <svelte:window onclick={(e) => {
    if (true) {
        modal_data.active = false;
        console.log("CLICK");
    }
}}/> -->

<div id="modal" class="modal" >
    <div class="modal-content" >
        <button type="button" class="close" onclick={() => {
            modal_data.active = false;
        }}>×</button>
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

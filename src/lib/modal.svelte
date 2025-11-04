<script>
    let { text = "TEST", img = "/bytebuddy.png" } = $props();
</script>

<div id="modal" class="modal">
    <span class="close">×</span>
    <div class="modal-content">
        <img id="img01" alt="modal" src={img} />
        <p>{text}</p>
    </div>
</div>

<style>
    .modal {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        position: fixed;
        top: 10vh;
        left: 10vw;
        z-index: 2;
        width: 80%;
        min-height: 80%;
        background-color: rgba(33, 33, 33, 0.95);
        
        border-radius: 15px;
    }

    .modal-content {
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;
        align-content: center;
        width: 100%;

        img {
            max-height: 90%;
            max-width: 90%;
            border-radius: 15px;
        }

        p {
            text-align: center;
            color: mintcream
        }
        
    }

    .close {
        color: mintcream;
        align-self: flex-end;
        font-size: 28px;
        font-weight: bold;
        padding: 5px 10px;
    }

    .close:hover,
    .close:focus {
        color: var(--color_font_secondary);
        text-decoration: none;
        cursor: pointer;
    }
</style>

<script>
    let { text = "", img = "/whispers.png"} = $props();
</script>

<div id="modal" class="modal">
    <span class="close">×</span>
    <img class="modal-content" id="img01" alt="modal" src={img}/>
    <p>{text}</p>
</div>

<style>
    .modal {
        position: fixed;
        top: 10vh;
        left: 10vw;
        z-index: 2;
        width: 80vw;
        height: 80vh;
        opacity: 0.95;
        background-color: #333;
    }

    .modal-content {
        margin: 15% auto;
        display: block;
        width: 80%;
        max-width: 700px;
        opacity: 100;
    }

    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
</style>

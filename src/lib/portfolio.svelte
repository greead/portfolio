<script lang="ts">
    import {base} from '$app/paths'
    import {portfolio_items} from './store'
</script>

<div class="row">
    {#each portfolio_items as portfolio_item}
        <div class="column">
            <div class="card">
                <div class="imgbox">
                    <img src="{base}/{portfolio_item.image}" alt="Project">
                </div>
                <div class="container">
                    <h4><b>{portfolio_item.title}</b></h4>
                    <p>{portfolio_item.body}</p>
                    <h5><a href="{portfolio_item.link}">{portfolio_item.link_text}</a></h5>
                </div>
            </div>
        </div>
    {/each}
    
</div>

<style>
    * {
        box-sizing: border-box;
    }

    .column {
        float: left;
        width: 30%;
        padding: 0 5px;
        margin-bottom: 10px;
    }

    img {
        /* width: 100%; */
        padding: 1em;
        max-height: 30vh;
        max-width: 100%;
    }

    h4 {
        text-align: center;
    }

    h5 {
        text-align: center;
    }

    p {
        text-align: justify;
    }

    .row {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0 -10px;
    }

    .row:after {
        content: "";
        display: table;
        clear: both;
    }
    .card {
        background-color:rgba(245, 255, 250, 0.95);
        border: 1px solid green;
        box-shadow:0px 0px 10px rgba(0,0,0,.5);
        height: 100%;
    }
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .container {
        padding: 2px 16px;
    }

    .imgbox {
        text-align: center;
    }

</style>
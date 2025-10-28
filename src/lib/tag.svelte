<script lang="ts">
    interface Props {
        keywords?: any;
    }

    let { keywords = ["JavaScript", "HTML", "CSS"] }: Props = $props();
</script>

<ul class="tags">
    <div class="container">
        {#each keywords as keyword}
            <li><span class="tag">{keyword}</span></li>
        {/each}
    </div>
</ul>

<style>
    .tags {
        list-style: none;
        margin: 0;
        overflow: hidden;
        padding: 0;
    }

    .container {
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .container::after {
        content: "";
        flex: auto;
    }

    .tag {
        background: rgb(172, 216, 172);
        border-radius: 3px 0 0 3px;
        color: black;
        display: inline-block;
        height: 26px;
        line-height: 26px;
        padding: 0 20px 0 23px;
        position: relative;
        margin: 0 10px 10px 0;
        text-decoration: none;
        transition: color 0.2s;
        -webkit-transition: color 0.2s;
        font-size: 12px;
        border-radius: 10%/25%;
    }

    .tag::before {
        background: mintcream;
        border-radius: 10px;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
        content: "";
        height: 6px;
        left: 10px;
        position: absolute;
        width: 6px;
        top: 10px;
    }

    .tag:hover {
        background-color: green;
        color: mintcream;
    }
</style>

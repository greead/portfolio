<script lang="ts">
    import TimelineCard from "./timeline_card.svelte";
    import { experience_items } from "$lib/site_data.svelte";

    // TODO: Simplify and reimplement timeline

</script>

<div class="timeline">
    <h1>Experience</h1>
    <ul>
        {#each experience_items as experience}
            <li><TimelineCard {...experience} /></li>
        {/each}
    </ul>
</div>

<style>
    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        perspective: 800px;
    }

    h1 {
        text-align: center;
        text-decoration: underline;
    }

    .timeline {
        margin-top: 20px;
        color: black;
        padding: 30px 20px;
        background-color: rgba(245, 255, 250, 0.95);
        border: 1px solid green;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
    .timeline ul {
        list-style-type: none;
        border-left: 2px solid green;
        padding: 10px 5px;
    }
    .timeline ul li {
        padding: 20px 20px;
        position: relative;
        cursor: pointer;
        transition: 0.5s;
    }

    .timeline ul li:before {
        position: absolute;
        content: "";
        width: 10px;
        height: 10px;
        background-color: green;
        border-radius: 50%;
        left: -11px;
        top: 28px;
        transition: 0.5s;
    }
    .timeline ul li:hover {
        background-color: rgb(214, 255, 234);
    }
    .timeline ul li:hover:before {
        background-color: #0f0;
        box-shadow: 0px 0px 10px 2px #0f0;
    }
    @media (max-width: 300px) {
        .timeline {
            width: 100%;
            padding: 30px 5px 30px 10px;
        }
    }
</style>

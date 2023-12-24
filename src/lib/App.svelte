<script lang="ts">
  // import Landing from "./lib/landing.svelte";
  import logo from './assets/logo.png';
  // import Timeline from "./lib/timeline.svelte";
  // import Navigation from "./lib/navigation.svelte";
  // import {Router, Route} from 'svelte-routing';
  // export let url=""
</script>

<img src={logo} alt="Logo"/>

<!-- <div class="Landing">
  <Landing />
</div> -->
<div class="Timeline">
  <!-- <Navigation /> -->
  <!-- <Timeline /> -->
</div>

<style>
  :global(body) {
    background-color: mintcream;
    background-image: url('assets/wavey.png');
    background-repeat: repeat-y;
    background-size: 100%;
  }

  
  img {
        width: 50px;
        position: absolute;
        left: 20px;
        top: 20px;
    }

  /* .Timeline {
    width: 40lh;
  } */


</style>
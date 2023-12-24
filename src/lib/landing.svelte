<script lang="ts">
  import Navigation from './navigation.svelte';
</script>

<div class="top-text">
    <div class="howdy">
        Howdy!
    </div>
    
    <div class="my-name">
        my name is...
    </div>
</div>
<div class="name">
    Alekzander Green
</div>
<Navigation />

<style>
    @font-face {
        font-family: 'NovaCut-Regular';
        src: url('../assets/PermanentMarker-Regular.ttf');
        
    }

    @font-face {
        font-family: 'Lobster';
        src: url('../assets/Lobster-Regular.ttf');
    }

    .name {
        font-family: 'NovaCut-Regular';
        font-size:50px;
        font-weight: bolder;
        background-color: rgba(152, 251, 152, 0.90);
        box-shadow:0px 0px 10px rgba(0,0,0,.5);
        padding: 1em 5em 1em 5em;
        border: 1px solid green;
    }

    .howdy {
        font-family: 'Lobster';
        font-size: 100px;
        grid-area: howdy;
        text-align: right;
        padding-right: 40px;
    }

    .my-name {
        font-family: 'Lobster';
        font-size: 50px;
        grid-area: myName;
        text-align: left;
        padding-bottom: 20px;
        padding-right: 100px;
    }
    
    .top-text {
        display: grid;
        grid-template: 
            'howdy howdy other'
            'howdy howdy myName';
    }


</style>
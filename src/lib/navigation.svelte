<script>
  import ContactButton from './contact_button.svelte';
  
</script>

<div class="nav">
    <ul class="horizontal">
        <li><a href="#top">Home</a></li>
        <li><a href="#top">About Me</a></li>
        <li><a href="#top">Experience</a></li>
        <li><a href="#top">Portfolio</a></li>
        <li class="contact"><ContactButton /></li>
    </ul>    
</div>

<style>

    @font-face {
        font-family: 'NovaCut-Regular';
        src: url('../assets/PermanentMarker-Regular.ttf');
        
    }

    @font-face {
        font-family: 'Lobster';
        src: url('../assets/Lobster-Regular.ttf');
    }

    ul.horizontal {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    }

    .nav {
        display: block;
        border: 1px solid green;
        box-shadow:0px 0px 10px rgba(0,0,0,.5);
    }

    li {
        float: left;
        padding: 1em 2em 1em 2em;
    }

    a {
        color: rgba(152, 251, 152);
    }

    li.contact {
        float: right;
    }

</style>


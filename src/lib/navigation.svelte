<script>
  import ContactButton from './contact_button.svelte';
  export let active = 0;
  
</script>

<div class="nav">
    <ul class="horizontal">
        <li class={active==0 ? "active" : "inactive"}><a class={active==0 ? "active" : "inactive"} href="/">Home</a></li>
        <li class={active==1 ? "active" : "inactive"}><a class={active==1 ? "active" : "inactive"} href="/about">About Me</a></li>
        <li class={active==2 ? "active" : "inactive"}><a class={active==2 ? "active" : "inactive"} href="/experience">Experience</a></li>
        <li class={active==3 ? "active" : "inactive"}><a class={active==3 ? "active" : "inactive"} href="/portfolio">Portfolio</a></li>
        <li class="contact"><ContactButton /></li>
    </ul>    
</div>

<style>
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
        font-family:Arial, Helvetica, sans-serif;
        text-decoration: none;
    }

    li.active {
        background-color: rgba(152, 251, 152);
    }

    a {
        color: rgba(152, 251, 152);
        text-decoration: none;
    }

    a.active {
        color:#333;
        text-decoration: none;
    }

    li.contact {
        float: right;
        font-family: Arial, Helvetica, sans-serif;
    }

</style>


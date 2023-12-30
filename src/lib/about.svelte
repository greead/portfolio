<script lang="ts">
    const birthdate = new Date("9/12/1999");
    const today = new Date();
    const yearsOld = Math.abs(today.getFullYear() - birthdate.getFullYear());
</script>

<div class="content">
    <div class="image">
        <img src="/placeholder.jpg" alt="me lol">
    </div>
    <div class="text">
        <h1>Alekz</h1>
        <p>
            Hi, I'm Alekz. I'm a {yearsOld} year old graduate student at Purdue University Fort Wayne (PFW) studying computer science.
        </p>
    </div>
</div>



<style>
    h1 {
        width: 100%;
        text-align: center;
        font-family: "Lobster";
    }

    p {
        widows: 100%;
        text-align: justify;
    }

    img {
        width: 40%;
        margin: auto;
        border: 1px solid green;
    }

    .image {
        text-align: center;
    }

    .content {
        background-color: mintcream;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        height: 100%;
        padding: 1em;
    }
    
</style>
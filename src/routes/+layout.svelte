<a href="/"><img src='/logo.png' alt="Logo"/></a>

<slot />

<style>
    :global(body) {
      background-color: mintcream;
      background-image: url('/wavey.png');
      background-repeat: repeat-y;
    }

    :global(html) {
        font-family: Arial, Helvetica, sans-serif;
        line-height: 150%;
    }

    @font-face {
        font-family: 'NovaCut-Regular';
        src: url('/PermanentMarker-Regular.ttf');
        
    }

    @font-face {
        font-family: 'Lobster';
        src: url('/Lobster-Regular.ttf');
    }

    img {
        width: 50px;
    }

    a {
        position: absolute;
        left: 20px;
        top: 20px;
    }

</style>
<a href="/"><img src='/logo.png' alt="Logo"/></a>

<slot />

<style>
    :global(body) {
      background-color: mintcream;
      background-image: url('/wavey.png');
      background-repeat: repeat-y;
      display: grid;
      place-items: center;
      min-height: 100vh;
      min-width: 320px;
      margin: 0;
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
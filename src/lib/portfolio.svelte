<div class="row">
    <div class="column">
        <div class="card">
            <img src="/wavey.png" alt="Avatar">
            <div class="container">
                <h4><b>This Portfolio Website</b></h4>
                <p>This portfolio website was written from scratch using SvelteKit. It uses a Python FastAPI server to retrieve its content.</p>
                <h5><a href="#top">GitHub Link</a></h5>
            </div>
        </div>
    </div>    
    <div class="column">
        <div class="card">
            <img src="/wavey.png" alt="Avatar">
            <div class="container">
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
            </div>
        </div>
    </div>
    <div class="column">
        <div class="card">
            <img src="/wavey.png" alt="Avatar">
            <div class="container">
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
            </div>
        </div>
    </div>
    <div class="column">
        <div class="card">
            <img src="/wavey.png" alt="Avatar">
            <div class="container">
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
            </div>
        </div>
    </div>
    <div class="column">
        <div class="card">
            <img src="/wavey.png" alt="Avatar">
            <div class="container">
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
            </div>
        </div>
    </div>
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
        width: 100%;
        padding: 1em;
    }

    h4 {
        text-align: center;
        font-family: 'Lobster';
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
        background-color: mintcream;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        height: 100%;
    }
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .container {
        padding: 2px 16px;
    }
</style>
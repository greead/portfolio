<script lang="ts">
    const birthdate = new Date("9/12/1999");
    const today = new Date();
    const years = today.getFullYear() - birthdate.getFullYear();
    const months = today.getMonth() - birthdate.getMonth();
    const days = today.getDate() - birthdate.getDate();
    const yearsOld = months < 0 || (months === 0 && days < 0) ? years - 1 : years;
</script>

<div class="content">
    <div class="image">
        <img src="/placeholder.jpg" alt="me lol">
    </div>
    <div class="text">
        <h1>Alekz Green</h1>
        <h2>
            Me, Professionally
        </h2>
        <p>
            Hello, I'm Alekzander Green. I'm a {yearsOld} year old graduate student at Purdue University Fort Wayne (PFW) studying computer science. 
            I graduated from PFW with a Bachelor's in Computer Engineering Technology with a minor in math and CS on the side. 
            I am very active at the school where I currently teach an introductory programming class, work on extracurricular research, and work with other professors to improve teaching materials.
            I've worked since I was 15 in the food industry, and eventually worked to become a shift manager at a Pizza Hut in my city.
            Since then I've been working in academia or with different companies in the area.
            I am a good programmer and problem solver who likes to learn new things and tackle interesting problems.
            I have experience with C, C#, Python, Java, Kotlin, and JavaScript; this includes their applications with things like embedded programming, Unity, machine learning, data analysis, Android programming, GUI & CLI applications, web servers, and web clients.
        </p>
        <h2>
            Me, Personally
        </h2>
        <p>
            Hi, I'm Alekz! I have a million-and-one interests about anything and everything (I truly like to learn).
            The things I enjoy doing the most are reading, trying new foods or restaurants, drinking tea, and playing games!
            If I had to give my top 5 games, they would be: League of Legends, World of Warcraft, anything Pokemon, Magic the Gathering, and the Pathfinder RPG.
            When I play Pathfinder, I usually am the Game Master because I love worldbuilding and lore.
            I sometimes even read lore for games I don't play because I'm a sucker for the interesting tidbits that someone put effort into crafting.
            My favorite teas are rooibos, jasmine, and chai; my favorite anime right now is Jujutsu Kaisen; my favorite color is green (shocking right?); and my favorite quote is,
        </p>
        <div class="quote">
            <div><q>Unless someone like you cares a whole awful lot, nothing is going to get better. It's not.</q></div>
            <div>— Dr. Seuss, The Lorax</div>
        </div>
        <h2>
            My Cats
        </h2>
        <div class="cats">
            <figure>
                <img src="/cat.jpg" alt="Whispers">
                <figcaption>Whispers</figcaption>
            </figure>
            <figure>
                <img src="/cat.jpg" alt="Persian">
                <figcaption>Persian</figcaption>
            </figure>
        </div>    
    </div>
</div>



<style>
    h1 {
        width: 100%;
        text-align: center;
        font-family: "Lobster";
        text-decoration: underline;
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
        background-color:rgba(245, 255, 250, 0.95);
        border: 1px solid green;
        box-shadow:0px 0px 10px rgba(0,0,0,.5);
        height: 100%;
        padding: 1em;
    }

    .quote {
        quotes: auto;
        text-align: center;
    }

    .cats {
        display: flex;
        text-align: center;
        justify-items: space-around;
    }

    ul {
        display: inline-flex;
        justify-content: space-between;
    }
    
    
</style>
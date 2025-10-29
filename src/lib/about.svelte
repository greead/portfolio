<script lang="ts">
    import Timeline from "./timeline.svelte";
    const birthdate = new Date("9/12/1999");
    const today = new Date();
    const years = today.getFullYear() - birthdate.getFullYear();
    const months = today.getMonth() - birthdate.getMonth();
    const days = today.getDate() - birthdate.getDate();
    const yearsOld =
        months < 0 || (months === 0 && days < 0) ? years - 1 : years;
</script>

<span style="position: relative; top: -4rem;" id="about"></span>
<main>
    <h1>About Me</h1>
    <div class="content">
        <div class="text">
            <h2>Professionally</h2>
            <p>
                Hello, I'm Alekzander Green. I'm a {yearsOld} year old aspiring software
                engineer with a passion for programming. I recently graduated from
                Purdue University with an M.S. in Computer Science. I previously
                graduated from Purdue with a B.S. in Computer Engineering Technology,
                an A.S. in Electrical Engineering Technology, and a couple minors
                in CS and Math. I currently work at Purdue University, Fort Wayne
                as a lecturer teaching introductory programming in Python.
            </p>
            <p>
                I am an experienced programmer and problem solver with a
                penchant for intellectual curiosity. I strongly believe that
                having varied experiences and knowledge will lead to deeper
                understanding and incredible moments of unlikely inspiration.
            </p>
            <p>
                I have experience in a wide variety of topics such as game
                programming, data analysis, web servers, web clients, databases,
                application programming, machine learning, embedded programming,
                and much more. My repetoire of programming languages includes
                C/C++, C#, Python, Java, Kotlin, PHP, and JavaScript. I've
                worked with several specific frameworks and technologies like
                Unreal Engine 5, Unity, Godot, Pandas, Matplotlib, NumPy,
                Django, SvelteKit, FastAPI, Svelte, React, PostgreSQL, SQLite,
                MongoDB, .NET Core, Android Studio, Sci-Kit Learn, and
                TensorFlow.
            </p>

            <h2>Personally</h2>
            <p>
                Hey there, I'm Alekz! I have a million-and-one interests and I
                truly enjoy learning. My biggest hobbies are playing games,
                reading, trying new restaurants, and drinking tea.
            </p>
            <p>
                Some of my favorite games are League of Legends, World of
                Warcraft, Pokemon, Magic: the Gathering, and the Pathfinder RPG.
                I am a big fan of worldbuilding and lore, sometimes reading lore
                for games and settings that I don't play or otherwise read. In
                my spare time, when not playing games, eating, or reading, I
                like to work on making games in Unreal, with my current project
                being a dynamic MMORPG.
            </p>
            <p>
                My favorite teas are rooibos, jasmine, and masala chai; my
                favorite color is green; and my favorite quote is,
            </p>
            <div class="quote">
                <div>
                    <q
                        >Unless someone like you cares a whole awful lot,
                        nothing is going to get better. It's not.</q
                    >
                </div>
                <div>— Dr. Seuss, The Lorax</div>
            </div>
        </div>
    </div>
</main>

<style>
    main {
        width: 76vw;
    }
    h1 {
        text-align: center;
        background-color: var(--color_bg);
        opacity: 0.95;
        border: 1px solid green;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        width: calc(100% - 2px);
        padding: 1vh 0;
        /* top: 10vh;
        position: sticky; */
    }

    p {
        widows: 100%;
        text-align: justify;
    }

    .content {
        background-color: var(--color_bg);
        border: 1px solid green;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        height: 100%;
        padding: 1em;
    }

    .quote {
        quotes: auto;
        text-align: center;
    }
</style>

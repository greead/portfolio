export let main_shader = {
    vert: 
    `#version 300 es
    in vec2 aPosition;
    
    void main(void) {
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
    `,
    frag: 
    `#version 300 es
    precision highp float;

    uniform float uTime;
    uniform vec2 uResolution;

    out vec4 fragColor;

    #define S smoothstep

    vec4 Line(vec2 uv, float speed, float height, vec3 col) {
        uv.y += S(1.0, 0.0, abs(uv.x * 0.8)) * sin(uTime * speed - uv.x * height) * 0.3 - 0.15;
        return vec4(S(0.005 * S(0.1, 1.0, abs(uv.x)), 0.0, abs(uv.y) - 0.005) * col, 0.0);
    }

    void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / uResolution.y;

        vec4 linestore = vec4(0.0);
        for (float i = 0.0; i <= 5.0; i += 1.0) {
            float t = i / 20.0;
            vec4 line = Line(uv, 1.0 + t, 8.0, vec3(0.03 + t * 0.5, 0.11 + t * 0.5, 0.03 + t * 0.5));
            linestore += line;
        }

        fragColor = vec4(linestore.rgb, linestore.g);
    }
    `
}


export let experience_items = [
    {
        date: "August 2023 - May 2025",
        title: "CS Master's Program - Purdue Fort Wayne, Department of Computer Science",
        body: "I am an earnest and studious student and learned a lot in my time in the PFW MSCS program. I found a deeper passion for and understanding of programming and computer science as a whole. In addition to the many things I learned, I developed a knack for research which grew and culminated with the publishing of my master's thesis.",
        image: "pfw.png",
        keywords: ["Public Speaking", "Data Analytics", "Problem Solving", "Data Visualization", "Machine Learning", "Software Engineering", "GitHub", "Python", "Django", "Svelte", "Software Planning", "Design Patterns", "Architecture Patterns", "RESTful APIs", "Organization"],
    },
    {
        date: "August 2023 - May 2025",
        title: "Graduate Teaching Assistant, Lecturer - Purdue Fort Wayne, School of Polytechnic",
        body: "As a Graduate Teaching Assistant, I taught the fundamentals of programming course in my university's school of Polytechnic. It's a fantastic experience that mixes my interests in teaching, programming, and learning. I started out hesitant, but after each semester grew more and more confident as I used what I had learned each semester to improve the next!",
        image: "pfw.png",
        keywords: ["Python", "Leadership", "Teaching", "Organization", "Patience", "Public Speaking",],
    },
    {
        date: "June 2024 - July 2024",
        title: "Lead QA Engineer & Data Analyst - PFW IAV Center",
        body: "In my role as a QA Engineer, I was tasked with performing a \"post-mortem\" analysis of a TAP project done by the PFW IAV Center alongside Rathburn Tool. The project had been finished, but Rathburn had found several anomalies and inconsistencies in the final report. I was then added to the team and tasked with investigating failure points due to my analytical skills. Upon reporting my findings, I was then asked to help in renewing the project given my past experience and familiarity with the causes for failure.",
        image: "pfw.png",
        keywords: ["Post-Mortem Analysis", "Debugging", "Data Preprocessing", "Data Analysis", "Data Visualization", "Python", "Pandas", "Matplotlib", "Technical Report Writing", "Documentation"],
    },
    {
        date: "July 2024",
        title: "Camp Assistant - PFW Summer Computing Camp",
        body: "During the summer of 2024, I worked with high school students at the second PFW Summer Computing Camp. The focus of this camp was to not only get students excited in the field of computing, but to also expose them to other computing fields that they might not have known were options. My background made me especially equipped for this because my studies put me in contact with computer engineering, IT, and CS (the computing fields represented at the camp).",
        image: "pfw.png",
        keywords: ["Teamwork", "Leadership", "Organization", "Teaching", "Patience"],
    },
    {
        date: "August 2023 - January 2024",
        title: "Teaching Assistant - Purdue Fort Wayne, Department of Computer Science",
        body: "For this teaching assistantship, I worked closely with a professor to help them develop materials for a Data Analytics and Visualization course that they now teach. My professor asked me to help him in this endeavor because he enjoyed the effort I put into my work combined with my general aptitude for data analysis. The truth is that I am excited to learn new things and break it down for others to learn too!",
        image: "pfw.png",
        keywords: ["Python", "Pandas", "Matplotlib", "Organization", "Data Preprocessing", "Data Analysis", "Data Visualization", "Teaching"],
    },
    {
        date: "August 2023 - December 2023",
        title: "Lead Data Analyst - PFW IAV Center",
        body: "I worked on a TAP project alongside SEAVAC and the PFW IAV Center wherein I cleaned, explored, and did a basic regression analysis on SEAVAC's sales data. This project is being used as an example to launch other TAP projects to give PFW students more opportunities to work with real-life data. Working with SEAVAC was an incredible experience that tested me in many ways which forced me to adapt and grow.",
        image: "pfw.png",
        keywords: ["Data Preprocessing", "Data Analysis", "Data Visualization", "Python", "Pandas", "Matplotlib", "Sci-Kit Learn", "Machine Learning", "Technical Report Writing", "Documentation"],
    },
    {
        date: "July 2023",
        title: "Camp Assistant - PFW Summer Computing Camp",
        body: "During the summer of 2023, I worked with high school students at the first PFW Summer Computing Camp. The focus of this camp was to not only get students excited in the field of computing, but to also expose them to other computing fields that they might not have known were options. My background made me especially equipped for this because my studies put me in contact with computer engineering, IT, and CS (the computing fields represented at the camp).",
        image: "pfw.png",
        keywords: ["Teamwork", "Leadership", "Organization", "Teaching", "Patience"],
    },
    {
        date: "August 2018 - May 2023",
        title: "CPET Bachelor's Program - Purdue Fort Wayne, School of Polytechnic",
        body: "I graduated PFW's Computer Engineering Technology program after 5 years of hard work. In addition to my major in Computer Engineering Technology, I pursued a minor in Math and a minor in Computer Science. I pursued these minors because I found a genuine fondness for Math and Computer Science that was introduced in the program, but not expanded upon. Alongside my studies, I did several extracurricular research projects, participated in a Co-Op, and made many good friends.",
        image: "pfw.png",
        keywords: ["Public Speaking", "Teamwork", "Organization", "Perseverance", "Electrical Circuit Analysis", "Digital Circuit Analysis", "Embedded Programming", "C", "Microprocessors", "Leadership", "Research", "Technical Writing", "Documentation", "Computer Networking", "Databases", "SQL", "Android Programming", "Information Security", "Java", "HCI", "Figma", "Data Structures", "Calculus", "Discrete Math", "Linear Algebra", "Statistics", "Punctuality", "Image Processing",],
    },
    {
        date: "August 2021 - May 2023",
        title: "Student Grader - Purdue Fort Wayne, Math Department",
        body: "After passing my statistics course with flying colors, the professor asked me to help him grade for his classes. I was honored and excited to work somewhere in academia, even if it was just grading. Unexpectedly, this constant exposure to statistics altered my approach to science, leading me to insist on using statistics in my research to improve its quality.",
        image: "pfw.png",
        keywords: ["Organization", "Problem Solving", "Basic statistics", "Dilligence", "Punctuality"],
    },
    {
        date: "July 2020 - January 2022",
        title: "Engineering Co-Op - Nidec Drive Systems",
        body: "I had a co-op with Nidec Drive Systems during the Summer and Fall semesters for two years. While at Nidec, I took on many different projects that spanned many subjects in the worlds of mechanical, electrical, computer, and software engineering. I also learned to work across specialties in a group with other co-ops. This co-op was a great experience and taught me quite a lot.",
        image: "nidec.jpg",
        keywords: ["Teamwork", "Research", "Testing", "Big data", "Data Analysis", "Data Visualization", "C", "Microprocessors", "Circuit Design", "VBA + Excel", "Python", "Pandas", "Matplotlib", "Dynomometers", "Engineering", "Problem Solving"],
    },
    {
        date: "August 2019 - July 2020",
        title: "Shift Manager - Pizza Hut of Fort Wayne",
        body: "I worked as a closing manager at Pizza Hut. I was responsible for overseeing and coordinating the back-of-house and the front-of-house; handling all closing operations such as cleaning up, closing the registers, and securing the building for the night. I enjoyed fostering a good work environment where things got done, but we had fun doing it.",
        image: "pizza_hut.jpg",
        keywords: ["Leadership", "Responsibility", "Teamwork", "Hospitality", "Conflict Resolution",],
    },
]

export let portfolio_items = [
    {
        title: "Untitled Unreal MMO",
        body: "My current project is on building a prototype fantasy MMORPG using Unreal Engine 5. I am taking this project as an opportunity to dive deep into all aspects of game development, such as landscaping, foliage, materials, meshes, animations, scripting, online play, sound design, AI, and more. I am using both C/C++ and Blueprints.",
        link: "#",
        link_text: "",
        image: "unrealmmo.png"
    },
    {
        title: "Master's Thesis",
        body: "My thesis is an analysis of how LLMs are used in introductory programming education and strategies for developing AI-resistant assessments using ideas developed in my lectures.",
        link: "https://doi.org/10.25394/PGS.29189570.v1",
        link_text: "DOI Link",
        image: "thesis.png"
    },
    {
        title: "Byte_Learn",
        body: "Byte_Learn is a short-form video webapp focused on educational content. The application was built using Laravel, Angular, PostgreSQL, Docker, and AWS.",
        link: "https://github.com/greead/ByteLearn",
        link_text: "GitHub Link",
        image: "bytelearn.png"
    },
    {
        title: "Developer's ToolBox",
        body: "The Developer's ToolBox is a website with several resources that I have personally found useful when programming and learning. The website is built with Express.js, Sass, SQLite, and React.",
        link: "https://github.com/greead/devtoolbox_cs537",
        link_text: "GitHub Link",
        image: "devtoolbox.png"
    },
    {
        title: "Data Analysis and Visualization",
        body: "I have contributed to several data analysis and visualization projects as part of schoolwork and industry work. My datasets and notebooks are located at Kaggle.",
        link: "https://www.kaggle.com/alekzandergreen",
        link_text: "Kaggle Link",
        image: "kaggle.png"
    },
    {
        title: "Object-Relational MMORPG Database",
        body: "This was a conceptual project with the goal of developing an MMORPG database that explores and embraces the full object-relational capabilities of PostgreSQL. The database is fully functional and complete along with a simple protoype client.",
        link: "https://github.com/greead/mmo_database_acs575/",
        link_text: "GitHub Link",
        image: "mmodatabase.png"
    },
    {
        title: "This Portfolio Website",
        body: "This portfolio website was written from scratch using SvelteKit. Everything you see here was done by hand, by me (minus any corporate logos).",
        link: "https://github.com/greead/portfolio",
        link_text: "GitHub Link",
        image: "website.png"
    },
    {
        title: "ByteBuddy",
        body: "ByteBuddy is a retro themed chatroom application that was built using Svelte, Django, and Redis. In addition to authentication and basic chatroom capabilities, the application features fully functional and syncronized IDEs so that users can code together!",
        link: "https://github.com/greead/bytebuddy_chat",
        link_text: "GitHub Link",
        image: "bytebuddy.png"
    },
    // {
    //     title: "Smart Medicine Cap and Notification Application",
    //     body: "This was my senior design project when finishing my Computer Engineering Technology Bachelor's. The project is composed of two parts: a smart medicine cap with a Bluetooth Low Energy (BLE) enabled microprocessor and an Android app that connects to the cap. This project was intended to help people who often forget whether or not they've taken their medicine by logging when they open/close their medicine, sending emergency alerts, and more.",
    //     link: "https://github.com/greead/smart_medicine_cap",
    //     link_text: "GitHub Link",
    //     image: "medicine_cap.png"
    // },
    {
        title: "Research into the Need for Undergraduate Research at Commuter Campuses",
        body: "This research project investigated if and why commuter campuses should include resources and ways for undergraduate students to participate in research for the benefit of the students, faculty, and campus. This project helped to jump-start and get funding for a web portal project intended to connect students with faculty for research purposes.",
        link: "https://mdon.library.pfw.edu/digital/collection/p16776coll9/id/2300/rec/65",
        link_text: "Poster Link",
        image: "undergrad_research_poster.png"
    },
    {
        title: "Research into the Impact of Different Displays on Human Emotions",
        body: "This research project used VR alongside other modern displays to test the emotional response of participants. This research was done to see if devices like VR headsets could produce enhanced emotional responses, which could make for a useful tool in many applications. The results were inconclusive.",
        link: "https://mdon.library.pfw.edu/digital/collection/p16776coll9/id/2299/rec/63",
        link_text: "Poster Link",
        image: "vr_poster.png"
    },
    // {
    //     title: "Steps Tracker Game",
    //     body: "This app was developed to encourage walking and fitness by tracking steps and allowing users to spend their steps on upgrades for a clicker game, allowing users to gain 'clicks' by walking instead.",
    //     link: "",
    //     link_text: "",
    //     image: "steps_app.jpg"
    // },
    // {
    //     title: "LED Prototyping Box",
    //     body: "This a prototyping box that used an embedded microprocessor to measure the accuracy of manufactured electrical motor sensors. It displays the info to an LED screen and was essential for starting the manufacturing process.",
    //     link: "",
    //     link_text: "",
    //     image: "LED_box.png"
    // },

]
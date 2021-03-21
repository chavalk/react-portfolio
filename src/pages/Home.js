import React from 'react';

const Home = () => {
    return (
        <div class="container" id="container-index">

            <div class="row">

                <div class="col-md-12">

                    <h3>Hello, my name is Jose Garcia.</h3>

                    <p class="p-index">I am an aspiring Full-Stack Web Developer currently attending a Bootcamp.</p>
                    <p class="p-index">Please take a moment to review my <a href="portfolio.html" id="portfolio">portfolio</a> to see the projects I've worked on thus far.</p>
                    <p class="p-index">Some of the languages and technologies I use are CSS3, HTML5, JavaScript, Node.js, Express.js, MySQL, and MongoDB.</p>
                    <p class="p-index">I can be reached by email at <a href="mailto:chavalk@hotmail.com" id="email">chavalk@hotmail.com</a> or by phone at <a href="tel:+1-210-782-7463" id="phone">210-782-7463</a>.</p>
                    <p class="p-index">Based in <a href="https://www.google.com/maps/place/San+Antonio,+TX/@29.481137,-98.7945945,10z/data=!3m1!4b1!4m5!3m4!1s0x865c58af04d00eaf:0x856e13b10a016bc!8m2!3d29.4241219!4d-98.4936282" id="location" target="_blank">San Antonio, Texas</a>. Feel free to check my <a href="technical-resume.pdf" id="resume" target="_blank">resume</a>.</p>

                    <div class="icons">
                        <a href="https://www.linkedin.com/in/jose-garcia-9635337a" target="_blank" id="linkedin"><i class="fab fa-linkedin-in fa-3x"></i></a>
                        <a href="https://github.com/chavalk" target="_blank" id="github"><i class="fab fa-github fa-3x"></i></a>
                    </div>


                </div>
            </div>

        </div>
    );
}

export default Home;
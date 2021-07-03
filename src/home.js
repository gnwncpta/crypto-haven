import anime from "animejs/lib/anime.es.js";

const logo = document.querySelector('header img');
const disclaimer = document.querySelector('#disc');
const blackScreen = document.querySelector('.black');
const getStartedHome = document.querySelector('button.get-started');

function Home(){

    if(localStorage.getItem('disclaimer') == null){
        document.body.classList.toggle('freeze');
        disclaimer.innerHTML = `<section id="disclaimer">
                                    <h1>Disclaimer</h1>
                                    <p>This project is for Personal Purpose not for Commercial Purpose<br>Because on this site i use big tech company's logo like Google, Microsoft, IBM</p>
                                    <button class="understand">Alright, I Understand!</button>
                                </section>`;

        blackScreen.classList.toggle('hidden');
    }

    // Event Binding
    document.body.addEventListener('click', (e) => {
        if(e.target.classList.contains('understand')){
            document.body.classList.toggle('freeze');
            blackScreen.classList.toggle('hidden');
            disclaimer.innerHTML = '';
            localStorage.setItem('disclaimer', 'Ever');
        }
    });

    getStartedHome.addEventListener('mouseover', () => {
        anime({
            target: getStartedHome,
            translateY: '100px',
            easing: 'easeInOutExpo'
        });
    });


    logo.addEventListener('click', () => {
        window.location.href = './index.html';
    });
}

export default Home;
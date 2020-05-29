const hamburger = document.getElementById('hamburger');
const list = document.getElementById('header-list');
const links = document.querySelectorAll('.link');
const lines = document.querySelectorAll('.line');


hamburger.addEventListener('click', () => {
    list.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });

    lines.forEach(line => {
        line.classList.toggle('color');
    });

});

////////

const galerijaBtn = document.querySelectorAll('.card-button')[0];
const card = document.querySelectorAll('.card')[0];
const galerijaBtn2 = document.querySelectorAll('.card-button')[1];
const card2 = document.querySelectorAll('.card')[1];
const galerijaBtn3 = document.querySelectorAll('.card-button')[2];
const card3 = document.querySelectorAll('.card')[2];
const pageContainer = document.querySelector('#page-container');

galerijaBtn.addEventListener('mouseover', () => {

    card.classList.add('card-upper');
    card2.classList.remove('card-upper');
    card3.classList.remove('card-upper');

    card.style.transition = '1s';
});

galerijaBtn2.addEventListener('mouseover', () => {

    card2.classList.add('card-upper');
    card.classList.remove('card-upper');
    card3.classList.remove('card-upper');

    card2.style.transition = '1s';
});

galerijaBtn3.addEventListener('mouseover', () => {

    card3.classList.add('card-upper');
    card2.classList.remove('card-upper');
    card.classList.remove('card-upper');

    card3.style.transition = '1s';

});

function appearAnimation() {
    let screenPosition = window.innerHeight;

    let card1 = document.querySelector('.animated-card1');
    let card1Position = card1.getBoundingClientRect().top;

    let card2 = document.querySelector('.animated-card2');
    let card2Position = card2.getBoundingClientRect().top;

    let card3 = document.querySelector('.animated-card3');
    let card3Position = card3.getBoundingClientRect().top;

    let card4 = document.querySelector('.animated-card4');
    let card4Position = card4.getBoundingClientRect().top;

    if (card1Position < screenPosition) {
        card1.classList.add('animated-card1-fade');
    }

    if (card2Position < screenPosition) {
        card2.classList.add('animated-card2-fade');
    }

    if (card3Position < screenPosition) {
        card3.classList.add('animated-card3-fade');
    }

    if (card4Position < screenPosition) {
        card4.classList.add('animated-card4-fade');
    }

/*    
    card2.classList.add('animated-card2-fade');
    console.log('dads')
    card3.classList.add('animated-card3-fade');
*/
}

setTimeout(appearAnimation, 1000);

window.addEventListener( 'scroll', appearAnimation );
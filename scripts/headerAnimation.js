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
import homePageLoad from './home';
import aboutPageLoad from './about';
import menuPageLoad from './menu';

const content = document.getElementById('content');

const homeButton = document.getElementById('homeButton');
homeButton.addEventListener('click', function() {loadPage(homePageLoad())});

const menuButton = document.getElementById('menuButton');
menuButton.addEventListener('click', function() {loadPage(menuPageLoad())});

const aboutButton = document.getElementById('aboutButton');
aboutButton.addEventListener('click', function() {loadPage(aboutPageLoad())});

console.log("TEST");
homePageLoad();
//const content = document.getElementById("content");
//content.innerHTML = initialPageLoad;




function loadPage (page) {
    console.log(page);
    content.innerHTML = '';
    content.appendChild(page);
}
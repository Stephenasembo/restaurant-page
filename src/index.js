import { homeContent } from './initial-page'
import { menuContent } from './menu';
import { aboutContent } from './about';

const dom = (function cacheDom () {
    const content = document.querySelector('#content');
    const homeBtn = document.querySelector('#home');
    const menuBtn = document.querySelector('#menu');
    const aboutBtn = document.querySelector('#about');

    return {
        content,
        homeBtn,
        menuBtn,
        aboutBtn,
    }
})()

const renderHtml = (function () {
    const homePage = function(){
        clearDisplay();
        dom.content.appendChild(homeContent);
    }

    const menuPage = function(){
        clearDisplay();
        dom.content.appendChild(menuContent);
    }

    const aboutPage = function(){
        clearDisplay();
        dom.content.appendChild(aboutContent);
    }


    return {
        homePage,
        menuPage,
        aboutPage,
    }
})()

const addEventListeners = (function (){
    dom.homeBtn.addEventListener('click', renderHtml.homePage);
    dom.menuBtn.addEventListener('click', renderHtml.menuPage);
    dom.aboutBtn.addEventListener('click', renderHtml.aboutPage);
})()

function clearDisplay (){
    content.innerText = ''; 
}
import { homePara } from './initial-page'
import { menuPara } from './menu';
import { aboutPara } from './about';

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
        dom.content.appendChild(homePara);
    }

    const menuPage = function(){
        dom.content.appendChild(menuPara);
    }

    const aboutPage = function(){
        dom.content.appendChild(aboutPara);
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
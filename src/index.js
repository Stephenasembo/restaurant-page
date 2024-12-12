import { homePara } from './initial-page'
import { menuPara } from './menu';
import { aboutPara } from './about';

const content = document.querySelector('#content');

const renderHtml = (function () {
    const homePage = function(){
        content.appendChild(homePara);
    }

    const menuPage = function(){
        content.appendChild(menuPara);
    }

    const aboutPage = function(){
        content.appendChild(aboutPara);
    }


    return {
        homePage,
        menuPage,
        aboutPage,
    }
})()


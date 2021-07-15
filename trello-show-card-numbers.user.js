// ==UserScript==
// @name         Trello Show Card Numbers
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Show Card Number for trello.com
// @author       yokeTH
// @match        https://trello.com/b/7iVZq9m3/dev-tasks
// @icon         https://www.google.com/s2/favicons?domain=trello.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // --- config ---
    const enableBeautifulNum = true;
    const fontColor = "#F8F8FF";
    const bgColor = "#DB7093";
    const waitLoad = 3
    // execute when page loaded
    window.addEventListener('load', () => {
        // get html element by class `card-short-id`
        const htmlElement = document.getElementsByClassName("card-short-id");
        
        // wait load
        setTimeout(()=>{
            // loop remove hide class `hide` all element in `htmlElement`
            for (let i = 0 ; i < htmlElement.length ; i+=1){
                htmlElement[i].classList.remove("hide");
                if (enableBeautifulNum) {
                    htmlElement[i].style.color = fontColor;
                    htmlElement[i].style.border = "0px solid";
                    htmlElement[i].style.borderRadius = "10%";
                    htmlElement[i].style.backgroundColor = bgColor;
                    htmlElement[i].style.padding = "2px";
                    htmlElement[i].style.marginRight = "2px";
                }
            }
        },waitLoad * 1000)
    })
})();
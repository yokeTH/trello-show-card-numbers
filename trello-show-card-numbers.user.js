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

    // execute when page loaded
    window.addEventListener('load', () => {
        // get html element by class `card-short-id`
        const htmlElement = document.getElementsByClassName("card-short-id");
        
        // wait 3 sec
        setTimeout(()=>{
            // loop remove hide class `hide` all element in `htmlElement`
            for (let i = 0 ; i < htmlElement.length ; i+=1){
                htmlElement[i].classList.remove("hide");
            }
        },3000)
    })
})();
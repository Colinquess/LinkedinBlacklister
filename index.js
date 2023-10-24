// ==UserScript==
// @name         linkedin company blocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  linkedin blacklister for companys list and allready entered jobs
// @author       Colinquess
// @match        *.linkedin.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var blockedCompanys = ["Oowlish", "Crossover", "Stone", "PicPay", "Braintrust", "Workling"];

    setInterval(()=>{

    var jobPosts = Array.from(document.getElementsByClassName("job-card-container"));
    //console.log(jobPosts);

    jobPosts.forEach(a => {
        var company = a.getElementsByClassName("job-card-container__primary-description")[0].innerText;
       // console.log(company);

        if (blockedCompanys.includes(company))
        {
            a.remove();
        }

        if(a.getElementsByClassName("tvm__text tvm__text--neutral").length > 0)
        {
            a.remove();
        }

    });
    },1000)

})();

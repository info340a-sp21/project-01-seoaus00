// File for the javascript for project 1

"use strict";

function createPMCard(obj) {
    d3.csv("../data/job_skills.csv").then(function(data) {
        let outerDiv = document.createElement('div');
        outerDiv.classList.add('listing', 'container');
        let iElement = document.createElement('i');
        iElement.classList.add('fa', 'fa-users', 'fa-2x');
        iElement.setAttribute('aria-hidden', 'true');
        let innerDiv = document.createElement('div');
        innerDiv.classList.add('description');
        let h3 = document.createElement('h3');
        h3.classList.add('job-name');
        h3.textContent = obj.Title;
        let p = document.createElement('p');
        p.textContent = obj.Responsibilities;

        innerDiv.appendChild(h3);
        innerDiv.appendChild(p);
        outerDiv.appendChild(iElement);
        outerDiv.appendChild(innerDiv);
    })
}

function createFinanceCard(obj) {
    d3.csv("../data/job_skills.csv").then(function(data) {
        let outerDiv = document.createElement('div');
        outerDiv.classList.add('listing', 'container');
        let iElement = document.createElement('i');
        iElement.classList.add('fa', 'fa-usd', 'fa-2x');
        iElement.setAttribute('aria-hidden', 'true');
        let innerDiv = document.createElement('div');
        innerDiv.classList.add('description');
        let h3 = document.createElement('h3');
        h3.classList.add('job-name');
        h3.textContent = obj.Title;
        let p = document.createElement('p');
        p.textContent = obj.Responsibilities;

        innerDiv.appendChild(h3);
        innerDiv.appendChild(p);
        outerDiv.appendChild(iElement);
        outerDiv.appendChild(innerDiv);
    })
}

function createSalesCard(obj) {
    d3.csv("../data/job_skills.csv").then(function(data) {
        let outerDiv = document.createElement('div');
        outerDiv.classList.add('listing', 'container');
        let iElement = document.createElement('i');
        iElement.classList.add('fa', 'fa-line-chart', 'fa-2x');
        iElement.setAttribute('aria-hidden', 'true');
        let innerDiv = document.createElement('div');
        innerDiv.classList.add('description');
        let h3 = document.createElement('h3');
        h3.classList.add('job-name');
        h3.textContent = obj.Title;
        let p = document.createElement('p');
        p.textContent = obj.Responsibilities;

        innerDiv.appendChild(h3);
        innerDiv.appendChild(p);
        outerDiv.appendChild(iElement);
        outerDiv.appendChild(innerDiv);
    })
}

function createMarketingCard(obj) {
    d3.csv("../data/job_skills.csv").then(function(data) {
        let outerDiv = document.createElement('div');
        outerDiv.classList.add('listing', 'container');
        let iElement = document.createElement('i');
        iElement.classList.add('fa', 'fa-area-chart', 'fa-2x');
        iElement.setAttribute('aria-hidden', 'true');
        let innerDiv = document.createElement('div');
        innerDiv.classList.add('description');
        let h3 = document.createElement('h3');
        h3.classList.add('job-name');
        h3.textContent = obj.Title;
        let p = document.createElement('p');
        p.textContent = obj.Responsibilities;

        innerDiv.appendChild(h3);
        innerDiv.appendChild(p);
        outerDiv.appendChild(iElement);
        outerDiv.appendChild(innerDiv);
    })
}

function createTSCard(obj) {
    d3.csv("../data/job_skills.csv").then(function(data) {
        let outerDiv = document.createElement('div');
        outerDiv.classList.add('listing', 'container');
        let iElement = document.createElement('i');
        iElement.classList.add('fa', 'fa-laptop', 'fa-2x');
        iElement.setAttribute('aria-hidden', 'true');
        let innerDiv = document.createElement('div');
        innerDiv.classList.add('description');
        let h3 = document.createElement('h3');
        h3.classList.add('job-name');
        h3.textContent = obj.Title;
        let p = document.createElement('p');
        p.textContent = obj.Responsibilities;

        innerDiv.appendChild(h3);
        innerDiv.appendChild(p);
        outerDiv.appendChild(iElement);
        outerDiv.appendChild(innerDiv);
    })
}

function createUXCard(obj) {
    d3.csv("../data/job_skills.csv").then(function(data) {
        let outerDiv = document.createElement('div');
        outerDiv.classList.add('listing', 'container');
        let iElement = document.createElement('i');
        iElement.classList.add('fa', 'fa-smile-o', 'fa-2x');
        iElement.setAttribute('aria-hidden', 'true');
        let innerDiv = document.createElement('div');
        innerDiv.classList.add('description');
        let h3 = document.createElement('h3');
        h3.classList.add('job-name');
        h3.textContent = obj.Title;
        let p = document.createElement('p');
        p.textContent = obj.Responsibilities;

        innerDiv.appendChild(h3);
        innerDiv.appendChild(p);
        outerDiv.appendChild(iElement);
        outerDiv.appendChild(innerDiv);
    })
}

// <div class="listing container">
    // <!-- <img src="img/pm.png" alt="program management logo"> --> */}
//    <i class="fa fa-users fa-2x" aria-hidden="true"></i>

  //  <div class="description">
//    <h3 class="job-name">
//      Google Cloud Program Manager
//    </h3>
//     <p class="job-description">Shape, shepherd, ship, and show technical programs designed to
//     support the work of Cloud Customer Engineers and Solutions Architects.</p>
// </div>
// </div>
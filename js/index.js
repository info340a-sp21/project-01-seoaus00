// File for the javascript for project 1

"use strict";

function createPMCard(obj) {
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

    return outerDiv;
}

function createFinanceCard(obj) {
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

    return outerDiv;
}

function createSalesCard(obj) {
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

    return outerDiv;
}

function createMarketingCard(obj) {
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

    return outerDiv;
}

function createTSCard(obj) {
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

    return outerDiv;
}

function createUXCard(obj) {
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

    return outerDiv;
}

function renderJobListings() {
    d3.csv("../data/job_skills.csv").then(function(data) {
        let listingArea = document.querySelector('#card-things');
        listingArea.innerHTML = '';
        for (let i = 0; i < 6; i++) {
            let jobType = data[i].Category;
            let listing;
            if (jobType.includes('Finance')) {
                listing = createFinanceCard(data[i])
            } else if (jobType.includes('Program Management')) {
                listing = createPMCard(data[i]);
            } else if (jobType.includes('Sales')) {
                listing = createSalesCard(data[i]);
            } else if (jobType.includes('Marketing')) {
                listing = createMarketingCard(data[i]);
            } else if (jobType.includes('Technical Solutions')) {
                listing = createTSCard(data[i]);
            } else if (jobType.includes('User Experience')) {
                listing = createUXCard(data[i]);
            }

            listingArea.append(listing);
        }
    });
}

renderJobListings();

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
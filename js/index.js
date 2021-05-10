// File for the javascript for project 1

"use strict";

// function getData() {
//     fetch("../data/job_information.csv")
//     .then(function(response) {
//         return response.parse();
//     })
//     .then(function(data) {
//         console.log(data);
//     })
// }

// getData();

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
    d3.csv("../data/job_information.csv").then(function(data) {
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

function renderFilter(jobObjects) {
    let listingArea = document.querySelector('#card-things');
    listingArea.innerHTML = '';
    for (let i = 0; i < 6; i++) {
        let jobType = jobObjects[i].Category;
        let listing;
        if (jobType.includes('Finance')) {
            listing = createFinanceCard(jobObjects[i])
        } else if (jobType.includes('Program Management')) {
            listing = createPMCard(jobObjects[i]);
        } else if (jobType.includes('Sales')) {
            listing = createSalesCard(jobObjects[i]);
        } else if (jobType.includes('Marketing')) {
            listing = createMarketingCard(jobObjects[i]);
        } else if (jobType.includes('Technical Solutions')) {
            listing = createTSCard(jobObjects[i]);
        } else if (jobType.includes('User Experience')) {
            listing = createUXCard(jobObjects[i]);
        }

        listingArea.append(listing);
    }
}

// Filtering for program management
let filter1 = document.querySelector('#job-type-1');
filter1.addEventListener('change', function() {
    if (this.checked) {
        d3.csv("../data/job_information.csv").then(function(data) {
            for (let i = 0; i < data.length; i++) {
                let category = data[i].Category;
                if (!(category.includes('Program Management'))) {
                    data.splice(i, 1);
                    i = i - 1;
                }
            }
            renderFilter(data);
        })
    } else {
        renderJobListings();
    }
})

// Filtering for Finance
let filter2 = document.querySelector('#job-type-2');
filter2.addEventListener('change', function() {
    if (this.checked) {
        d3.csv("../data/job_information.csv").then(function(data) {
            for (let i = 0; i < data.length; i++) {
                let category = data[i].Category;
                if (!(category.includes('Finance'))) {
                    data.splice(i, 1);
                    i = i - 1;
                }
            }
            renderFilter(data);
        })
    } else {
        renderJobListings();
    }
})


// Filtering for Sales
let filter3 = document.querySelector('#job-type-3');
filter3.addEventListener('change', function() {
    if (this.checked) {
        d3.csv("../data/job_information.csv").then(function(data) {
            for (let i = 0; i < data.length; i++) {
                let category = data[i].Category;
                if (!(category.includes('Sales'))) {
                    data.splice(i, 1);
                    i = i - 1;
                }
            }
            renderFilter(data);
        })
    } else {
        renderJobListings();
    }
})


// Filtering for Marketing
let filter4 = document.querySelector('#job-type-4');
filter4.addEventListener('change', function() {
    if (this.checked) {
        d3.csv("../data/job_information.csv").then(function(data) {
            for (let i = 0; i < data.length; i++) {
                let category = data[i].Category;
                if (!(category.includes('Marketing'))) {
                    data.splice(i, 1);
                    i = i - 1;
                }
            }
            renderFilter(data);
        })
    } else {
        renderJobListings();
    }
})


// Filtering for Technical Solutions
let filter5 = document.querySelector('#job-type-5');
filter5.addEventListener('change', function() {
    if (this.checked) {
        d3.csv("../data/job_information.csv").then(function(data) {
            for (let i = 0; i < data.length; i++) {
                let category = data[i].Category;
                if (!(category.includes('Technical Solutions'))) {
                    data.splice(i, 1);
                    i = i - 1;
                }
            }
            renderFilter(data);
        })
    } else {
        renderJobListings();
    }
})


// Filtering for UX 
let filter6 = document.querySelector('#job-type-6');
filter6.addEventListener('change', function() {
    if (this.checked) {
        d3.csv("../data/job_information.csv").then(function(data) {
            for (let i = 0; i < data.length; i++) {
                let category = data[i].Category;
                if (!(category.includes('User Experience'))) {
                    data.splice(i, 1);
                    i = i - 1;
                }
            }
            renderFilter(data);
        })
    } else {
        renderJobListings();
    }
})

// going to try and add an event listener to the job listings 
// going to make it so that when the job is clicked on it shows the qualifications, then when clicked on
// for a second time it will switch back 
// get the data pertaining to the card
// maybe loop through and see what value matches the job title 
// display the qualifications

let jobListing = document.querySelector('.listing');
jobListing.addEventListener('click', function() {

})

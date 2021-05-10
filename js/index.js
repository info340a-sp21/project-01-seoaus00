// File for the javascript for project 1

"use strict";

// We tried to implement parsing our csv with fetch, but since it is a local file we were 
// unable to successfully figure it out. That being said, we decided to use D3.js to parse our 
// csv so that it automatically transformed the text data into an object of arrays

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


// Template used from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
//Get the button:
let mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


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

    outerDiv.addEventListener('click', function() {
        if (!(outerDiv.classList.contains('selected'))) {
            outerDiv.classList.add('selected');
            h3.textContent = 'Minimum Qualifications';
            p.textContent = obj['Minimum Qualifications'];
        } else {
            outerDiv.classList.remove('selected');
            h3.textContent = obj.Title;
            p.textContent = obj.Responsibilities;
        }
    })

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

    outerDiv.addEventListener('click', function() {
        if (!(outerDiv.classList.contains('selected'))) {
            outerDiv.classList.add('selected');
            h3.textContent = 'Minimum Qualifications';
            p.textContent = obj['Minimum Qualifications'];
        } else {
            outerDiv.classList.remove('selected');
            h3.textContent = obj.Title;
            p.textContent = obj.Responsibilities;
        }
    })

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

    outerDiv.addEventListener('click', function() {
        if (!(outerDiv.classList.contains('selected'))) {
            outerDiv.classList.add('selected');
            h3.textContent = 'Minimum Qualifications';
            p.textContent = obj['Minimum Qualifications'];
        } else {
            outerDiv.classList.remove('selected');
            h3.textContent = obj.Title;
            p.textContent = obj.Responsibilities;
        }
    })

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

    outerDiv.addEventListener('click', function() {
        if (!(outerDiv.classList.contains('selected'))) {
            outerDiv.classList.add('selected');
            h3.textContent = 'Minimum Qualifications';
            p.textContent = obj['Minimum Qualifications'];
        } else {
            outerDiv.classList.remove('selected');
            h3.textContent = obj.Title;
            p.textContent = obj.Responsibilities;
        }
    })

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

    outerDiv.addEventListener('click', function() {
        if (!(outerDiv.classList.contains('selected'))) {
            outerDiv.classList.add('selected');
            h3.textContent = 'Minimum Qualifications';
            p.textContent = obj['Minimum Qualifications'];
        } else {
            outerDiv.classList.remove('selected');
            h3.textContent = obj.Title;
            p.textContent = obj.Responsibilities;
        }
    })

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

    outerDiv.addEventListener('click', function() {
        if (!(outerDiv.classList.contains('selected'))) {
            outerDiv.classList.add('selected');
            h3.textContent = 'Minimum Qualifications';
            p.textContent = obj['Minimum Qualifications'];
        } else {
            outerDiv.classList.remove('selected');
            h3.textContent = obj.Title;
            p.textContent = obj.Responsibilities;
        }
    })

    return outerDiv;
}

function renderJobListings() {
    d3.csv("/data/job_information.csv").then(function(data) {
        let listingArea = document.querySelector('#card-things');
        listingArea.innerHTML = '';
        for (let i = 0; i < data.length; i++) {
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
    for (let i = 0; i < jobObjects.length; i++) {
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
        d3.csv("/data/job_information.csv").then(function(data) {
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
        d3.csv("/data/job_information.csv").then(function(data) {
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
        d3.csv("/data/job_information.csv").then(function(data) {
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
        d3.csv("/data/job_information.csv").then(function(data) {
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
        d3.csv("/data/job_information.csv").then(function(data) {
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
        d3.csv("/data/job_information.csv").then(function(data) {
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

let hamburger = document.querySelector('#hamburger-menu');
let navLinks = document.querySelector('.nav-links');
let links = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    console.log('click');
    navLinks.classList.toggle('open');
});
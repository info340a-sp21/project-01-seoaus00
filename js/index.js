// File for the javascript for project 1

"use strict";

d3.csv("../data/job_skills.csv").then(function(data) {
    var jobs = data;
    console.log(jobs);
})
// function() {

//     window.addEventListener("load", init);

//     function init() {
//     //add event listeners here
//     //call fuctions 
//     }

//     const readcsv = require('readcsv');
//     const file = '../data/job_skills.csv';

//     readcsv (true, file, (err, data) => {
//         if (err) {
//             console.log(err);
//             return;
//         }

//     console.log(data);

// }
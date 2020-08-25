// // // Initialize the HTTP request to a server located at "someURL"
// var xhr = new XMLHttpRequest();
// xhr.open('get', '/someURL');

// //Track the state changes of the request.
// xhr.onreadystatechange = function () {
//     var DONE = 4; // readyState 4 means the request is done.var OK = 200; // status 200 is a successful return.if (xhr.readyState === DONE) {
//         if (xhr.status === OK) {
//             console.log(xhr.responseText); // 'This is the returned text.'
//         } else {
//             console.log('Error: ' + xhr.status); // An error occurred during the request.

//         }
//     }

// //Send the request to send-ajax-result.php
// xhr.send(null);


// $.get("https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521", function(result){
//     //console.log(result)
// })

// //request the data with a GET request
// $.get("https://jsonplaceholder.typicode.com/users", function(users){
//   //extract the geo data of the first user

//   let lat = users[0].address.geo.lat
//   let long = users[0].address.geo.lng

//   //log the dataconsole.log(`${lat}, ${long}`) //prints -37.3159, 81.1496
// })


//spot-check1
// $.get("https://www.googleapis.com/books/v1/volumes?q=title:name%20of%20the%20wind", function(result){
//     //console.log(result)
// })

//ex3
const fetch = function(queryType, queryValue){
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function(result) {
            for(let item of result.items) {
                console.log(item.volumeInfo.title)
                console.log(item.volumeInfo.authors)
            }
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
});

fetch("title", "The Wise Man's Fear")
//  fetch("isbn", 9789814561778)
//  fetch("title", "How to Win Friends and Influence People in the Digital Age")

 //ex1-2
// const fetch = function (queryType, queryValue) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: function (data) {
//             console.log(data);
//         },
//         error: function (xhr, text, error) {
//             console.log(text);
//         }
//     }); 
//  }
 
//  fetch("title", "The Wise Man's Fear")
//  fetch("isbn", 9789814561778)
//  fetch("title", "How to Win Friends and Influence People in the Digital Age")

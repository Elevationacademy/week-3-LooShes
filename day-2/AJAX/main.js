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
                
                result.items.forEach(element => console.log(element.volumeInfo.authors))
                result.items.forEach(element => console.log(element.volumeInfo.title))

                for(i=0; i<result.items.length; i++){
                    result.items[i].volumeInfo.industryIdentifiers.forEach(element => console.log(element.type))
                }
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
});
}
fetch("title", "The Wise Man's Fear")
fetch("isbn", 9789814561778)
fetch("title", "How to Win Friends and Influence People in the Digital Age")

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
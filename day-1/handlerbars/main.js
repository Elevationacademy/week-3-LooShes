// relevant syntax
// const source = $('#store-template').html();
// const template = Handlebars.compile(source)
// const newHTML = template({item: "bread", price: "15"});
// $('.items').append(newHTML);

// sc1
// var items = [
//     { item: "cheese", price: 15 },
//     { item: "arak", price: 68 },
//     { item: "hummus", price: 15 },
//     { item: "pita", price: 5 }
//   ]
  
  // Write a for loop here that loops through
  // the items array, creates a template for each
  // item, and appends it to the items div.
//   const source = $('#store-template').html()
//   const template = Handlebars.compile(source)

//   for(let item of items) {
//     const newHTML = template({item: item.item, price: item.price})
//     $('.items').append(newHTML)
//   }

  //sc2
//   const source = $('#store-template').html()
//   const template = Handlebars.compile(source)
//   var classData = {
//     classmates: [
//         {name: "That on gal", description: "Always has the ansswer", socialNetwork: true},
//         {name: "The weird dude", description: "Quick with a smile", socialNetwork: false},
//         {name: "Taylor", description: "Just Taylor", socialNetwork: true}
//     ]
// };

// const newHTML = template(classData)
// $('.items').append(newHTML)

//sc3 - multiple handlerbars
const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

const renderFirst = function(data){
    const source = $('#first-template').html()
    const template = Handlebars.compile(source)
    let newHTML = template({animals: data})
    $('#special').append(newHTML)  
  }
  
  const renderSecond = function(data){
    const source = $('#second-template').html()
    const template = Handlebars.compile(source)
    let newHTML = template({languages: data})
    $('.items').append(newHTML)
  }
  
  renderFirst(animals)
  renderSecond(languages)
  
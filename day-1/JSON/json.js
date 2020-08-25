import jsonObhect from '/.json'
   
// Defining our recipe class 
class recipe { 
    name: string; 
    serves: number; 
    ingredients: array; 
    directions: array;
    calories: number,
    healthy: boolean 
} 
   
// Object.assign() will clone jsonData into 
// Todo class object Storing the new class 
// object in a typescript variable 
let recipe = Object.assign(new recipe(), jsonData) 

console.log(recipe.ingredients.filter(i => i.name == "garlic powder")[0].count) //should print 2
console.log(recipe.healthy) //should print true
console.log(recipe.calories) //should print 250
console.log(recipe.directions[0]) //should print "Cut potatoes into half inch thick slices"
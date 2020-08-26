// class Person {
//     constructor(name, startYear) {
//         this.name = name
//         this.startYear = startYear
//         this.courses = []
//     }

//     addCourse(course) {
//         this.courses.push(course)
//     }
// }


// class Student extends Person {
//     constructor(name, startYear) {
//         super(name, startYear)
//         this.grades = []
//     }

//     receiveGrade(courseName, finalGrade) {
//         this.grades.push({
//             course: courseName,
//             grade: finalGrade
//         })
//     }

//     //method overriding!
//     // addCourse(course) {
//     //     if (this.courses.indexOf(course) == -1) {
//     //         super.addCourse(course)
//     //     }
//     // }
// }

// //spot-check3
// class Teacher extends Person {
//     constructor(name, startYear, salary) {
//         super(name, startYear)
//         this.salary = salary
//         this.courses = {} //override the courses attribute
//     }

//     giveGrade(student, courseName, grade) {
//         student.receiveGrade(courseName, grade)
//     }

//     addCourse(course) {
//         if(this.courses[course]) {
//             return this.courses[course]++
//         }       
//         this.courses[course] = 1
//     }
// }

// // const t1 = new Teacher("Cassandra", 2002, 40000)
// // t1.addCourse("Algebra II")
// // t1.addCourse("Algebra II")
// // t1.addCourse("Trigonometry")
// // console.log(t1.courses) //should print {Algebra II: 2, Trigonometry: 1}



// //custom
// // class Teacher extends Person {
// //     constructor(name, startYear, salary) {
// //         super(null, startYear)
// //         this.salary = salary
// //         this.name = "Professor " + name
// //     }
// // }
// // const t1 = new Teacher("Cassandra", 2002, 40000)
// // console.log(t1.name)

// // const s1 = new Student("Ronda", 2017)
// // console.log(s1.name) //prints "Ronda"

// // s1.addCourse("Algebra II")
// // console.log(s1.courses) //prints ["Algebra II"]

// // const t1 = new Teacher("Cassandra", 2002, 40000)

// // t1.giveGrade(s1, "Algebra II", 82)
// // const firstGrade = s1.grades[0]

// // console.log(`${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`)
// //above should print "Ronda received an 82 in Algebra II"﻿

// //Deeper Inheritance
// class TeachingAssistant extends Teacher {
//     constructor(name, startYear, salary) {
//         super(name, startYear, salary)
//     }
// }

// const s1 = new Student("Ronda", 2017)
// const ta1 = new TeachingAssistant("Brandon", 2014, 20000)

// ta1.addCourse("General Relativity")
// //ta1.giveGrade(s1, "General Relativity", 91)

// //console.log(ta1.salary) //prints 20000
// //console.log(ta1.courses) //prints {"General Relativity": 1}
// //console.log(s1.grades) //prints [{course: "General Relativity", grade: 91}]

// console.log(ta1.toString())
// console.log(JSON.stringify(ta1))

//Comprehension Check
// class Page{
//     constructor(text){
//         this.text = text
//     }
// }

// class Notebook{
//     constructor(pageNum){
//         this.pageNum = pageNum
//         this.pages = []
//     }

//     write(page){
//         this.pages.push(page)
//     }
// }

// class Diary extends Notebook{
//     constructor(pageNum, owner){
//         super(pageNum)
//         this.owner = owner
//     }
// }

// const myDiary = new Diary(50, "Shila")
// const mathNotebook = new Notebook(200)
// const p1 = new Page("Pythagoreas realized tha the sum of the squares of the sides of a right triangle will equal the square of the hypoteneuse")
// myDiary.pages.push(new Page("I think I'm in love with a Greek man."))

// //console.log(myDiary.pages[0].text)
// console.log(mathNotebook.pages[0].text)

class APIManager{
    constructor(route){
        this.route = route
        this.data = {}
    }

    fetch(){
        $.get(this.route, function(response){
            this.data = response
        })
    }
}

class Renderer{
    construcor(scriptID, containerID, apiManager){
        this.scriptID = scriptID
        this.containerID = containerID
        this.apiManager = apiManager
    }

    render(){    
        let source = $("#" + this.scriptID).html()
        let template = Handlebars.compile(source)
        $("#" + this.containerID).append(template(this.apiManager.data))
    }
}

const foodApi = new APIManager("/foodRoute")
const renderer = new Renderer("food-template", "container", foodApi)

foodApi.fetch()
renderer.render()

let userName = "Andrew"
let userAge = 21
//console.log("Text", variable) allows you to write to the console
console.log("User Name", userName)
console.log("User Age", userAge)
userPets = ["Cat","Dog"]
let userBalance = 1200
const every_day_spending = 15.3
let everyDaySpendingPerPet = 6
let daysSurvived = 0
console.log("userBalance",userBalance )
console.log("everyDaySpendingPerPet",everyDaySpendingPerPet)
console.log("daysSurvived",daysSurvived)
while (userBalance > 0) {
    let spending = every_day_spending + everyDaySpendingPerPet * userPets.length
    userBalance -= spending
    daysSurvived++
    }
console.log("User have sufficient money for " + daysSurvived + " days")
userPets.push("Hamster")
userBalance=1200
daysSurvived=0
while (userBalance > 0) {
    let spending = every_day_spending + everyDaySpendingPerPet * userPets.length
    userBalance -= spending
    daysSurvived++
    }
console.log("User have sufficient money for " + daysSurvived + " days")
userPets.splice(2,2)
console.log(userPets[0])
console.log(userPets[1])
everyDaySpendingPerPet = 2.4
daysSurvived=0
userBalance=1200
while (userBalance > 0) {
    let spending = every_day_spending + everyDaySpendingPerPet * userPets.length
    userBalance -= spending
    daysSurvived++
    }
console.log("User have sufficient money for " + daysSurvived + " days")
function nameVertical(name){
    console.log(name)
    const n =name.length
    let i=0
    while (i<n){
        console.log(name[i])
        i++
    }
}
var a="Sarah"
nameVertical(a)
function code(n){
    return (100<n && n<199) ? "informational responses":((200<n && n<299) ? "successful responses":((300<n && n<399) ? "redirection messages": ((400<n && n<499) ? "client error responses" : ((500<n && n<599) ? "server error responses": "not a valid code"))))
}
console.log(code(600))
function compareVariables(var1, var2){
    if (var1===var2){
        console.log("the two variables have the same value and type")
    }
    if (typeof var1!=typeof var2 && var1==var2){
        console.log("the two variables have the same value but not the same type")
        console.log("the type of var1 is:",typeof var1)
        console.log("the type of var2 is:",typeof var2)
    }
    if (typeof var1!=typeof var2 && var1!=var2){
        console.log("the two variables do not have the same value nor the same type")
    }
}
compareVariables(2, "2")
function fibonacci(n){
    let a=0
    let b=1
    console.log(a)
    console.log(b)
    let somme=0
    while((a+b)<n){
        somme=a+b
        console.log(somme)
        a=b
        b=somme

    }
}
function fibonacci(n){
    let a=0
    let b=1
    let somme=0
    aray=[]
    aray.push(a)
    aray.push(b)
    while((a+b)<n){
        somme=a+b
        aray.push(somme)
        console.log(somme)
        a=b
        b=somme

    }
    return aray
}
console.log(fibonacci(24))
let courses=["WAD","SoftwareEngineering","WebSecurity","OOP"]
let i=0
for (;;){
    console.log(courses[i])
    i++
    if(i>=courses.length){
        break
    }
}


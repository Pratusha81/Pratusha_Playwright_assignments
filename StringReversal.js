let course = "Testleaf"
let reversed = ""

for(let i=course.length-1; i>=0; i--){
reversed += course[i]
}

console.log(course)
console.log(reversed)

if (course.toLocaleLowerCase === reversed.toLocaleLowerCase){
    console.log("It is Palindrome")
}
else{
    console.log("It is not Palindrome")
}
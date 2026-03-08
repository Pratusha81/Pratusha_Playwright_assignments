//task 1
function userProfile(){ 
    let a="Pratusha"
    return a
}
console.log("Hello!"+ " " +userProfile())

//task 2
let double = (x) => x*2
console.log(double(10))

//task 3
//the callback is an anonymous function (no name) that logs the message.
setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000);

//task 4 
function getUserData(callback){ // Define the function that takes a callback
// `getUserData`, simulate fetching data with `setTimeout` and then call the callback function with
// that should print “Call Back Function” after 3 seconds.
    setTimeout(()=>{ 
    callback()
},3000)
}
getUserData(() => {
    console.log("call back function")
})
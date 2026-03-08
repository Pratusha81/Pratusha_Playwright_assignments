//Example 1
function lengthOfLastString(str) {
    str="Hello World"
    let trimmed = str.trim();
    if (trimmed === "") {
        return 0;
    }
    let words = trimmed.split(/\s+/);
    let lastWordnew = words[words.length - 1];
    let length = lastWordnew.length;
    console.log("The last word is " +lastWordnew +" with length "+length)

}
lengthOfLastString()

//Example 2
let input = " fly me to the moon "
let words = input.trim().split(/\s+/); //Splits the strings which identifies using` space
let lastWord = words[words.length - 1];
let lengthOfLastWord = lastWord.length;
console.log("The last word is " +lastWord+ " with length "+lengthOfLastWord)

//Example 3 
function isAnagram(str1, str2) {
    // Input validation
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        throw new TypeError('Both inputs must be strings.');
    }

    // Normalize: lowercase, remove non-alphabetic characters
    const normalize = (str) =>
        str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');

    return normalize(str1) === normalize(str2);
}
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); //false
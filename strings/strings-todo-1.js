// REMOVE BLANKS
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

function removeBlanks(str) {
    let splitString = str.split(" ")
    return splitString.join("")
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "))


// COUNT NON SPACES
// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

function countNonSpaces(str) {
    let splitString = str.split(" ")
    let joinedString = splitString.join("")

    return joinedString.length
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"))
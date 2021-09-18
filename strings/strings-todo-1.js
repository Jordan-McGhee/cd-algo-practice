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

// console.log(countNonSpaces("Honey pie, you are driving me crazy"))


// PARENS VALID
// Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false, because the underlined ")" is premature: there is nothing open for it to close.

function parensValid(str){

    // add variable to keep track of number of parentheses. Increment on open parentheses and decrement on closed parentheses
    let count = 0

    // iterate for every index in the string
    for (i=0; i < str.length; i++) {

        // check if the char at that index is an open parentheses
        if (str[i] == "(") {

            // if so, increment count
            count++

        // check if the char at that index is a closed parentheses
        } else if (str[i] == ")") {

            // if so, decrement count
            count--
        }

        // Another if condition to see if our count variable is negative. If it is, that means there was an extra closed parentheses and would make it invalid.
        if (count < 0) {

            // if this condition is met, break the loop and return false
            return false
        }
    }

    // check to see if count is equal to 0 after iterating
    if (count == 0) {

        // if so, return true.
        return true
    }

    // return false if we reach this point.
    return false
}

// console.log(parensValid("Y(3(p)p(3)r)s"))
// console.log(parensValid("N(0)t )0(k"))
// console.log(parensValid("((()))())(()"))
// console.log(parensValid("(())()(())(((((())))))"))


// BRACES VALID
// Given a sequence of parentheses, braces and brackets, determine whether it is valid. Example:
// "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true. "D(i{a}l[ t]o)n{e" => false. "A(1)s[O (n]0{t) 0}k" => false.

function bracesValid(str) {

    // similar to the previous funcntion, just more counts because we're checking for braces and brackets now too
    let parenCount = bracesCount = bracketsCount = 0

    for (i=0; i < str.length; i++) {
        if (str[i] == "(") {
            parenCount++
        } else if (str[i] == ")") {
            parenCount--
        } else if (str[i] == "[") {
            bracesCount++
        } else if (str[i] == "]") {
            bracesCount--
        } else if (str[i] == "{") {
            bracketsCount++
        } else if (str[i] == "}") {
            bracketsCount--
        }

        if (parenCount < 0 || bracesCount < 0 || bracketsCount < 0) {
            return false
        }
    }

    if (parenCount == 0 && bracesCount == 0 && bracketsCount == 0) {
        return true
    }

    return false
}


// console.log(bracesValid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"))
// console.log(bracesValid("D(i{a}l[ t]o)n{e"))
// console.log(bracesValid("A(1)s[O (n]0{t) 0}k"))
// console.log(bracesValid("{([]})(())(){}{}[][][][]"))
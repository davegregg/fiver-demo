function isMultipleOf (num, modulus) {
    if (modulus === 0) {
        return null
    }

    return num % modulus === 0
}

console.log(isMultipleOf(6, 2) === true)
console.log(isMultipleOf(3, 2) === false)
console.log(isMultipleOf(15, 5) === true)
console.log(isMultipleOf(17, 5) === false)
console.log(isMultipleOf(9, 3) === true)
console.log(isMultipleOf(100, 3) === false)

function fiver (number) {
    if (!Number.isInteger(number)) { // guard clause
        return null
    }

    let isEven = isMultipleOf(number, 2)
    let isMultipleOf5 = isMultipleOf(number, 5)

    let output = null
    if (isEven) {
        output = "even"
    } else {
        output = "odd"
    }

    if (isMultipleOf5) {
        output += "fiver"
    }

    return output
}

// Happy Cases
console.log(fiver(123) === "odd")
console.log(fiver(126) === "even")
console.log(fiver(125) === "oddfiver")
console.log(fiver(130) === "evenfiver")
console.log(fiver(-1) === "odd")
console.log(fiver(-2) === "even")
console.log(fiver(-5) === "oddfiver")
console.log(fiver(-10) === "evenfiver")

// Edge Cases
console.log(fiver("cat") === null)
console.log(fiver(NaN) === null)
console.log(fiver(undefined) === null)
console.log(fiver(null) === null)
console.log(fiver([]) === null)
console.log(fiver(2.3) === null)
console.log(fiver(2.4) === null)
console.log(fiver(Infinity) === null)



// Validate an array to confirm that it has NO empty strings. If the array has any empty strings, return false (the array is NOT valid). If the array has no empty strings, return true (the array IS valid).
function validateArray (strings) {
    for (let index = 0; index < strings.length; index += 1) {
        let item = strings[index]
        
        let isEmpty = item === ""
        if (isEmpty) {
            return false
        }
    }
    
    return true
}

let strings1 = ["2", "acs", "howdy"]
let strings2 = ["2", "", "acs", "howdy", ""]
console.log(validateArray(strings1) === true)
console.log(validateArray(strings2) === false)
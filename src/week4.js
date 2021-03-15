//Values and variables
// declared variable country a string value of "New Zealand"
let country = "NewZealand"
let city = "Nelson"
let postalcode = 7010

console.log(country);
console.log(city);
console.log(postalcode);

//let allows a variable to be undefined for later use
let isIsland = true
let language 
language = "English"
console.log(language)

console.log(isIsland)
console.log(language)

//typeof prints out what type of variable is being used
console.log(typeof isIsland)

//Reserved keywords cannot be used as a variable
//let typeof


//logic operators
let number = 10 
console.log(number)
console.log(number / 2)
console.log(number > 6)
console.log(number < 2)


const address = city + " " + country + " " + postalcode
console.log(address)

// String template
let string = `My address is ${country}, ${city}, and ${postalcode}.`
console.log(string)

//A string expression will be evaluated later
10;
"Luke"

// Template of if statement
let x = 10;
if(x > 0) {
    console.log('is true')
}

// if (x) {
//    console.log('is true')
//}

// if logic : if 0 is less than 10 then is true. if not than  then is false.
x = 10;
if (x < 0) {
    console.log('is true')
}  
else  {
     console.log('is false')
}

// conditional if statement
    if (typeof x === 'number') {
        console.log("this is a number")
    }


    if (typeof (country) === 'boolean') {
        console.log("This is a string")
    }
    else  {
        console.log('is false')
    }

// syntax for if statements
// and &&
// or ||
// hard equlity or strict equlity = ===
if (x === '10' && typeof "number") {
    console.log("all is true")
} else {
    console.log("all is false")
    }

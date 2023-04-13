// TASK 2 function that accepts only 2 parameters
function twoPara() {
    if (arguments.length !== 2) {
        throw new Error("Please enter two parameters only ")
    }
    console.log("thanks")
}


// TASK 3 adding function that adds n numbers only
function add_N_num() {
    if (arguments.length === 0) {
        throw new Error("Please enter at least one parameter")
    }
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            throw new Error("Please enter only number")
        }
        sum += arguments[i]
    }
    return sum
}


//TASK 4 function reverse to apply on function arguments 

function reversePara() {
    if (arguments.length === 0) {
        throw new Error("Please enter at least one parameter")
    }
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            throw new Error("Please enter only number")
        }
    }
    var revInput = [].reverse.apply(arguments)
    return revInput
}

// function reversePara1() {
//     var revInput = [].reverse.call(arguments)
//     return revInput
// }

// function reversePara2() {
//     var argsArray = Array.from(arguments)
//     return argsArray.reverse()
// }

// spread operator

// TASK 5 constructor object method

var rec = new Object()
rec.width = 10
rec.height = 4
rec.calcArea = function () {
    return this.width * this.height
}
rec.calcPerimeter = function () {
    return (this.width * this.height) * 2
}

rec.displayInfo = function () {
    console.log(`rec width is ${this.width}, rec height is ${this.height}, rec area is ${this.calcArea()} and rec perimeter is ${this.calcPerimeter()}`)
}

function Rectangle(width, height) {
    if (arguments.length !== 2 || isNaN(width) || isNaN(height)) {
        throw new Error("Please enter two parameters (width and height) and only numbers")
    } else {
        this.Width = width
        this.Height = height
        this.calcArea = function () {

            return this.Width * this.Height
        }
        this.calcPerimeter = function () {
            return (this.Width + this.Height) * 2
        }

        this.displayInfo = function () {
            console.log(`rec width is ${this.Width}, rec height is ${this.Height}, rec area is ${this.calcArea()} and rec perimeter is ${this.calcPerimeter()}`)
        }
    }
}

var myRec = new Rectangle(3, 4)
myRec.displayInfo()



// Task 6 Objects and closure problem

var myObj1 = {
    id: 'SD-10',
    location: 'SV',
    addr: '123 st.',
    display: function () {
        console.log(`your id is ${this.id}, your ocation is ${this.location} and your address is ${this.addr}`);
    }
}

function getSetGen(obj) {
    for (var elem in obj) {
        if (typeof obj[elem] !== "function") {
            obj[`get${elem}`] = (function (j) {
                return function () {
                    return obj[j]
                }
            })(elem)
            obj[`set${elem}`] = (function (j) {
                return function (val) {
                    obj[j] = val
                }
            })(elem)
        }
    }
}

var myObj2 = {
    id: "SD-10",
    location: "SV",
    addr: "123 st.",
    display: function () {
        console.log(`your id is ${this.id}, your ocation is ${this.location} and your address is ${this.addr}`);
    },
    getSetGen: function () {
        for (var key in this) {
            if (typeof this[key] !== "function") {
                var capitalizedKey = key.charAt(0).toUpperCase() + key.substring(1);
                this["get" + capitalizedKey] = (function (j) {
                    return function () {
                        return this[j];
                    }
                })(key)
                this["set" + capitalizedKey] = (function (j) {
                    return function (value) {
                        this[j] = value;
                    }
                })(key)
            }
        }
    }
}

var user = {
    name: "Ali",
    age: 10,
    getSetGen: function () {
        myObj2.getSetGen.apply(user)
    }
}
// myObj.getSetGen.apply(user)










// closure problem 
// function outerfun() {
//     var arr = []

//     for (var i = 0; i < 3; i++) {
//         arr.push(function () {
//             console.log(i)
//         })
//     }
//     return arr
// }

// var result = outerfun()
// result[0]()
// result[1]()
// result[2]()


// function outerfun() {
//     var arr = []

//     for (var i = 0; i < 3; i++) {
//         arr.push((function (j) {
//             return function ()
//             {console.log(j)}            
//         })(i))
//     }
//     return arr
// }

// var result = outerfun()
// result[0]()
// result[1]()
// result[2]()
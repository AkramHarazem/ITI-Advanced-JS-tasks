// Task 1

function Shape(length1, length2) {
    if (this.constructor == Shape) {
        throw 'abstract class'
    }
    if (typeof length1 !== 'number' || typeof length2 !== 'number' || length1 <= 0 || length2 <= 0) {
        throw new Error("Please enter only numbers and positive")
    }
    var Width = length1
    var Height = length2
    Object.defineProperty(this, 'length1', {
        // get: function () {
        //     return Width
        // },
        // set: function () {
        //     throw 'Cannot change width or length1'
        // },
        value: Width,
        writable: false, //default
        configurable: false, //default
        enumerable: false //default
    })

    Object.defineProperty(this, 'length2', {
        get: function () {
            return Height
        },
        set: function () {
            throw 'Cannot change height or length2'
        },
        configurable: false,
        enumerable: false
    })
}

Shape.prototype.area = function () {
    return this.length1 * this.length2
}

Shape.prototype.perimeter = function () {
    return (this.length1 + this.length2) * 2
}

Shape.prototype.valueOf = function () {
    return this.area()
}



Rectangle.numOfRec = 0
function Rectangle(width, height) {
    if (Rectangle.numOfRec >= 1 && this.constructor == Rectangle) {
        throw new Error("Only one object allowed ")
    }
    if (arguments.length !== 2) {
        throw new Error("Please enter two parameters (width and height) and only numbers")
    }
    Shape.call(this, width, height)
    Rectangle.numOfRec++
}

Rectangle.getNumOfRecs = function () {
    return Rectangle.numOfRec
}


Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.toString = function () {
    return `Rectangle width is ${this.width},height is ${this.height}, area is ${this.area()} and perimeter is ${this.perimeter()}`
}


Square.numOfSquares = 0

function Square(length) {
    if (Square.numOfSquares >= 1 && this.constructor == Square) {
        throw new Error("Only one object allowed ")
    }
    if (arguments.length !== 1) {
        throw new Error("Please enter one parameters (length) and only numbers")
    }
    Rectangle.call(this, length, length)
    Square.numOfSquares++
}

Square.getNumOfSquares = function () {
    return Square.numOfSquares
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square

Square.prototype.toString = function () {
    return `Square length is ${this.width},area is ${this.area()} and perimeter is ${this.perimeter()}`
}





// Task 2

function Vehicle(speed, color) {
    if (this.constructor == Vehicle) {
        throw 'abstract class'
    }
    if (typeof speed !== 'number' || speed < 0) {
        throw 'speed should be a number and positive'
    }
    if (typeof color !== 'string') {
        throw 'color should be a string'
    }
    var Speed = speed
    var Color = color

    Object.defineProperties(this, {
        'speed': {
            get: function () {
                return Speed
            },
            set: function () {
                throw 'Cannot change Speed'
            }
        },
        'color': {
            get: function () {
                return Color
            },
            set: function (val) {
                // if (typeof val == 'string') {
                //     Color = val
                // }
                throw 'Cannot change Speed'
            }
        }
    })
}

Vehicle.prototype.turnLeft = function () {
    console.log('left')
}

Vehicle.prototype.turnRight = function () {
    console.log('right')
}

Vehicle.prototype.start = function () {
    console.log('start')
}

Vehicle.prototype.stop = function () {
    console.log('stop')
}

Vehicle.prototype.goBackward = function (speed, accel) {
    if (typeof speed !== 'number' || typeof speed !== 'number') {
        throw 'enter number only'
    }
    console.log(`gobackward with speed ${speed} and accelaration ${accel}`)

}

Vehicle.prototype.goForward = function (speed, accel) {
    if (typeof speed !== 'number' || typeof speed !== 'number') {
        throw 'enter number only'
    }
    console.log(`goforward with speed ${speed} and accelaration ${accel}`)
}

Vehicle.prototype.toString = function () {
    console.log(`goforward with speed ${speed} and accelaration ${accel}`)

}
Vehicle.prototype.valueOf = function () {
    return this.speed
}




function Bicycle(speed, color) {
    if (arguments.length !== 2) {
        throw new Error("Please enter two parameters")
    }
    Vehicle.call(this, speed, color)
}

Bicycle.prototype = Object.create(Vehicle.prototype)
Bicycle.prototype.constructor = Bicycle

Bicycle.prototype.ringBell = function () {
    console.log('ring belled')
}
Bicycle.prototype.toString = function () {
    return 'Bicycle';
}



function MotorVehicle(speed, color, sizeOfEngine, licensePlate) {
    if(this.constructor == MotorVehicle){
        throw 'MotorVehicle is Abstract class' 
    }
    // if (arguments.length !== 4) {
    //     throw new Error("Please enter four parameters (speed , color , sizeOfEngine and licensePlate )")
    // }

    if (typeof sizeOfEngine !== 'number') {
        throw new Error('Engine size must be a number');
    }
    if (typeof licensePlate !== 'string') {
        throw new Error('License plate must be a string');
    }

    var SizeOfEngine = sizeOfEngine
    var LicensePlate = licensePlate

    // Object.defineProperties(this, {
    //     'sizeOfEngine': {
    //         value: SizeOfEngine
    //     },
    //     'licensePlate': {
    //         value: LicensePlate
    //     }
    // })
    this.getSizeOfEngine = function () {
        return SizeOfEngine
    }

    this.getLicensePlate = function () {
        return LicensePlate
    }
    Vehicle.call(this, speed, color)
}

MotorVehicle.prototype = Object.create(Vehicle.prototype)
MotorVehicle.prototype.constructor = MotorVehicle

MotorVehicle.prototype.toString = function () {
    return 'MotorVehicle';
}



function Car(speed, color, sizeOfEngine, licensePlate, numOfDoors, numWheels, weight) {
    if (arguments.length !== 7) {
        throw new Error("Please enter seven parameters (speed , color , sizeOfEngine , licensePlate, numOfDoors, numWheels and weight)")
    }
    if (typeof numOfDoors !== 'number') {
        throw new Error('number Of Doors must be a number');
    }
    if (typeof numWheels !== 'number') {
        throw new Error('number of Wheels size must be a number');
    }
    if (typeof weight !== 'number') {
        throw new Error('weight size must be a number');
    }
    var NumOfDoors = numOfDoors;
    var NumWheels = numWheels;
    var Weight = weight;
    Object.defineProperties(this, {
        'numOfDoors': {
            value: NumOfDoors
        },
        'numWheels': {
            value: NumWheels
        },
        'Weight': {
            get: function () {
                return Weight
            },
            set: function () {
                throw 'Cannot change weight'
            }
        }
    })
    MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate)
}

Car.prototype = Object.create(MotorVehicle.prototype)
Car.prototype.constructor = Car

Car.prototype.switchOnAirCon = function () {
    console.log('air condition switched')
}
Car.prototype.getNumOfDoors = function () {
    console.log(this.numOfDoors)
}
Car.prototype.toString = function () {
    return 'Car';
}

function DumpTruck(speed, color, sizeOfEngine, licensePlate, loadCapacity, numWheels, weight) {
    if (arguments.length !== 7) {
        throw new Error("Please enter seven parameters (speed , color , sizeOfEngine , licensePlate, numOfDoors, numWheels and weight)")
    }
    if (typeof loadCapacity !== 'number') {
        throw new Error('number Of Doors must be a number');
    }
    if (typeof numWheels !== 'number') {
        throw new Error('number of Wheels must be a number');
    }
    if (typeof weight !== 'number') {
        throw new Error('weight must be a number');
    }
    var LoadCapacity = loadCapacity;
    var NumWheels = numWheels;
    var Weight = weight;
    Object.defineProperties(this, {
        'loadCapacity': {
            value: LoadCapacity
        },
        'numWheels': {
            value: NumWheels
        },
        'Weight': {
            get: function () {
                return Weight
            },
            set: function () {
                throw 'Cannot change weight'
            }
        }
    })
    MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate)
}

DumpTruck.prototype = Object.create(MotorVehicle.prototype)
DumpTruck.prototype.constructor = DumpTruck

DumpTruck.prototype.lowerLoad = function () {
    console.log('load lowered')
}
DumpTruck.prototype.raiseLoad = function () {
    console.log('load raised')
}
DumpTruck.prototype.toString = function () {
    return 'DumpTruck';
}
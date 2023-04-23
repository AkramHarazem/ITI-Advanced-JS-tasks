// Task 1 adding numbers by fixed steps
function myObj(start, end, step) {
    if (typeof start !== "number" || typeof end !== "number" || typeof step !== "number") {
        throw new Error('please enter valid numbers')
    }

    if (start >= end) {
        throw new Error("Start must be less than end");
    }

    if (step <= 0 || step > end) {
        throw new Error("Step must be a positive number or less than end");
    }

    var arrList = []
    this.getArr = function () {
        return arrList
    }
    this.addNum = function (val) {
        if (val !== (arrList[arrList.length - 1] + step) || typeof val !== "number") {
            throw new Error(`Your input not match your step incrementing + ${step} or it isn't valid number `)
        }
        arrList.push(val)
    }

    this.removeNum = function () {
        arrList.pop()
    }

    function fill_list() {
        for (var i = start; i <= end; i += step) {
            arrList.push(i)
        }
    }

    fill_list.call(this)
}







// Task 2 library boxes and books
function Box(height, width, length, material) {
    if (typeof height !== 'number' || typeof width !== 'number' || typeof length !== 'number') {
        throw new Error("height, width or length isn't a number")
    }
    if (typeof material !== 'string') {
        throw new Error("Please enter correct material name")
    }
    this.Height = height
    this.Width = width
    this.Length = length
    this.Material = material
    this.Content = []
}

Box.prototype.addBook = function (book) {
    if (typeof book !== 'object') {
        throw new Error("Please enter a valid book object")
    }
    this.Content.push(book)
    return 'done'
}

Box.prototype.deleteBook = function (title) {
    if (typeof title !== 'string') {
        throw new Error("Please enter a valid book title")
    }
    for (var i = 0; i < this.Content.length; i++) {
        if (this.Content[i].Title === title) {
            if (this.Content[i].NumofCopies > 1) {
                this.Content[i].NumofCopies -= 1
                return "done"
            } else if (this.Content[i].NumofCopies === 1) {
                this.Content.splice(i, 1)
                return "last copy deleted"
            }
        }
    }
    return "There is no book with this title"
}


Box.prototype.valueOf = function () {
    var totalNumOfCopies = 0;
    for (var i = 0; i < this.Content.length; i++) {
        totalNumOfCopies += this.Content[i].NumofCopies;
    }
    return totalNumOfCopies;
}




Book.numCreatedBooks = 0;

function Book(title, numofChapters, author, numofPages, publisher, numofCopies) {
    if (typeof title !== 'string') {
        throw new Error("enter valid title ")
    }
    if (typeof numofChapters !== 'number') {
        throw new Error("enter valid numbers of Chapters")

    }
    if (typeof author !== 'string') {
        throw new Error("enter valid author ")

    }
    if (typeof numofPages !== 'number') {
        throw new Error("enter valid numbers of Pages")

    }
    if (typeof publisher !== 'string') {
        throw new Error("enter valid publisher")

    }
    if (typeof numofCopies !== 'number') {
        throw new Error("enter valid numbers of copies")
    }
    this.Title = title
    this.NumofChapters = numofChapters
    this.Author = author
    this.NumofPages = numofPages
    this.Publisher = publisher
    this.NumofCopies = numofCopies
    Book.numCreatedBooks++
}

Book.getNumOfBooks = function () {
    return Book.numCreatedBooks
}


var box1 = new Box(30, 30, 60, "wood")
var box2 = new Box(40, 40, 70, "plastic")
var box3 = new Box(50, 50, 80, "metal")

var book1 = new Book('abc', 10, 'akram', 300, 'shorok', 4)
var book2 = new Book('xyz', 15, 'ahmed', 400, 'shorok', 2)
var book3 = new Book('asd', 17, 'mohy', 500, 'shorok', 5)

box1.addBook(book1)
box2.addBook(book2)
box3.addBook(book3)

console.log(box1 + box2 + box3);


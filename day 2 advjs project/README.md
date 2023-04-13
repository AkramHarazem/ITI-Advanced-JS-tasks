## Advanced JavaScript day 2
-----
Note: Make your own interface for the following tasks.
1. Create your own object that contains a list of numerical sequence, with the following details
- Your constructor takes 3 parameters to define start, end of list and step
- The list should be private and filled with private method
- You can create getter and setter for the list if needed
- Allow the user to apply the following functionality to his created sequence
     o Append or prepend a new value within the same numerical sequence
     o Dequeue or pop a value,
     o you have to ensure that you are pushing value within the same sequence otherwise through exception
     o you have to ensure that there is no duplicated value otherwise through exception
- you can add any property you need.

2. Create your box object that contains books objects, ensure that you can
   a. Create book object and add it to box object content property
   b. Count # of books inside box
   c. Delete any of these books in box according to book title. Note: You should delete a single copy of the books with the same title.
   d. Create Class Property that counts numbers of created books objects and Class method to retrieve it.
Note:
- Using of global variables is not allowed
- No Class methods and properties except for those required in part d.
- Box object has the following properties: height, width, length, material, content.
- The content property contains an array books
- Book object has the following properties: title, numofChapters, author, numofPages, publisher, numofCopies
- you can define any function needed for both box and book objects

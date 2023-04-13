## Advanced JavaScript Day 1
1. Update your cookie.js file to handle any possible wrong call of all implemented function by firing error message. e.g there should be an error message if getCookie was called without passing any parameter.

2. Create a function that accepts only 2 parameters and throw exception if number of parameters either less than or exceeds 2 parameters

3. Create an adding function that adds n numbers only. Throw exception if the user passed any data type other than “number” or called your 
   function without passing any parameters.

4. Write two different function with two different forms implementations that takes any number of parameters and returns
   them reversed using array’s reverse function.
5. Using Constructor method for creating Objects, write a script that allows you to create a rectangle object that
- Should have width and height properties.
- Implement method for calculating its area
- Implement method for calculating its perimeter.
- Implement displayInfo() function to display a message declaring the width, height, area and perimeter of the created object.

6. Create your own custom object that has getSetGen as function value, this function should generate setters and getters for the properties of the caller object
This object may have description property of string value if needed
Let any other created object can use this function property to generate getters and setters for his own properties
Avoid generating getters or setters for property of function value

Hint:
if getSetGen() applied on any other object it should generate getters and setters for all of the applied object properties
i.e. if you have the following object obj = {id:”SD-10”,location:”SV”, addr:”123 st.”, getSetGen: function(){/*should be implemented*/}}
using of getSetGen() will generate the following getId(), setId(), getLocation(), setLocation(), getAddr(), setAddr().
If you created the following object var user = { name:”Ali”,age:10} When applying getSetGen() on user object (you can use call or bind or 
apply as long as getSetGen() is not a member for user object), it will result in creating the following : getName(), getAge(),setName(),setAge().

## Advanced JavaScript day 3

1.a. Make proper updates in (lab#1 task#5) your previous code of generating Rectangle objects,
- Rectangle Constructor should inherit from Shape Constructor
- Create your Square constructor that inherits from Rectangle.
- Create a Class Property that counts number of generated Square objects.
- Prevent creating any object from shape, allow creation of only rectangles and square (make shape abstract class)
- All of the properties should be defined using accessor and/or data descriptor, prevent them from being deleted, iterated or being modified.
- Use .toString() to display each instance’s dimensions, its area and perimeter.
- Implement .valueof() so that if there is more than one rectangle object we can run arithmetic operation as follows : if we have rectangle1 of area 60m2 and rectangle2 of 37m2 then rectangle1 + rectangle2 should return 97 and rectangle1 - rectangle2 should return 23.
- you can add any property you need.
1.b Bonus: allow creation of only one square and one rectangle

2. Build your own custom constructors that implement the given simple class diagram
- each class should have the following
o public and private properties and method;
o You should ensure that properties are set with the required data type state in the above diagram otherwise throw an exception.
o All of the properties should be defined using accessor and/or data descriptor, prevent them from being deleted, iterated or being modified.
o Override both .toString() and valueOf()
o Make sure you are implementing inheritance properly.
o You can add any property you need.

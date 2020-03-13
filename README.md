## Description
For the test task, I took an elementary tree structure, the main requirement 
which is the presence of the id and children fields. The degree of nesting, the number of children components is unlimited.
The string in which we convert the code is minimized as much as possible. However, this is sufficient for 
complete reconstruction of the original tree structure. Methods which I used, carry out a recursive 
iterating over an object, which allows you to work with a tree structure of unlimited nesting. 
When writing a function, my goal was to have the minimum number of calls to iterate over a complex object, 
to optimize the process. 

## RESUME
Advantages of the program: using the minimum number of object iterations
 data in the row is minimized as much as possible. You can view the results of conversion and testing in the console. 
 If there is a data discrepancy, assert returns the specified error.
1. What is the difference between var, let, and const?
   **Answer:** Var: This is a JavaScript variable that can store every data type in it. It is an old variable that performs the global scop and function scop. This means that any variable that is declared with var outside a function block is available for use in the whole window. Var variable also re-declarable in the same scope without any error.

   Let: This is a modern JavaScript variable that performs block scope way. When a variable declared in a block scope with let, it is only available for use within that block. 'Let' can be modifiable but it is not re-declarable.

   Const: This is also a modern JavaScript variable that has some similarities with 'Let' variable but it contains a constant value that is not either modifiable or re re-declarable. But it can be destructured for a object and can be changed property's key and value.

2. What is the difference between map(), forEach(), and filter()?
   **Answer:** map(): This is ES6 function that executes the same code on every element in an array and returns a new array with the updated elements.

   forEach(): This also a ES6 function that is used to execute the same code on every element in an array but does not change the array and it is not returns anything.

   filter():A ES6 function that checks every element in an array to see if it meets a certain condition and returns a new array with the elements that return true for the condition.

3. What are arrow functions in ES6?
   **Answer:** ES6 arrow function is a compact alternative to a normal function expression. This is a single-expression functions have an implicit return.
   It does't have access to the arguments object.
   It is best to declare with const, unless reassignment is needed.

4. How does destructuring assignment work in ES6?
   **Answer:** It is an ES6 feature. Destructuring is a convenient way of unpacking values. It permit us to bind values to specific variables, making it easier to access and manipulate data stored within arrays or objects. it's like making a copy of the values from the data structure and storing them in new variables that can be used independently.

5. Explain template literals in ES6. How are they different from string concatenation?
   **Answer:** ES6 Template Literals introduce a more intuitive and flexible way to generate strings in JavaScript, enhancing readability and code efficiency. Normal strings need (+) concatenation to show dynamic value, meaning each concatenation operation creates a new string object in memory but the (+) operator can often concatenate strings with other data types, automatically converting the non-string type to a string. On the other hand template literals often called template string is highly efficient for building strings incrementally, especially within loops, as they minimize object creation. It was primarily designed for appending strings or characters, but can also handle other data types by converting them to strings.

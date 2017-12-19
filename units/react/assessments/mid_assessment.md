# React Mid-Assessment

## Multiple Choice

* What is the difference between state and props:
  * State is defined within a component, props are passed from outside a component
  * Inverse of I.
  * State contains all the component's values, props are just the property names. 
* What is sequence of events, peformed by react, following the call to a component's setstate method.
  * Only the state is changed, nothing else.
  * State is changed, render function gets called.
  * State is changed, constructor function is called, render function is called.

## Open answer

List the two ways to define a react stateless component in javascript.
(- as a class, - as a function)

## Exercise Questions

### Cat, Not robot

Create a components that will render two checkboxes and a procceed button. The labels for the checkboxes are:
A. I am not a robot
B. I am a  cat.
The user will only be able to proceed if he/she is a cat and not a robot. 

### Select Calculator v1

Create a component that will render three selects: 
1. a number between 1-9
2. a mathematical operation (+, -, *, /, %)
3. Another number between 1-9.

Initially all three will have an empty string '' as the selected value.

Whenever the selected for all three selects is anything expect the empty string, the result of the calculation should be rendered either below or to the right of the selects.

### Create password:

Create a components that will render the following: 
A create a password field
A repeat password field
A save password button

If the length of the first password is 5 or less, the save button be disabled, and the text "password must be at least 6 charcters long" will appear.
If the length of the first password is 6 or more, but the passwords are not identical,  the save button will be disabled and the text "passwords must be the same" will appear.
If both above conditions are passed, the save button may be clicked. Once the user clicks on it, a message: password saved  successfuly will be displayed.

### Extended Counter

Create a component that will render a counter. Add the following buttons to the counter:

* Inc - add 1
* Dec - substract 1
* Double - multiply by two
* Square - raise to the power of 2
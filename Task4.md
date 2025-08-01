### Task-4

What will be the result of the following codes:

**var a = isNaN(‘11’);**

**var a = isNaN(2-10);**

Explain your answers.

both will be false.
javascript isNaN function check that is the number is number  or not number.
is it Number then it return false otherwise true.

in the first test case the number is a string so it should return true.
but javascript convert the string '11'  to a number so it return false.
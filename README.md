## Simple Implementation of Linear Regression
The code is available in two files. 
One for the `Ordinary Least Squares` method and another for the `Gradient Descent` method.

## Basics
Linear Regression is calculated using the method `y = mx + b`,
where: y is the output, m is the slope of the line, x is the input and b is the y-intercept.

## Easy, right? :smile:
Linear Regression is easy to understand. 

## A little more :rocket:
`m = sum of (eachX - meanOfX)*(eachY - sumOfY) / sum of(square of (eachX - meanOfX))`

`b = meanOfY - (m * meanOfX)`

## Running the code
I use **live-server** which can be installed by running ```bash
 npm install live-server```. 
* Download the code, 
* navigate into the root directory and run `live-server` from your terminal.
* Head over to the console in **DevTools** and call ```javascript 
ordinaryLeastSquares(x)``` method passing an input value **x**.


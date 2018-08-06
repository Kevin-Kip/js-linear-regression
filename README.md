## Simple Implementation of Linear Regression
The code is available in two files. 
One for the `Ordinary Least Squares` method and another for the `Gradient Descent` method.

## Basics
Linear Regression is calculated using the method `y = mx + b`,
where: 
1. y is the output, 
2. m is the slope of the line, 
3. x is the input and 
4. b is the y-intercept.

## Easy, right? :smile:
Linear Regression is easy to understand. 

## A little more :rocket:
`m = sum of (eachX - meanOfX)*(eachY - sumOfY) / sum of(square of (eachX - meanOfX))`

`b = meanOfY - (m * meanOfX)`

## Running the code
I use **live-server** which can be installed by running ```npm install live-server```. 
1. Download the code, 
2. navigate into the root directory and run `live-server` from your terminal.
3. Head over to the console in **DevTools** and call ```ordinaryLeastSquares(x)``` method passing an input value **x**.


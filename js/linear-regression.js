/*
    Basic formula
    y = mx + b
    where:
        x is the input
        m is the slope of the line
        and b is the y-intercept

    m = (sum of (eachX - meanOfX)*(eachY - sumOfY)) / square(sum of (eachX - meanOfX))

    b = meanOfY - (m * meanOfX)
*/
var point = {x: undefined, y: undefined};
var data = [];
var m = 1;
var b = 0;
var meanOfX;
var meanOfY;

data.push({x:1,y:1},{x:2,y:3},{x:3,y:4},{x:4,y:3},{x:5,y:7},{x:6,y:10},{x:7,y:7},{x:8,y:4},{x:9,y:7},{x:10,y:6});

function ordinaryLeastSquares (inputX) {
    var xSum = 0;
    var ySum = 0;
    for (var i = 0; i < data.length; i++){
        xSum += data[i].x;
        ySum += data[i].y;
    }
    meanOfX = xSum / data.length;
    meanOfY = ySum / data.length;

    var numerator = 0;
    var denominator = 0;
    for (var j = 0; j < data.length; j++){
        var x = data[j].x;
        var y = data[j].y;
        numerator += (x - meanOfX) * (y - meanOfY);
        denominator += (x - meanOfX) * (x - meanOfX);
    }

    m = numerator / denominator;
    b = meanOfY - (m * meanOfX);

    return (m * inputX) + b
}

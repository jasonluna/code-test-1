// javascript part 1 display time
var date = new Date();
var d = date.getDay();
var h = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
var ampm = date.getHours() >= 12 ? 'PM' : 'AM';
var m = date.getMinutes();
var s = date.getSeconds();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
document.getElementById("clock").innerHTML = "Today is " + days[date.getDay()] + ' ' + h + ':' + m + ':' + s + ' ' + ampm;



// javascript part 2 get area of triangle
var side1 = 5;
var side2 = 7;
var side3 = 8;
var perimeter = (side1 + side2 + side3) / 2;
var area = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)));
document.getElementById('triangle').innerHTML = 'the area of the triangle with the sides 5, 7 , 8, is ' + area;


// javascript part 3 display  words
// var origin = [O, r, i, g, i, n, C, o, d, e, A, c, a, d, e, m, y, R, o, c, k, s]

// javascript part 4 leap year
function leapYear() {

    var year = document.getElementById('calander').value;
    var y = ((year % 4 == 0) && (year % 100 != 0)) || (calander % 400 == 0);
    document.getElementById('leap').innerHTML = "the statement is " + y;
}


// javascript part 5 temperature
function convert(degree) {
    if (degree == "C") {
        F = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(F * 100)/100;
	    } else {
        C = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(C * 100)/100;
   } 
}

var title = document.getElementById("title");

var p_tags = document.getElementsByTagName("p");

var mainText = document.getElementsByClassName("mainText")
console.log(p_tags);


title.innerHTML = "Hello";
title.classList.add("blue_background");

for (var i of p_tags)
{
    i.classList.add("green_background");
}

for (var i of mainText)
{
    i.classList.add("blue_background");
    i.innerHTML= "Hello1212";
}


// var x =5;
// var y=6;


// function multiply (a,b)
// {
//     return a*b;
// }
// console.log("Hello!!")
// console.log(x*x);
// console.log("Function test "+ multiply(x,y));
// document.write("<p>Hello <strong>pav</strong>!!!!</p>");




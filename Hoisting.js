tipper("5"); //for declaring functions we can declare first

function tipper(a)
{
    var bill=parseInt(a);//to change string into integer
    console.log(bill+5);
}




var bigTipper=function(a)//variable declarations are made undefined
{
    var bill=parseInt(a);
    console.log(bill+15);
}

bigTipper("60");//we can declare after the variable is declared


console.log(name);
var name="vimal";

function sayName()
{
    var name="popz";
    console.log(name);
}

sayName(); 

console.log(name);

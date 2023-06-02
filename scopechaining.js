//scope chaining

var Name="vimal";

console.log("Line number 3", Name);


function myName()
{
   // var Name="mr v";
    console.log("Line number 9", Name);
  

    function sayNameTwo()
    {
        //var Name="popz";
        console.log("Line number 14",Name);
    }
    sayNameTwo();
}

myName();
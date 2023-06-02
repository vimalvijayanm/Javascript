var email=false;
var google=true;
var facebook=false;

if(email ||  google || facebook)
{
    console.log(" Login successful ");
}

var isLoggedIn=true;
var isEmailVerified=true;
var validCardInfo=true;

if(isLoggedIn && isEmailVerified && validCardInfo)
{
    console.log(" Allow user to make a purchase ");
}
else
{
    console.log(" you are not allowed to do a purchase ");
}
//create an application with the following rules
//admin-gets full access
//subadmin-gets access to create or delete files
//testprep-gets access to create or delete tests
//user-gets access to consume content

var user="user";

switch(user)
{
    case "admin":
        console.log( "Gets full access" );
        break;
    case "sub-admin":
        console.log(" Gets access to create or delete files ");
        break;
    case "testprep":
        console.log(" Gets access to create or delete tests ");
        break;
    case "user":
        console.log(" gets access to consume content ");
        break;

        default:
        console.log( "Trial user" );
        break;            
}
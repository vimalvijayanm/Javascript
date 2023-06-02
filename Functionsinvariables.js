
var  getuserrole=function(name,role)
{
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break;
        case "subadmin":
            return `${name} is sub admin with access create and delete courses`;
        case "testprep":
             return `${name} is a testprep with access to create and delete tests`;
        case "user":
             return `${name} is a user context`;
             break;     
        default:
            return `${name} is trial user`; 
            break;
    }
}

var userRole=getuserrole("vimal","subadmin");

console.log(userRole);
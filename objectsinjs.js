var user={
      firstName : "vimal",
      lastName : "vijayan",
      role : "admin",
      loginCount : 32,
      facebookSignedIn : true,

};

console.log(user.firstName);

console.log(user.loginCount);

user.loginCount = 78;
console.log(user.loginCount);

user.lastName="vinay";
console.log(user.lastName);
console.log(user["role"]);
console.table(user);
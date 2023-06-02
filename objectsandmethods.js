var user={
    firstName : "vimal",
    lastName : "vijayan",
    role : "admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buycourse : function(courseName)
    {
        this.courseList.push(courseName);
    },
    getCourseCount : function()
    {
        return `${this.firstName} is enrolled in total of ${this.courseList.length}`;
    },
  

};
var courseList=true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buycourse("React js");
user.buycourse("javascript");
user.buycourse("sql");
console.log(user.getCourseCount());




var user={
    firstName : "vimal",
    courseCount : 3,
    getCourseCount : function()
    {
      console.log("Line 7",this);
    function sayHello()
    {
        console.log("hello");
        console.log("Line 10",this);
    }
    sayHello();
},
};

user.getCourseCount();
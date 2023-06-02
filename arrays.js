var countries=["india","usa","japan","china"]

var cities=["chennai","mumbai","banglore","hyderabad"]

//console.log(cities[3]);

//console.log(cities.length);
cities[0]="trivandrum";
//console.log(cities);//to replace an array

var user=["vimal","hari","life",23,true];
//console.log(user);
user.pop(); 
//console.log(user);

user.unshift("myname");
//console.log(user);

user.shift();
//console.log(user);

console.log(user.indexOf("tina"));

console.log(Array.from("vimal"));
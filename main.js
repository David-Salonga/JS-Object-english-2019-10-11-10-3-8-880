// 1.
var user = Object();
user.name = "John";
user.surname = "Mike";
user.name = "Peter";
delete user.name;


// 2.
var fruit = {
apple: 20,
pear: 20,
peach: 10
};

var total = 0;
Object.keys(fruit).forEach(function(key) {
  total += fruit[key];
});

console.log(total);
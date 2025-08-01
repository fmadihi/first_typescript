console.log("hello");
function add(n1, n2, isShow, resText) {
    var n = n1 + n2;
    if (isShow) {
        return resText + n;
    }
    else {
        return n;
    }
}
var num1 = 5;
var num2 = 10;
var IsShow = true;
var ResText = 'The result is: ';
console.log(add(num1, num2, IsShow, ResText));
var person;
person = {
    name: "ali",
    age: 22,
    isMale: true,
    hobbies: ['work', 'lesen', 21]
};
var x;
x = ["typescript", 'angular'];
console.log(person.name + " " + person.age + " " + person.isMale + " " + person.hobbies);
console.log('x is: ' + x);

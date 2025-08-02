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
var ResText = "The result is: ";
console.log(add(num1, num2, IsShow, ResText));
var person;
person = {
    name: "ali",
    age: 22,
    isMale: true,
    hobbies: ["work", "lesen", 21],
    score: [18, true],
};
var x;
x = ["typescript", "angular"];
console.log(person.name +
    " " +
    person.age +
    " " +
    person.isMale +
    " " +
    person.hobbies +
    " " +
    person.score);
console.log("x is: " + x);
//define tuple
//در این نوع میتوانید نوع های عناصزر را مشخص کنید و اگر بنویسد  رشته و بولین فقط همین دو نوع را میگیرد.
//در آرایه معمولی میتوانید هر مقداری را بدهید اما توی این نوع حتم نوع آرایه مهم هست
var tupleArray;
tupleArray = ["yes", 0];
tupleArray[0] = "hello";
tupleArray[1] = 22;
tupleArray.push("yes");
console.log("tuble Array is : ", tupleArray);
//enum
//این ها کلکسیونی از متغیر یا مقادیر هعا هستند که به هم مربوط هستند
//میتوان به آن مقدار عددی هم داد. نکته جالب اینهست که اگر به یکی از آن هعا مقدار عددی بدهید آن را به عنوان کلید در نظر میگیرد و به بقیه هم عدد بعد از آن عدد را اضافه میکند
//می توانید به جای عدد رشته هم بدهید ولی قابلیت قبل را ندارد
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["USER"] = 2] = "USER";
    Role[Role["TEACHER"] = 3] = "TEACHER";
})(Role || (Role = {}));
//  enum Role {ADMIN="access" , USER , TEACHER}
var perRole = {
    role: Role.ADMIN,
};
if (perRole.role === Role.USER || perRole.role === 1) {
    console.log("user is Admin");
}
console.log("add number auto: ", Role);
// union data type 
//میتوانیم برای یک متغیر چند نوع دیتا تایپ تعریف کنیم
//در مثال زیر باید یک if بنویسیم تا بتوانیم باگ را حل کنیم. چون شک میکند که آیا دیتاتایپ درست است یا نه
// با | دیتا تایپ های مختلف را تعریف مکینم
//litralTypes
//اگر جایی قرار است ما یک متن را چک کنیم کهخ ممکن است فاصله یا غلط املایی پیش بیاید میایم از litraltype ها استفاده میکنیم تا اگر در همان لحظه غلط املایی پیش اومد همون لحظه به ما ارور بده.
// در تابعد زیر ورودی سوم تابع از نوع literal type هست
function Combine(in1, in2, resType) {
    var res;
    if (typeof in1 === "number" && typeof in2 === "number") {
        res = in1 + in2;
    }
    else {
        res = in1.toString() + in2.toString();
    }
    if (resType === 'is-number') {
        return +res;
    }
    else {
        return res.toString();
    }
}
var combineNum = Combine(10, 15, 'is-number');
var combineStringNum = Combine('10', '15', 'is-text');
var combineString = Combine("yes", "YES", 'is-text');
console.log('combineNum', combineNum, 'combineStringNum', combineStringNum, 'combineString', combineString);
function Combine0(in1, in2, resType) {
    var res;
    if (typeof in1 === "number" && typeof in2 === "number") {
        res = in1 + in2;
    }
    else {
        res = in1.toString() + in2.toString();
    }
    if (resType === 'is-number') {
        return +res;
    }
    else {
        return res.toString();
    }
}

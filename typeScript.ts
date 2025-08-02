console.log("hello");
function add(n1: number, n2: number, isShow: boolean, resText: string) {
  let n = n1 + n2;
  if (isShow) {
    return resText + n;
  } else {
    return n;
  }
}
const num1 = 5;
const num2 = 10;
const IsShow = true;
const ResText = "The result is: ";
console.log(add(num1, num2, IsShow, ResText));

let person: {
  name: string;
  age: number;
  isMale: boolean;
  hobbies: any;
  score: [number, boolean];
};
person = {
  name: "ali",
  age: 22,
  isMale: true,
  hobbies: ["work", "lesen", 21],
  score: [18, true],
};
let x: string[];
x = ["typescript", "angular"];
console.log(
  person.name +
    " " +
    person.age +
    " " +
    person.isMale +
    " " +
    person.hobbies +
    " " +
    person.score
);
console.log("x is: " + x);

//define tuple
//در این نوع میتوانید نوع های عناصزر را مشخص کنید و اگر بنویسد  رشته و بولین فقط همین دو نوع را میگیرد.
//در آرایه معمولی میتوانید هر مقداری را بدهید اما توی این نوع حتم نوع آرایه مهم هست
let tupleArray: [string, number];

tupleArray = ["yes", 0];
tupleArray[0] = "hello";
tupleArray[1] = 22;
tupleArray.push("yes");
console.log("tuble Array is : ", tupleArray);

//enum
//این ها کلکسیونی از متغیر یا مقادیر هعا هستند که به هم مربوط هستند
//میتوان به آن مقدار عددی هم داد. نکته جالب اینهست که اگر به یکی از آن هعا مقدار عددی بدهید آن را به عنوان کلید در نظر میگیرد و به بقیه هم عدد بعد از آن عدد را اضافه میکند
//می توانید به جای عدد رشته هم بدهید ولی قابلیت قبل را ندارد
enum Role {
  ADMIN = 1,
  USER,
  TEACHER,
}
//  enum Role {ADMIN="access" , USER , TEACHER}

let perRole = {
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

function Combine(in1: number | string, in2: number | string ,resType: 'is-number' | 'is-text') {
  let res;
  if (typeof in1 === "number" && typeof in2 === "number") {
    res = in1 + in2;
  } else {
    res = in1.toString() + in2.toString();
  }

  if(resType ==='is-number' ){
return +res;
  }
  else{
    return res.toString()
  }
  
}

const combineNum = Combine(10, 15,'is-number');
const combineStringNum = Combine('10', '15','is-text');
const combineString = Combine("yes", "YES",'is-text');

console.log('combineNum',combineNum,'combineStringNum',combineStringNum,'combineString',combineString)

//type aliases
//در واقع به معنای نام مستعار است. به جای اینکه دیتاتایپ ها چند تایی را در چند جا بنویسید یا لیترال تایپ هایی که خودتون نوشتید را چند جا بخواهید بنویسید که امکان خطا رو به وجود میاره میتونید اون ها رو به صورت typeAliases بنویسید.
//type به عنوان این هست که میخواهید aliases رو بسازید
type Combinable = number | string
type ResTypeAble = 'is-number' | 'is-text'

function Combine0(in1: Combinable, in2: Combinable ,resType: ResTypeAble) {
  let res;
  if (typeof in1 === "number" && typeof in2 === "number") {
    res = in1 + in2;
  } else {
    res = in1.toString() + in2.toString();
  }

  if(resType ==='is-number' ){
return +res;
  }
  else{
    return res.toString()
  }
  
}

//در تایپ اسکریپت توابع بر اساس خروجی ای که بر میگردانند دیتاتایپ دارند. اگر عدد برگردانند  میشود number
// توابعی داریم که هیچ مقداری را بر نمیگردانند که این نوع توابع void هستند
//تابع زیر چون چیزی را بر نمیگرداند void هست
// ما میتوانیم :void را جلوی تایعی که هیچ چیز بر نمیگرداند قرار دهیم تا اگر اشتباها return قرار گرفت خطا  بدهد
function FuncVoid (num : number) : void{
console.log(num)
}

function FuncNum (num : number , num1 : number) : number{
return num + num1
}

//Function dataTypes
//ما می توانیم متغیر را برابر یک تابع قرار دهیم که این ممکن است مشکلاتی برای ما از نظر خروجی تابع ئ ورودی های آن به وجود بیاورد
//برای حل این مشکل از دیتاتایپ تابع استفاده می کنیم
let varFuncNum = Function
//در بالا  تعریف کردیم که این برای ما مشکلاتی را به وجود  خواهد آورد. چرا که ممکن است تعداد ورودی های بیشتر وارد شود یا خروجی آن باعث مشکل شود مثلا تابع خروجی عدد دارد ولی رشته میخواهد یا اصلا خروجی ندارد  و void هست ولی میخواهد خروجی بگیردو.
let varFuncNum01 : (a:number,b:number) => number
let varFuncVoid : (x:number)=>void 

//unknown type
//این برای زمانی هست که مثلا کاربر میخواهد آن را وارد کند ولی ما نمیدانیم چه نوعی خواهد بود از این نوع  دیتاتایپ استفاده میکنیم
// تفاوت با any
//متغیر های ایز نوع nknown را نمیتوانیم داخل متغیر هایی از نوع مثلا رشته بریزیم ولی any را میتوانمی داخل رشته بریزیم
//روی متغیر های از نوع unknown نمیتوانیم متد بزنیم ولی روی any می توانیمم
let userVar : unknown
let varAny : any

//  let text01 :string = userVar   ERRORR
 let text02 :string = varAny
 
//  userVar.method()   ERRORR
 varAny.method()

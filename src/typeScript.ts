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

function Combine(
  in1: number | string,
  in2: number | string,
  resType: "is-number" | "is-text"
) {
  let res;
  if (typeof in1 === "number" && typeof in2 === "number") {
    res = in1 + in2;
  } else {
    res = in1.toString() + in2.toString();
  }

  if (resType === "is-number") {
    return +res;
  } else {
    return res.toString();
  }
}

const combineNum = Combine(10, 15, "is-number");
const combineStringNum = Combine("10", "15", "is-text");
const combineString = Combine("yes", "YES", "is-text");

console.log(
  "combineNum",
  combineNum,
  "combineStringNum",
  combineStringNum,
  "combineString",
  combineString
);

//type aliases
//در واقع به معنای نام مستعار است. به جای اینکه دیتاتایپ ها چند تایی را در چند جا بنویسید یا لیترال تایپ هایی که خودتون نوشتید را چند جا بخواهید بنویسید که امکان خطا رو به وجود میاره میتونید اون ها رو به صورت typeAliases بنویسید.
//type به عنوان این هست که میخواهید aliases رو بسازید
type Combinable = number | string;
type ResTypeAble = "is-number" | "is-text";

function Combine0(in1: Combinable, in2: Combinable, resType: ResTypeAble) {
  let res;
  if (typeof in1 === "number" && typeof in2 === "number") {
    res = in1 + in2;
  } else {
    res = in1.toString() + in2.toString();
  }

  if (resType === "is-number") {
    return +res;
  } else {
    return res.toString();
  }
}

//در تایپ اسکریپت توابع بر اساس خروجی ای که بر میگردانند دیتاتایپ دارند. اگر عدد برگردانند  میشود number
// توابعی داریم که هیچ مقداری را بر نمیگردانند که این نوع توابع void هستند
//تابع زیر چون چیزی را بر نمیگرداند void هست
// ما میتوانیم :void را جلوی تایعی که هیچ چیز بر نمیگرداند قرار دهیم تا اگر اشتباها return قرار گرفت خطا  بدهد
function FuncVoid(num: number): void {
  console.log(num);
}

function FuncNum(num: number, num1: number): number {
  return num + num1;
}

//Function dataTypes
//ما می توانیم متغیر را برابر یک تابع قرار دهیم که این ممکن است مشکلاتی برای ما از نظر خروجی تابع ئ ورودی های آن به وجود بیاورد
//برای حل این مشکل از دیتاتایپ تابع استفاده می کنیم
let varFuncNum = Function;
//در بالا  تعریف کردیم که این برای ما مشکلاتی را به وجود  خواهد آورد. چرا که ممکن است تعداد ورودی های بیشتر وارد شود یا خروجی آن باعث مشکل شود مثلا تابع خروجی عدد دارد ولی رشته میخواهد یا اصلا خروجی ندارد  و void هست ولی میخواهد خروجی بگیردو.
let varFuncNum01: (a: number, b: number) => number;
let varFuncVoid: (x: number) => void;

//unknown type
//این برای زمانی هست که مثلا کاربر میخواهد آن را وارد کند ولی ما نمیدانیم چه نوعی خواهد بود از این نوع  دیتاتایپ استفاده میکنیم
// تفاوت با any
//متغیر های ایز نوع nknown را نمیتوانیم داخل متغیر هایی از نوع مثلا رشته بریزیم ولی any را میتوانمی داخل رشته بریزیم
//روی متغیر های از نوع unknown نمیتوانیم متد بزنیم ولی روی any می توانیمم
let userVar: unknown;
let varAny: any;

//  let text01 :string = userVar   ERRORR
let text02: string = varAny;

//  userVar.method()   ERRORR
//  varAny.method()

// class in ts
//کلاس یک فرمول هست که یکبار نوشته میشه و از روی آن نمونه ساخه می شود
// تابع درون ان را constructor میگویند
//تعریف تابع دیگر درون کلاس
//کلمه functuion را نمینویسیم. این را در کلاس متد میگویند.
class User {
  email: string;
  phoneNumber: number;
  password: string;

  constructor(e: string, pn: number, pass: string) {
    this.email = e;
    this.phoneNumber = pn;
    this.password = pass;
  }
  print(this: User) {
    console.log("email user is: ", this.email);
  }
}

const firstUser = new User("f.f@gmail.com", 912542165, "123456");
console.log("class firstUser", firstUser);

const secondUser = new User("gg.g@gmail.com", 2141, "gggg");
console.log("class secondUser", secondUser);

firstUser.print();
const copyFirstUser = {
  email: "123@gmail.com",
  phoneNumber: 912542165,
  password: "123456",
  print: firstUser.print,
};
copyFirstUser.print();

//در بالا چون مقدار undefiend میپگیریم باید متد print را براش this برابر با اسم کلاس مشخص کنیم
//تا دقیق مشخص شود که ایمیل چی را باید بگیرد.

//access modifiers
//برای زمانی که یک متغیر را داخل کلاس تعریف کردیم و فقط درون همان جا استفاده شود
//مثلا یگ ارایه دارید که بیرون از کلاس ها میتوانید به ان مقدار اضافه یا کم کنید از طریق اندیس
//اما شما برای این کار تابع نوشته اید.
//private
//اینجا از private استفاده میکنید و اینطوری دیگر متغیر بیرون از کلاس قابل تغییر نیست
//public
//میتوانید متغیر را بیرون از کلاس هم تغییر دهید

class personClass {
  private roles: string[] = [];

  addRole(value: string) {
    this.roles.push(value);
  }

  showRole() {
    console.log("lenght is: ", this.roles.length);
    console.log("Roles are: ", this.roles);
  }
}

const firstPerson = new personClass();

firstPerson.addRole("admin");
firstPerson.addRole("USER");
// roles[2]="new user" ERRROOORRR
firstPerson.showRole();

//shourtcut class
//به جای این که متغیر ها به همراه دیتاتایپ هاشون رو تعریف کنیم میتونیم اون ها رو مستقیما داخل خود سازنده تعریف کنیم
//همراه یبا private & public
// دیگر نیازی نیست داخل خود سازنده هم مقدار بدهیم با استفاده از this

class UserShort {
  // email: string;
  // phoneNumber: number;
  // password: string;

  constructor(
    public email: string,
    public phoneNumber: number,
    public password: string
  ) {
    // this.email = e;
    // this.phoneNumber = pn;
    // this.password = pass;
  }
  print(this: UserShort) {
    console.log("email user is: ", this.email);
  }
}

const firstUserShort = new UserShort("f.f@gmail.com", 912542165, "123456");
console.log("class firstUserShort", firstUserShort);

//readonly
//متغیری که این خصیصه را بگیرد فقط قابل خواندن هست و غیر قابل ویرایش هست
class User01 {
  readonly email: string;
  phoneNumber: number;
  password: string;

  constructor(e: string, pn: number, pass: string) {
    this.email = e;
    this.phoneNumber = pn;
    this.password = pass;
  }
  print(this: User) {
    console.log("email user is: ", this.email);
  }
}

const firstUser01 = new User01("f.f@gmail.com", 912542165, "123456");
// firstUser01.email ="g@1.com"  ERROOORRR
console.log("class firstUser01", firstUser01);

//extend
//ارث بری ها
// ما میتوانیم از یک کلاس دیگر ارثبری کنیم . وقتی قرار است یک کلاس دیگر داشته باشیم که تمام مشخصات کلاس اول را داشته باشد  میتوانیم از قانون ارثبری استفاده کنیم.
// اگر در کلاس دوم از سازنده استفاده کنیم ارور خواهیم گرفت که مقادیر کلاس اول را چکاز میخواهی کنی و چطور میخواهی آن ها رو پر کنی
//برای این کار از super استفاده میکنیم و داخل ان مقادیر کلاس اول را مینویسیم
class AdminUser extends User {
  adminPermision: boolean;

  constructor(adminPer: boolean) {
    super("h@gm.com", 1254, "54fd");
    this.adminPermision = adminPer;
  }
  showAdmin() {
    console.log(this);
  }
}

const adminuser = new AdminUser(true);
console.log("adminuser", adminuser);
adminuser.showAdmin();

//protected
//اگر ما در کلاسی مقدار private را داده باشیم این به این معنی است که فقط داخل همان کلاس قابل مقدار دهی هست  و اگر این کلاس را به کلاس دیگری ارث داده باشیمن این مقدار را فقط در همان کلاس اول داریم
// برای حل ای مشکل از protected استفاده میکنیم

// نکته دیگر اینکه اگر یک متد در کلاس اول وجود داشته باشد و محدد بیاییم عین همان متد را منظور اسم یکسان هست در کلاس دوم تعریف کنیم در اینجا اوررایت اتفاق خواهد افتاد.

//getter & setter
//getter: برای  زمان یهیت که میخواد یک متغیری را به ما پس بدهد
//setter: برای زمانی هست که میخواد یک مقداری را دریافت کند
//مثال get & set در فایل  practice01

/************************************************************* */
//توابع ایستا توابعی هست که بدون اینکه از روی ان نمونه ای بسازیم از ان استفاده میکنیم
//بدون new زدن میتوانیم از آن استفاده کنیم
//مثل تابع Math
//برای ساخت static کافیست که قبل از متد این کلمه را قرار دهیم
//static function & static properties
//هم تابع را میتوانیم ایستا کنیم هم متغیر ها و پرراپرتی ها را
//مثال در فایل practice01

/***************************************** */
//abstract
//زمان یهست که یک متدی را در کلاس تعریف میکنیم که میخواهیم فرزندان و ان کلاس هایی که از آن ارثبری کرده اند از این متد استفاده کنند
//اینحا از abstarct استفاده میکینم
//نکنه اینکه متدی که قبل ان abtract نوشته میشود کلاس آن هم باید قبل آن abstract نوشته شود
//تکته دیگر این که از ان کلاسی که abstract هست دیکر نمیشود new کرد
//میتوان در کلاس اصلی متدی که قرار است abstract باشد  آن را به صورت void تعریف کرد
//مثال در فایل practice01

/***************************** */

//single ton pattern
//به این معنی است که از کلاس مورد نظر میخواهیم فقط یک نمونه بسازیم.
//مثلا فقط یک واحد حسابداری داریم و وقتی یک نمونه از آن ساخته شد دیگر نیازی به ساخته شدند مجدد نداریم و میخواهیم محدودیت برای آن ایجحاد کنیم
//قدم اول private کردن cunstructor هست
//قدم دوم: ساخت یک متغیر خصوصی ایستا که از نوع همین کلاس هست
// private static name:className
//قدم سوم نوشتن تابع برای اینکه چک کند که ایا قبلا ساخته شده است یا نه
// static getInstance(){
//     if(AccountindDepartment.instance){
//         return this.instance
//     }
//     this.instance = new AccountindDepartment(3,'222TET',[])
//   }

/************************************* */

//interface
//یه سری ساختار و قراردادد ها رو تعیین میکنند که برای object ها اون ساختار رو پیاده سازی کنند
//و آبجکت از آن پیروی می کند
//تعریف آن به صورت زیر است و فقط درون ان میتوان نام متغیر و نوع داده آن را مشخص کرد و دیگر هیچ چیزی را نمیتواندرون آن نوشت و مثلا به آن مقدار داد و ...
//میتوان تابع هم در آن تعریف کرد
//در interface فقط می توانید property ها را تعریف کنیم و دیتاتایپ آن را
interface Personnel {
  name: string;
  job: string[];

  greeting(phrase: string): void;
}
let employee: Personnel;
employee = {
  name: "ali",
  job: ["fanavar"],
  greeting() {},
};
//در interface ها حتما باید تمام پراپرتی ها نوشته شود و اگر ننویسیم ارور میپیرم.
//آیا کاربر برای این هست؟ خیر در کلاس ها خیلی از این مورد استفاده میکنیم
//interface in classs
//برای اینکه کلاس را از قوانین و قراداد های interface مجبور کنید که پیروی کند از impeliment استفاده میکنیم
//نکته جالب این که میتوانید متغیر های اضافه تری که در interface نیست را در کلاس استفاده کنید فقط حتما باید آن هایی که در اینترفیس هست را حتما استفاده کنیدئ
class EMP implements Personnel {
  name: string;
  job: string[];
  age: number;
  constructor(n: string, j: string[], ag: number) {
    (this.name = n), (this.job = j), (this.age = ag);
  }
  greeting(phrase: string): void {
    console.log(this.name + " " + phrase);
  }
}

let newEMP = new EMP("Ahmad", ["teacher"], 20);
newEMP.greeting("how are you ???");
//difference between interface & abstract
//ما میتوانیم چند nterface برای یک کلاس داشته باشیم.
// class EMP implements Personnel,inter02}
//ما در abstrac بدنه و مقدار را میتوانمی مشخص کنیم ولی در interface فقط اسمش را تعریف میکنیم و میتوانیم در کلاس های مختلف بدنه های و مقادیر مختلف را بدهیم

//interface in interface
//میتوانند از هم ارثبری کنند
interface FName {
  firstName: string;
}
interface LName extends FName {
  lastName: string;
}

//تعریف دیتا تایپ تابع با استفاده از interface
//بدون interface
type addFunc = (a: number, b: number) => number;

let add01: addFunc;
add01 = (n1: number, n2: number) => {
  return n1 + n2;
};

//یا interface
interface addFunc01 {
  (a: number, b: number): number;
}
let add02: addFunc;
add02 = (n1: number, n2: number) => {
  return n1 + n2;
};
console.log(add01(5, 10), add02(100, 500));

//type intersection
// این مورد برای زمان یهست که ما بیایم تایپ های دلخواه خودمون رو مشخص کنیم و بعد بخوایم یه نوع را ایجاد کنیم که ترکیبی از تایپ های ساخته شده است.
// از & استفاده میکنیم برای اتصال تایپ ها به هم

//example 01
type admin = {
  name: string;
  phoneNumber: number;
};

type employee = {
  name: string;
  startDate: Date;
};

type empAdmin = admin & employee;

const e1: empAdmin = {
  name: "ali",
  phoneNumber: 523,
  startDate: new Date(),
};

console.log(e1);

//example 02
type Password = string | number;
type IsActive = string | boolean;

type PassIsAc = Password & IsActive;
let xx: PassIsAc = "hgd";
console.log(xx);

//type gaurd
//وقتی که تایپ ها رو با هم ترکیب کنید وقتی که بخواهید از پراپرتی های داخل آن استفاده کنی بهت باگ میده که باید با نوشتن شرط اون ها رو بر طرف کنیم که بهش تایپ گارد میکن
//آن پراپرتی ای که در یکی از موراد نیست را عینا درون "" در if می گذارید
//کار if این هست که آیا این پراپرتی دقیقا وجود دارد یا نه
//در اوایل همین فایل برای یک تابع که چک کند عدد است و جمع را انجام دهد هم از تایپ گارد استفاده کردیم

type empAdmin01 = admin | employee;

function printepm(empl: empAdmin01) {
  console.log(empl.name);

  if ("startDate" in empl) {
    console.log(empl.startDate);
  }
}
const e2: empAdmin01 = {
  name: "ali",
  phoneNumber: 523,
  startDate: new Date(),
};

//typegaurd in class

class Car {
  drive(){
    console.log('car driving');
  }
}
class Truck {
  drive(){
    console.log('Truck driving');
  }
  loadSpeed(num:number){
console.log(`Speed is ${num}`);
  }
}
 type vehicle = Car | Truck
 function useVehicle (vehicle:vehicle){
  vehicle.drive()
  //both below are correct
  if(vehicle instanceof Truck){
    vehicle.loadSpeed(3000)
  }
  if("loadSpeed" in vehicle){
    vehicle.loadSpeed(5000)
  }
 }

 //typegaurd in interface
 //در اینجا کافیست که از if که درون "" قرار میدهیم استفاده کنیم یا از switchcase
 //فقط باید یک تایپ را درون آن مشخص کنیم و آن را با switch-case میسنجیمچ
 interface Bird{
  type : "bird";
  speedBird : number;
 }
  interface Horse{
  type : "horse";
  speedHorse : number;
 }

 type Animal = Bird | Horse
 function SpeedAnimal (anim:Animal){

  if("speedBird" in anim){
    console.log(anim.speedBird)
  }
  //or with switch-case
  let speed
  switch (anim.type){
    case "bird":
      speed = anim.speedBird
      break
      case "horse":
        speed= anim.speedHorse
        break
  }
  return speed
 }
console.log( SpeedAnimal({type:'horse',speedHorse:5000}));

//type casting
//زمانی که میخواهیم به دام دسترسی داشته باشیم تایپ اسکریپت سخت گیریر میکند که ما نمیدونیم این المان هست یا نه
//برای حل این مشکل به انتها   !   اضافه میکنیم
//اگر به اینپوت اشاره کرده باشیم طبیعتا با value میخواهیم کار کنیم که اینجا هم سخت گیری میکند که من نمیدونم این نوع المان تو value میگیرد یا نه
//برای حل این مشکل از 
//as ...
//استفاده میکنیم
//وقتی از as استفاده کنیم دیگر نیازی به علامت تعجب نیست

// let inputUser = document.getElementById('txt')!
let inputUser = document.getElementById('txt') as HTMLInputElement
inputUser.value = "yesss..."

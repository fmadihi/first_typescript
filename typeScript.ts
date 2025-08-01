console.log("hello")
function add(n1:number,n2:number,isShow:boolean,resText:string){
    let n = n1 + n2
    if(isShow){
        return resText + n
    }
    else{
        return n
    }
    
}
const num1 = 5
const num2 = 10
const IsShow = true
const ResText = 'The result is: '
console.log(add(num1,num2,IsShow,ResText))

let person : {
    name:string,
    age:number,
    isMale:boolean,
    hobbies:any
}
person = {
     name:"ali",
    age:22,
    isMale:true,
    hobbies:['work','lesen',21]
}
let x:string[]
x=["typescript",'angular']
console.log(person.name + " " + person.age + " " + person.isMale + " " + person.hobbies)
console.log('x is: ' + x)
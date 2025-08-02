abstract class Department {
  protected readonly id: number;
  public name: string;
  protected employee: string[] = [];

  constructor(idField: number, nameField: string) {
    this.id = idField;
    this.name = nameField;
  }

  //static function
  static createEmployee(name:string){
    return {name:name}
  }

  //static property
  static NowYear = 2025
  describe() {
    console.log("name is ", this.name, "id is ", this.id);
  }
  addEmployee(nameE: string) {
    this.employee.push(nameE);
  }
  showEmployee() {
    console.log("Employee are: ", this.employee);
  }
  abstract Describe ():void
}

class ItDepartment extends Department {
  admins: string[];
  constructor(id: number, name: string, adm: string[]) {
    super(id, name);
    this.admins = adm;
  }

  Describe(): void {
      console.log(`ItDepartment id : ${this.id}`)
  }
}

class AccountindDepartment extends Department {
  private reports: string[];
  private lastReport: string;
  //get
  get mostLastReport() {
    if(this.lastReport){
        return this.lastReport
    }
    throw new Error('No reports found ...')
  }

  //set
  set mostLastReport(value:string){
    if(!value){
    throw new Error('No value found ...')
    }
    this.addReport(value)
  }

  constructor(id: number, name: string, rep: string[]) {
    super(id, name);
    this.reports = rep;
    this.lastReport = rep[0];
  }
  addReport(x: string) {
    this.reports.push(x);
  }
  printReports() {
    console.log("reports is", this.reports);
  }
   Describe(): void {
      console.log("AccountindDepartment id : ",this.id)
  }
}

//use static function & property
const staticemployee01 = Department.createEmployee("ahmad")
console.log('staticemployee01',staticemployee01 , " " , Department.NowYear)
const depart = new AccountindDepartment(1, "fanavari",['report 000']);
depart.addEmployee("ali");
depart.addEmployee("reza");
depart.showEmployee();

const ItDepar = new ItDepartment(1, "programmer", ["mammad"]);
ItDepar.addEmployee("sima");
console.log(ItDepar);

//abstract
depart.Describe()
ItDepar.Describe()
const accouVal = new AccountindDepartment(1, "tv", ['good']);
accouVal.addEmployee("sara");
console.log("accouVal", accouVal);
//get
console.log(accouVal.mostLastReport)
//set
accouVal.mostLastReport = "new add report by settet"
accouVal.addReport("bad");
accouVal.printReports();


//shortCut
// همان بالایی است فقط کوتاه شده
class Department01 {
  protected employee: string[] = [];

  constructor(private id: number, public name: string) {
  }
  describe() {
    console.log("name is ", this.name, "id is ", this.id);
  }
  addEmployee(nameE: string) {
    this.employee.push(nameE);
  }
  showEmployee() {
    console.log("Employee are: ", this.employee);
  }
}

class ItDepartment01 extends Department01 {
  constructor(id: number, name: string, admins: string[]) {
    super(id, name);
  }
}

class AccountindDepartment01 extends Department01 {
  private lastReport: string;
  //get
  get mostLastReport() {
    if(this.lastReport){
        return this.lastReport
    }
    throw new Error('No reports found ...')
  }

  //set
  set mostLastReport(value:string){
    if(!value){
    throw new Error('No value found ...')
    }
    this.addReport(value)
  }

  constructor(id: number, name: string, private reports: string[]) {
    super(id, name);
    this.lastReport = reports[0];
  }
  addReport(x: string) {
    this.reports.push(x);
  }
  printReports() {
    console.log("reports is", this.reports);
  }
}

const depart01 = new Department01(1, "fanavari");
depart01.addEmployee("ali");
depart01.addEmployee("reza");
depart01.showEmployee();

const ItDepar01 = new ItDepartment01(1, "programmer", ["mammad"]);
ItDepar01.addEmployee("sima");
console.log(ItDepar01);

const accouVal01 = new AccountindDepartment01(1, "tv", ['good']);
accouVal01.addEmployee("sara");
console.log("accouVal", accouVal01);
//get
console.log(accouVal01.mostLastReport)
//set
accouVal01.mostLastReport = "new add report by settet"
accouVal01.addReport("bad");
accouVal01.printReports();

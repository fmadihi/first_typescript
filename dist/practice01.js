class Department {
    constructor(idField, nameField) {
        this.employee = [];
        this.id = idField;
        this.name = nameField;
    }
    //static function
    static createEmployee(name) {
        return { name: name };
    }
    describe() {
        console.log("name is ", this.name, "id is ", this.id);
    }
    addEmployee(nameE) {
        this.employee.push(nameE);
    }
    showEmployee() {
        console.log("Employee are: ", this.employee);
    }
}
//static property
Department.NowYear = 2025;
class ItDepartment extends Department {
    constructor(id, name, adm) {
        super(id, name);
        this.admins = adm;
    }
    Describe() {
        console.log(`ItDepartment id : ${this.id}`);
    }
}
class AccountindDepartment extends Department {
    //get
    get mostLastReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No reports found ...');
    }
    //set
    set mostLastReport(value) {
        if (!value) {
            throw new Error('No value found ...');
        }
        this.addReport(value);
    }
    constructor(id, name, rep) {
        super(id, name);
        this.reports = rep;
        this.lastReport = rep[0];
    }
    //define instance just 1
    static getInstance() {
        if (AccountindDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountindDepartment(3, '222TET', []);
        return this.instance;
    }
    addReport(x) {
        this.reports.push(x);
    }
    printReports() {
        console.log("reports is", this.reports);
    }
    Describe() {
        console.log("AccountindDepartment id : ", this.id);
    }
}
//use static function & property
const staticemployee01 = Department.createEmployee("ahmad");
console.log('staticemployee01', staticemployee01, " ", Department.NowYear);
// const depart = new AccountindDepartment(1, "fanavari",['report 000']);
// depart.addEmployee("ali");
// depart.addEmployee("reza");
// depart.showEmployee();
const ItDepar = new ItDepartment(1, "programmer", ["mammad"]);
ItDepar.addEmployee("sima");
console.log(ItDepar);
//abstract
// depart.Describe()
ItDepar.Describe();
// const accouVal = new AccountindDepartment(1, "tv", ['good']);
const accouVal = AccountindDepartment.getInstance();
const accouVal03 = AccountindDepartment.getInstance();
console.log('00just 1 made', accouVal, accouVal03);
accouVal.addEmployee("sara");
console.log("accouVal", accouVal);
//get
console.log(accouVal.mostLastReport);
//set
accouVal.mostLastReport = "new add report by settet";
accouVal.addReport("bad");
accouVal.printReports();
//shortCut
// همان بالایی است فقط کوتاه شده
class Department01 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employee = [];
    }
    describe() {
        console.log("name is ", this.name, "id is ", this.id);
    }
    addEmployee(nameE) {
        this.employee.push(nameE);
    }
    showEmployee() {
        console.log("Employee are: ", this.employee);
    }
}
class ItDepartment01 extends Department01 {
    constructor(id, name, admins) {
        super(id, name);
    }
}
class AccountindDepartment01 extends Department01 {
    //get
    get mostLastReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No reports found ...');
    }
    //set
    set mostLastReport(value) {
        if (!value) {
            throw new Error('No value found ...');
        }
        this.addReport(value);
    }
    constructor(id, name, reports) {
        super(id, name);
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addReport(x) {
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
console.log(accouVal01.mostLastReport);
//set
accouVal01.mostLastReport = "new add report by settet";
accouVal01.addReport("bad");
accouVal01.printReports();
export {};
//# sourceMappingURL=practice01.js.map
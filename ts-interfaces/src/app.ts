class Department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // public name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ` + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if(!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  addEmployee(text: string) {
    if (text === "Max") {
      return;
    }

    this.employees.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");
// it.employees.push('Anna');
it.describe();
it.name = "Blue";

it.printEmployeeInformation();
console.log(it);

const accounting = new AccountingDepartment("d2", []);

accounting.addReport("Something went wrong");

accounting.mostRecentReport = 'abcd';
console.log(accounting.mostRecentReport);

accounting.printReports();
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printEmployeeInformation();

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);
// const itCopy = { name: 'DUMMY', describe: it.describe };

// itCopy.describe();

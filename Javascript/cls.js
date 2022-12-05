class AdmissionForm {
  constructor(name, address, age) {
    this.name = name;
    this.address = address;
    this.age = age;
  }

  getDetails() {
    console.log(
      `${this.name} is ${this.age} years old and lives in ${this.address}`
    );
  }
  enroll() {
    console.log(`${this.name}: You are enrolled`);
  }
}

class ManagementFaculty extends AdmissionForm {
  constructor(name, address, age) {
    super(name, address, age);
  }
  enroll() {
    console.log(`${this.name}: You are enrolled in Management Department`);
  }
}

class ITFaculty extends AdmissionForm {
  constructor(name, address, age) {
    super(name, address, age);
  }

  enroll() {
    console.log(`${this.name}: You are enrolled in IT Department`);
  }
}

let form1 = new ITFaculty("Ram", "Kathmandu", 22);
form1.getDetails();
form1.enroll();

let form2 = new ManagementFaculty("Abc", "Kathmandu", 22);
form2.getDetails();
form2.enroll();

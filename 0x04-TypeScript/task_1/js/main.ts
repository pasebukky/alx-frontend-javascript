// Create an interface named Teacher
interface Teacher {
    readonly firstName : string;
    readonly lastName : string;
    fullTimeEmployee : boolean;
    yearsOfExperience? :number;
    location : string;
    [key: string]: any;
}

// Create an interface named Directors that extends Teachers
interface Directors extends Teacher {
    numberOfReports : number;
}

// Define the interface for the printTeacher function
interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const fullName = `${firstInitial}. ${lastName}`;
    return fullName;
};

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    workOnHomework(): string {
      return "Currently working";
    }
    displayName(): string {
      return this.firstName;
    }
  };
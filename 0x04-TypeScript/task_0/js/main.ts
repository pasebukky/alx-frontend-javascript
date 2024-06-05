// Create an interface named Student
interface Student {
    firstName : string;
    lastName : string;
    age : number;
    location : string;
}

// Create two new students
const student1 : Student = {
    firstName : "Bukky",
    lastName : "Pase",
    age : 28,
    location : "Lagos"
};

const student2 : Student = {
    firstName : "Bisola",
    lastName : "Pase",
    age : 23,
    location : "Port Harcourt"
};

// Create  an array containing the students
const studentsList : Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
const table = document.createElement('table');

studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});

document.body.appendChild(table);
// Create two new students
var student1 = {
    firstName: "Bukky",
    lastName: "Pase",
    age: 28,
    location: "Lagos"
};
var student2 = {
    firstName: "Bisola",
    lastName: "Pase",
    age: 23,
    location: "Port Harcourt"
};
// Create  an array containing the students
var studentsList = [student1, student2];
// Render a table using Vanilla JavaScript
var table = document.createElement('table');
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});
document.body.appendChild(table);

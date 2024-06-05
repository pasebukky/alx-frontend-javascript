// Implement the printTeacher function
var printTeacher = function (firstName, lastName) {
    var firstInitial = firstName.charAt(0).toUpperCase();
    var fullName = "".concat(firstInitial, ". ").concat(lastName);
    return fullName;
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());

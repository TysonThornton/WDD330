
// Use uppercase in a class name. Export keyword allows us to import in a different file.
export class Student {
    // This method will run everytime a new Student is created
    constructor(firstName, lastName, iNumber) {
        this.FirstName = firstName,
        this.LastName = lastName,
        this.INumber = iNumber
    }
}
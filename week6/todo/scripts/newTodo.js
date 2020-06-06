// Create a class for a new To Do Item
export class Todo {
    constructor(content) {
        // You could do this.ID = id,   BUT you could just assign a value each time using the below
        this.ID = Date.now(), //This is a way to create a unique ID because it calculates how many miliseconds from 1970
        this.Content = content,
        this.Completed = false
    }
} 
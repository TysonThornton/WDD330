// Create a class for a single to do action. Per instructions, I need an ID, content, and completed
export class Todo {
    constructor(content, completed) {
        // You could do this.ID = id,   BUT you could just assign a value each time using the below
        this.ID = Date.now(), //This is a way to create a unique ID because it calculates how many miliseconds from 1970
        this.Content = content,
        this.Completed = completed
    }
}

export class ToDo{
    constructor(title,description,dueDate,priority,notes){
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
        this.notes=notes
    }
}

export class Project{
    constructor(title,todos){
        this.title=title;
        this.todos=[];
    }
    /**
     * 
     */
    deletetoDo(index) {
        this.todos.splice(index,1);
        
    }
    addtoDo(todo){
        
        this.todos.push(todo);
    }
}
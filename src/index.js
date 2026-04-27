import greeting from "./greeting";
import "./styles.css";
import { Project, ToDo } from "./class.js";

const myProject = new Project("Uni Work");
const myTodo = new ToDo("Finish Odin", "Todo app", "2026-04-30", "High", "");



 

const appbody=document.body.querySelector(".app");
const appHeader=document.createElement("div");

appHeader.innerHTML="<h1>To Do List</h1>"
appHeader.style.backgroundColor="grey";
appbody.appendChild(appHeader);


const form = document.querySelector(".toDoForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
     
    const title = form.title.value;
    const description = form.description.value;
    const dueDate = form.due.value;
    const priority = form.priority.value;
    const notes = form.querySelector("textarea").value;
    const newTodo = new ToDo(title, description, dueDate, priority, notes);
    myProject.addtoDo(newTodo);
    console.log(newTodo); 
    renderTodos();
 
});

const todoList = document.querySelector(".todoList");

function renderTodos() {
    todoList.innerHTML = ""; // clear old todos

    myProject.todos.forEach((element,index) => {
        const todoCard = document.createElement("div");
         
        todoCard.innerHTML = `
        <h2>${element.title}</h2>
        <p>${element.description}</p>
        <p>${element.dueDate}</p>
        <p>${element.priority}</p>
        <p>${element.notes}</p>
          `;              
        const cancel=document.createElement("button");
        cancel.className="delete"
        cancel.textContent="Delete Note";
        cancel.addEventListener("click", (e)=>{
            myProject.deletetoDo(index)
            renderTodos();
        })

        
        todoList.appendChild(todoCard);
        todoList.appendChild(cancel);
    });
}
 
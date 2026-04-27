import greeting from "./greeting";
import "./styles.css";
import { Project, ToDo } from "./class.js";

const myProject = new Project("Uni Work");
const myTodo = new ToDo("Finish Odin", "Todo app", "2026-04-30", "High", "");

myProject.addtoDo(myTodo);
console.log(myTodo.title)
 

const appbody=document.body.querySelector(".app");
const appHeader=document.createElement("div");
appHeader.className="derp";
appHeader.innerHTML="<h1>To Do List</h1>"
appHeader.style.backgroundColor="cyan";
appbody.appendChild(appHeader);



 

myProject.todos.forEach(element => {
    const todoCard = document.createElement("div");
    todoCard.innerHTML=
    `<h2>${element.title}</h2>
    <p>${element.description}</p>
    <p>${element.dueDate}</p>
    <p>${element.priority}</p>
    <p>${element.notes}</p>

    `;
    appbody.appendChild(todoCard);
    
});

 
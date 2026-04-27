import greeting from "./greeting";
import "./styles.css";

const appbody=document.body.querySelector(".app");

const appHeader=document.createElement("div")

appHeader.className="derp";

appHeader.innerHTML="<h1>To Do List</h1>"

appHeader.style.backgroundColor="red";
appbody.appendChild(appHeader);
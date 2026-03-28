const greeting = console.log("Hello This is a Javascript project, working on this project that should be using a ES6.");

const container = document.querySelector(".container"); 

const todoContainer = document.createElement("div"); 
todoContainer.classList.add("todoContainer"); 

const todoHeading = document.createElement("h3"); 
todoHeading.classList.add("todoHeading"); 
todoHeading.innerHTML = "To-Do List";

const todoListContainer = document.createElement("div"); 
todoListContainer.classList.add("todoListContainer"); 

container.appendChild(todoContainer);
todoContainer.appendChild(todoHeading); 
todoContainer.appendChild(todoListContainer); 
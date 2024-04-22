"use strict";

import { Task } from "./Task.js";

// add a new item to the ToDo List

let taskList = [];


function addTask() {

    let item = document.getElementById('item');

    const TASK = new Task(item.value);

    taskList.push(TASK);
   
    renderTaskList();

    item.value = '';
    
}

function deleteAll(){
    
    confirm('Are you sure you want to delete all current tasks?');
    taskList = [];
    renderTaskList();
}

function renderTaskList() {

    let taskListElement = document.getElementById('itemList');

    taskListElement.textContent = '';

    for (let i = 0; i < taskList.length; i++) {

        // Generate a new element at the HTLM to show the added new task, and add a new row everytime a new task is added.

        let li = document.createElement('li'); 
        li.textContent = taskList[i].description;
        taskListElement.appendChild(li);

        // Generate a new button for every new item to delete it when the task its done.

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        // this block of code its used to capture the current value of 'i'

        deleteBtn.onclick = ((index) => {
            return () => {
                taskList.splice(index, 1); // Remove the task from the array
                renderTaskList(); // Re-render the task list
            };
        })(i);

        li.appendChild(deleteBtn);
    }

}
document.getElementById('btn_item').addEventListener('click', addTask);
document.getElementById('btn_deleteAll').addEventListener('click', deleteAll);
document.getElementById('item').addEventListener('keydown', function(e) { //Enable pressing 'Enter' to add a task.
    if (e.code === 'Enter') { 
        addTask()
    }
});
    

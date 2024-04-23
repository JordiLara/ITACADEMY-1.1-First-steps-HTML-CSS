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

// delete all items at the To-Do list.

function deleteAll(){
    
    let text = 'Are you sure you want to delete all current tasks?';

    if (confirm(text) == true) {
        taskList = [];
        renderTaskList();
    }  
}

// renders all items remaining at the task list.

function renderTaskList() {

    document.getElementById('countResult').innerHTML = taskList.length; 
    let taskListElement = document.getElementById('itemList');

    taskListElement.textContent = '';

    for (let i = 0; i < taskList.length; i++) {

        // Generate a new element at the HTLM to show the added new task, and add a new row everytime a new task is added.

        let li = document.createElement('li'); 
        li.classList.add('task');
        li.textContent = taskList[i].description;
        taskListElement.appendChild(li);

        // Generate a new checkbox element for every new task.

        let taskDone = document.createElement('input');
        taskDone.type = 'checkbox';
        li.appendChild(taskDone);

        // If a task its done and the user press the checkbox, draws a line 

        taskDone.addEventListener('change', function() {
            if (this.checked) {
                li.classList.add('task_done');
            } else {
                li.classList.remove('task_done');
            }
        });

        // Generate a new button for every new item to delete it when the task its done.

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        // this block of code its used to capture the current value of 'i'

        deleteBtn.onclick = ((index) => {
            return () => {
                if (confirm('The task is done?'))
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

    

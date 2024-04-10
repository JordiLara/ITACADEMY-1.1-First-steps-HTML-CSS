"use strict";

import { ToDo } from "./Task.js";

// add a new task to the ToDo List

function addTask() {

    let task = document.getElementById('task').value;
    let taskList = document.getElementById('taskList');

    const TASK = new ToDo(task); // Manel, no le veo el sentido al archivo Task

    // Generate a new element at the HTLM to show the added new task, and add a new row everytime a new task is added.
    let list = document.createElement('list'); 
    list.textContent = task.value;
    taskList.appendChild(list);
}

document.getElementById('btn_task').addEventListener('click', addTask);
/*document.getElementById('btn_deleteToDo').addEventListener('click', deleteToDo)*/
"use strict";

import { Task } from "./Task.js";

// function that clears inputs type text. Added it because were getting a .value error at some point. This way it doesn't happen.

function clearInputs() {
    let inputs = document.querySelectorAll('input:not([type="button"])');
    inputs.forEach( input => input.value= '' );
}

// add a new item to the ToDo List

let taskList = [];
console.log(taskList)

function addTask() {

    let item = document.getElementById('item').value;
    let itemList = document.getElementById('itemList');

    const TASK = new Task(item);

    taskList.push(TASK);

    renderTaskList();

    clearInputs()
    
}

function renderTaskList() {

    
    for (let task of taskList) {
        
        // Generate a new element at the HTLM to show the added new task, and add a new row everytime a new task is added.

        let li = document.createElement('li'); 

        li.textContent = task.item;
        itemList.appendChild(li);

        // Generate a new button for every new item to delete it when the task its done.


        let deleteBtn = document.createElement('button');

        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = function() {
        itemList.removeChild(li);
        };
        
        li.appendChild(deleteBtn);
    }
}

    document.getElementById('btn_item').addEventListener('click', addTask);

"use strict";

//import { Task } from "./Task.js";

// add a new task to the ToDo List

function addTask() {

    let item = document.getElementById('item');
    let itemList = document.getElementById('itemList');


    // Generate a new element at the HTLM to show the added new task, and add a new row everytime a new task is added.
    let li = document.createElement('li'); 

    li.textContent = item.value;
    itemList.appendChild(li);

    // Generate a new button for every new item to delete it when the task its done
    let deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function() {
    itemList.removeChild(li);
    };
  
    li.appendChild(deleteBtn);
  
    itemInput.value = '';

}
    document.getElementById('btn_item').addEventListener('click', addTask);

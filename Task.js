"use strict";

class ToDo {
    
    constructor (task) { 

        this._task = task;
        
    }

    get task() {
        return this._task;
    }
    
    set task(newTask) {
         this._task = newTask;
    }
}
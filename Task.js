"use strict";

export class Task {
    
    constructor (item) { 

        this._item = item;
        
    }

    get item() {
        return this._item;
    }

    set item(newItem) {
         this._item = newItem;
    }
}
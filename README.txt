### Project: To-Do List Application

**Description:**
Build a simple to-do list application where users can add, edit, and delete tasks. This project will allow you to practice basic JavaScript functionalities along with HTML, CSS, Bootstrap for styling, and Git for version control.

**Requirements:**

1. **Git Version Control:**
   - Create a new Git repository for the project.
   - Make commits as you make progress on the project, ensuring to commit logical chunks of changes.
   - Push your changes to a remote repository (e.g., GitHub) to keep a backup and for possible collaboration.

2. **HTML Structure:**
   - Create a basic HTML structure including the necessary elements such as `<div>`, `<ul>`, `<li>`, `<input>`, `<button>`, etc.
   - Set up placeholders for where the tasks will be displayed.

2. **CSS Styling:**
   - Use Bootstrap for basic styling to make the application responsive and visually appealing.
   - Style the to-do list items, input field, buttons, and overall layout 

3. **JavaScript Functionality:**
   - Implement functionality to add a new task to the list when the user enters a task in the input field and presses enter OR clicks on an "Add Task" button.
   - Add a feature to clear all tasks from the list (i.e. a "Delete all tasks" link somewhere)
   - Allow users to mark tasks as completed (clicking on a "checkbox" next to the task). When a task is completed, it appears strikedthrough ~~like this~~ and also in a different color (example: gray, instead of black). You can also un-check the checkbox to mark the task as not-done again (revert the change you just did).
   - Allow users to delete tasks from the list (clicking on a "Delete" link next to each task).
   - Provide the ability to edit tasks inline (clicking on an "Edit" link next to each task).
   - Show somewhere the total number of pending tasks, which gets updated each time a task is added, done or deleted (i.e. "Pending Tasks (16)" could be the list header)
   - "Delete" and "Edit" links for each task should only appear when you have the mouse cursor over that specific task.
   - Implement local storage functionality so that tasks persist even after refreshing the page. [Read guide about localStorage](https://blog.logrocket.com/localstorage-javascript-complete-guide/)


5. **Additional Features (Optional for complexity):**
   - When a task is "mark as done", it is moved to a separate list of "Done tasks", and when un-done (i.e. if we un-check the checkbox), then it moves back to its original list.
   - Enable drag and drop functionality to reorder tasks within a list (does not apply to the special "Done tasks" list)
   - Add support for multiple lists, each with its own name: so first thing you'd do is give a name a list (i.e. "Groceries"), then the list is created, and each list has an input + "Add task" button to add tasks to it, but you have multiple lists each with its own list of tasks.
   - Implement filtering/search functionality to search for specific tasks.

### Rough idea of how the app can look like

The finished app could look and work something like this, except it's missing a "checkbox" on the left of each task to "mark it as done"

![image](https://media.geeksforgeeks.org/wp-content/uploads/20210125180924/20210125180802.gif)




### Project Duration:
This project could take around a week to complete depending on your familiarity with the technologies and complexity of the additional features you choose to implement. Make sure to break down the project into smaller tasks and allocate time for learning new concepts if needed. Remember, the goal is not just to complete the project but also to learn and improve your skills along the way.
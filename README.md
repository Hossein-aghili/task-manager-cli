# Console Task Manager

A simple command-line task manager built using vanilla JavaScript.  
You can add, edit, remove, toggle, and filter tasks based on their completion status.

## Features

- Add new tasks
- Edit existing tasks
- Toggle tasks as completed/pending
- Delete tasks by ID
- List all, completed, or pending tasks
- Auto-increment task IDs

## Technologies

- JavaScript (ES6+)
- Runs directly in Node.js or browser console (no external dependencies)

## How to Run

### Option 1: Using Node.js

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Save the code in a file called taskManager.js
3. Open your terminal or command prompt.
4. Navigate to the folder where taskManager.js is saved.
5. Run the file:

bash
node taskManager.js


You’ll see the tasks being added, edited, toggled, and displayed directly in the terminal.

### Option 2: Using Browser Console

1. Open any modern browser (Chrome, Firefox, Edge, etc.)
2. Open Developer Tools (F12 or right-click > Inspect > Console tab)
3. Paste the entire code into the console and hit Enter.

## Example Output


Added task: Buy groceries
Added task: Finish homework

--- ALL TASKS ---
1 - Buy groceries - Pending
2 - Finish homework - Pending

Toggled task Buy groceries to: true
Edited task ID 2 to: Finish homework

--- COMPLETED TASKS ---
1 - Buy groceries - Completed

--- PENDING TASKS ---
2 - Finish homework - Pending

Removed task with id succsesFully 1

--- ALL TASKS ---
2 - Finish homework - Pending


## File Structure

- taskManager.js → Main logic for managing tasks in console

## Author

Created with purpose and passion by Hossein.

## License

This project is open source and free to use for educational and personal purposes.

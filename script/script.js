class TaskManager {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }
    addTask(title) {
        const task = {
            id: this.nextId++,
            title,
            completed: false,
        }
        this.tasks.push(task);
        console.log(`Added task ${title}`);
    }
    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id)
        console.log(`Removed task with id succsesFully ${id}`);
    }
    toggleTask(id) {
        const task = this.tasks.find(task => task.id === id)
        if (task) {
            task.completed = !task.completed
            console.log(`Toggled task ${task.title} to: ${task.completed}`)
        } else {
            console.log('Task not found')
        }
    }
    editTask(id, newTitle) {
        const task = this.tasks.find(task => task.id === id)
        if (task) {
            task.title = newTitle
            console.log(`Edited task ID ${id} to: ${newTitle}`)
        } else {
            console.log('Task not found')
        }
    }
    listTasks(filter = 'all') {
        let filteredTasks = this.tasks;
        if (filter === 'completed') {
            filteredTasks = this.tasks.filter(task => task.completed)
        } else if (filter === 'pending') {
            filteredTasks = this.tasks.filter(task => !task.completed)
        }
        console.log(`/n--- ${filter.toUpperCase()} TASKS ---`)
        filteredTasks.forEach(task => {
            console.log(`${task.id} - ${task.title} - ${task.completed ? 'Completed' : 'Pending'}`)
        })
    }
}

const  manager = new TaskManager();
manager.addTask('Buy groceries');
manager.addTask('Finish homework');
manager.listTasks();

manager.toggleTask(1);
manager.editTask(2, 'Finish homework');

manager.listTasks('completed');
manager.listTasks('pending');

manager.removeTask(1);
manager.listTasks();
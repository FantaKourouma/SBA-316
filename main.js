document.addEventListener('DOMContentLoaded',() => {


// Caching elements 
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

console.log(taskForm)

// Event listeners
taskForm.addEventListener('submit', addTask);
taskList.addEventListener('click', toggleTaskCompletion);


// Function to add a new task 
function addTask(e) {
    e.preventDefault()
    const taskValue = e.target[0].value.trim()
    console.log(e)
    if (taskValue) {
        // Created new list item 
        const li = document.createElement('li');
        li.textContent = taskValue;
        li.classList.add('task-item');
    

        // Appened new task to the list
        taskList.appendChild(li);
        taskInput.value = '';

    }
}


// Function to toggle task completion
function toggleTaskCompletion(event) {
    const target = event.target;
    if (target.matches('.task-item')) {
        target.classList.toggle('completed');
    }
}
});
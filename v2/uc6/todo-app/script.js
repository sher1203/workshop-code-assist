// script.js
const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');
const addTaskForm = document.getElementById('add-task-form');

let tasks = []; // Array to store tasks

// Load tasks from local storage (if any)
loadTasks();

// Function to add a new task
addTaskForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from submitting normally

  const taskDescription = taskInput.value.trim();
  if (taskDescription !== "") {
    const newTask = {
      description: taskDescription,
      completed: false
    };
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    taskInput.value = ""; // Clear the input field
  }
});

// Function to render tasks in the list
function renderTasks() {
  taskList.innerHTML = ""; // Clear the list

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${index + 1}. ${task.description}`; // Concatenate strings correctly
    if (task.completed) {
      listItem.classList.add('completed');
    }

    // Add event listeners for marking complete and removing
    listItem.addEventListener('click', () => {
      task.completed = !task.completed;
      saveTasks();
      renderTasks();
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
  });
}

// Function to save tasks to local storage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasks() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  }
}

// Initial rendering of tasks
renderTasks();


// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listener
loadEventListners();

// load all event function
function loadEventListners() {
  // add task form / add task event
  form.addEventListener('submit', addTask);
  // remove task event
  taskList.addEventListener('click', removeTask);
  // clear task event
  clearBtn.addEventListener('click', clearTask);
  // filter tasks event
  filter.addEventListener('keyup', filterTask);
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);

  // Get tasks from LS
  function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(task => {
      // Create li element
      const li = document.createElement('li');
      li.className = 'collection-item';
      // create text node and append to li
      li.appendChild(document.createTextNode(task));
      // create new link element
      const link = document.createElement('a');
      link.className = 'delete-item secondary-content';
      // add icon HTML
      link.innerHTML = `<i class='fas fa-trash'></i>`
      // append link to li
      li.appendChild(link);

      // append li to UL
      taskList.appendChild(li);
    })
  }

  // Add task function
  function addTask(e) {
    if (taskInput.value === '') {
      alert('Add a task');
    }

    // Create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    // add icon HTML
    link.innerHTML = `<i class='fas fa-trash'></i>`
    // append link to li
    li.appendChild(link);

    // append li to UL
    taskList.appendChild(li);

    // store to local storage
    storeTaskInLocalStorage(taskInput.value);

    // clear input
    taskInput.value = '';


    e.preventDefault();
  }

  // store task in local storage
  function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // remove task
  function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
      if (confirm('Are you sure?')) {
        e.target.parentElement.parentElement.remove();

        // remove from Local Storage
        removeFromLocalStorage(e.target.parentElement.parentElement);
      }
    }
  }

  // remove from local storage
  function removeFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task, index) => {
      if (taskItem.textContent === task) {
        tasks.splice(index, 1);
      }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // clear task
  function clearTask(e) {
    //taskList.innerHTML = '';

    // Faster
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }

    // clear from local storage
    clearTasksFromLocalStorage();
  }

  // clear tasks from LS
  function clearTasksFromLocalStorage() {
    localStorage.clear();
  }

  // Filter Task
  function filterTask(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(task => {
      const item = task.firstChild.textContent;

      if (item.toLocaleLowerCase().indexOf(text) != -1) {
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }

    })
  }
}


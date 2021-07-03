// DOM elements
const UIBtnAddTask = document.querySelector('.btn'),
  UITaskInput = document.querySelector('#task'),
  UIList = document.querySelector('.collection'),
  UIBtnClearTask = document.querySelector('.clear-tasks'),
  UIFilterInput = document.querySelector('#filter');

// Event listener
UIBtnAddTask.addEventListener('click', addTask);
UIList.addEventListener('click', removeTask);
UIBtnClearTask.addEventListener('click', clearTasks);
UIFilterInput.addEventListener('keyup', filterTasks);

// run get task
getTasks();

// get tasks
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = 'collection-item';
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = `<i class='fas fa-trash'></i>`
    li.appendChild(link);
    li.appendChild(document.createTextNode(task));
    UIList.appendChild(li);
  });
}

// add task function
function addTask(e) {
  if (UITaskInput.value === '') {
    alert('Please type a task description');
  }

  const li = document.createElement('li');
  li.className = 'collection-item';
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = `<i class='fas fa-trash'></i>`

  li.appendChild(link);
  li.appendChild(document.createTextNode(UITaskInput.value));
  UIList.appendChild(li);
  storeTaskInLS(UITaskInput.value);
  UITaskInput.value = '';

  e.preventDefault();
}

function storeTaskInLS(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// remove task function
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
      removeFromLS(e.target.parentElement.parentElement);
    }
  }
}

function removeFromLS(element) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    let tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((task, index) => {
    if (task === element.textContent) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));

}

// clear tasks
function clearTasks(e) {
  UIList.childNodes.forEach(task => task.remove());
}

function filterTasks(e) {
  const input = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(item => {
    const text = item.textContent;
    if (text.toLowerCase().indexOf(input) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
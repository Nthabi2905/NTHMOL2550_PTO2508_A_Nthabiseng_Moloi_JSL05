const STORAGE_KEY = "kanban_tasks";

/**
 * Save tasks to localStorage
 */
function saveTasksToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

/**
 * Load tasks from localStorage
 */
function loadTasksFromStorage() {
  const storedTasks = localStorage.getItem(STORAGE_KEY);

  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  } else {
    tasks = [...initialTasks];
    saveTasksToStorage();
  }
}

const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },
  {
    id: 11,
    title: "Learn Data Structures and Algorithms 📚",
    description: "Study fundamental data structures and algorithms",
    status: "todo",
  },
  {
    id: 12,
    title: "Contribute to Open Source Projects 🌐",
    description: "Gain practical experience collaborating",
    status: "done",
  },
  {
    id: 13,
    title: "Build Portfolio Projects 🛠️",
    description: "Create projects to showcase your skills",
    status: "done",
  },
];

let tasks = [];

const todoColumn = document.getElementById("todo-column");
const doingColumn = document.getElementById("doing-column");
const doneColumn = document.getElementById("done-column");

const modal = document.getElementById("task-modal");

const titleInput = document.getElementById("task-title");
const descInput = document.getElementById("task-desc");
const statusInput = document.getElementById("task-status");

let currentTaskId = null;

function createTaskCard(task) {
  const card = document.createElement("div");

  card.className =
    "bg-card p-6 rounded-xl shadow cursor-pointer hover:shadow-lg transition-shadow";

  card.innerHTML = `<h3 class="font-bold text-lg">${task.title}</h3>`;

  card.addEventListener("click", () => openTaskModal(task));

  return card;
}

function renderTasks() {
  todoColumn.innerHTML = "";
  doingColumn.innerHTML = "";
  doneColumn.innerHTML = "";

  tasks.forEach((task) => {
    const card = createTaskCard(task);

    if (task.status === "todo") todoColumn.appendChild(card);

    if (task.status === "doing") doingColumn.appendChild(card);

    if (task.status === "done") doneColumn.appendChild(card);
  });

  updateTaskCounts();
}

function updateTaskCounts() {
  document.getElementById("todo-count").textContent = tasks.filter(
    (t) => t.status === "todo",
  ).length;

  document.getElementById("doing-count").textContent = tasks.filter(
    (t) => t.status === "doing",
  ).length;

  document.getElementById("done-count").textContent = tasks.filter(
    (t) => t.status === "done",
  ).length;
}

function openTaskModal(task) {
  currentTaskId = task.id;

  titleInput.value = task.title;
  descInput.value = task.description;
  statusInput.value = task.status;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");

  titleInput.value = "";
  descInput.value = "";
  statusInput.value = "todo";
}

document.getElementById("add-task-btn").addEventListener("click", () => {
  currentTaskId = null;

  titleInput.value = "";
  descInput.value = "";
  statusInput.value = "todo";

  modalTitle.textContent = "Add New Task";
  saveBtn.textContent = "Create Task";

  modal.classList.remove("hidden");
  modal.classList.add("flex");
});

function saveTask() {
  if (currentTaskId) {
    // EDIT EXISTING TASK
    const task = tasks.find((t) => t.id === currentTaskId);

    task.title = titleInput.value;
    task.description = descInput.value;
    task.status = statusInput.value;
  } else {
    // CREATE NEW TASK
    const newTask = {
      id: Date.now(), // unique ID
      title: titleInput.value,
      description: descInput.value,
      status: statusInput.value,
    };

    tasks.push(newTask);
  }

  saveTasksToStorage(); // ⭐ important

  loadTasksFromStorage();
  renderTasks();
  closeModal();
}

document.getElementById("add-task-btn").addEventListener("click", () => {
  currentTaskId = null;

  titleInput.value = "";
  descInput.value = "";
  statusInput.value = "todo";

  modal.classList.remove("hidden");
  modal.classList.add("flex");
});

document.getElementById("save-task-btn").addEventListener("click", saveTask);

renderTasks();

const modalTitle = document.getElementById("modal-title");
const saveBtn = document.getElementById("save-task-btn");

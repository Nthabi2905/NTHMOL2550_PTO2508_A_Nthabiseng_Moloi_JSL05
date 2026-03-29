# 🗂️ Kanban Task Management App

A simple and responsive Kanban board built with **HTML, Tailwind CSS, and JavaScript**.
This app allows users to create, edit, and manage tasks across different stages of progress.

---

## 🚀 Features

- ➕ Add new tasks
- ✏️ Edit existing tasks
- 📌 Organize tasks into:
  - To Do
  - Doing
  - Done

- 💾 Persistent storage using **Local Storage**
- 🔄 Tasks remain after page refresh
- 📊 Dynamic task counters per column
- 📱 Fully responsive design

---

## 🛠️ Technologies Used

- Tailwind CSS
- JavaScript (Vanilla JS)
- Local Storage

---

## 📂 Project Structure

```
📁 project-folder
 ├── index.html
 ├── scripts.js
 ├── assets/
 └── README.md
```

---

## ⚙️ How It Works

### 1. Task Creation

Users can click the **“+ Add New Task”** button to open a modal and create a new task.

### 2. Task Editing

Clicking on any task card opens the modal with pre-filled details, allowing updates.

### 3. Task Management

Tasks are automatically grouped into columns based on their status:

- `todo`
- `doing`
- `done`

### 4. Data Persistence

All tasks are saved in the browser using **localStorage**:

- Tasks are saved whenever:
  - A new task is added
  - An existing task is edited

- On page load:
  - Tasks are retrieved from localStorage
  - If no saved data exists, default tasks are loaded

---

## 💾 Local Storage Example

```javascript
localStorage.setItem("tasks", JSON.stringify(tasks));
```

```javascript
let tasks = JSON.parse(localStorage.getItem("tasks")) || initialTasks;
```

---

## ▶️ How to Run the Project

1. Download or clone the repository
2. Open `index.html` in your browser
3. Start managing your tasks 🎉

---

## 🌟 Future Improvements

- 🗑️ Delete tasks
- 🔄 Drag-and-drop functionality
- 📌 Multiple boards
- 🌙 Dark mode
- ☁️ Backend integration (database)

---

## 👩🏽‍💻 Author

**Nthabiseng Moloi**

---

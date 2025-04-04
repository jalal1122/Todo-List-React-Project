# Todo List React Project

A simple and interactive Todo List application built with **React**, **TailwindCSS**, and **Vite**. This project allows users to manage their tasks with features like adding, editing, deleting, marking tasks as finished, and reordering tasks using drag-and-drop functionality.

---

## 🔥 Features

- ✅ Add new tasks
- 📝 Edit existing tasks
- ❌ Delete tasks
- ✔️ Mark tasks as completed
- 🔃 Drag-and-drop to reorder tasks
- 💾 Persistent storage using Local Storage

---

## 🧠 Tech Stack

- **React** – Frontend JavaScript library
- **Vite** – Fast development server and build tool
- **TailwindCSS** – Utility-first CSS framework
- **Styled-Components** – Custom styling for components
- **React Icons** – Icon library for React

---

## Live Demo : https://mjtodolistreact.vercel.app/

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/jalal1122/todo-list-react.git
cd todo-list-react
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

### 4. View in Browser
Open your browser and navigate to:
```
http://localhost:5173
```

---

## 📁 Folder Structure
```
todo-list-react/
├── public/                     # Static assets
├── src/
│   ├── Components/            # Reusable components
│   │   └── TodoList.jsx       # Main Todo List component
│   ├── App.jsx                # Root component
│   ├── App.css                # Global styles
│   └── main.jsx               # Entry point
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies and scripts
└── README.md                  # Documentation
```

---

## ⚙️ Usage

### ➕ Adding a Task
- Type a task in the input box.
- Click **Add Task** or press **Enter**.

### ✏️ Editing a Task
- Click **Edit** next to the task.
- Modify the text and update it.

### 🗑️ Deleting a Task
- Click **Delete** next to the task.

### ✅ Marking as Finished
- Tick the checkbox to mark as completed.
- Untick to mark as incomplete.

### 🔄 Reordering Tasks
- Drag and drop tasks to reorder.

---

## 🎨 Customization

### 💡 TailwindCSS
- Modify Tailwind classes in JSX files.
- Update the Tailwind config for advanced theming.

### 💾 Local Storage
- The app uses `localStorage` to store tasks.
- You can modify `saveToLocalStorage()` and `getTodos()` in `TodoList.jsx` to change the storage logic.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for improvements or suggestions.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🙏 Acknowledgments

Thanks to the creators of:
- React
- Vite
- TailwindCSS
- React Icons
- Styled-Components

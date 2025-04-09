// src/script.js

// Function to fetch tasks and display them
async function loadTasks() {
    const tableBody = document.getElementById("task-list");
    tableBody.innerHTML = ''; // Clear existing data

    try {
        const response = await fetch("/api/");
        if (!response.ok) throw new Error("Failed to fetch tasks");

        const tasks = await response.json();
        tasks.forEach(task => {
            const row = document.createElement("tr");

            const idCell = document.createElement("td");
            idCell.textContent = task.id;
            row.appendChild(idCell);

            const TitleCell = document.createElement("td");
            TitleCell.textContent = task.title;
            row.appendChild(TitleCell);

            const descCell = document.createElement("td");
            descCell.textContent = task.description;
            row.appendChild(descCell);

            const StatusCell = document.createElement("td");
            StatusCell.textContent = task.completed;
            row.appendChild(StatusCell);

            const actionCell = document.createElement("td");
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";

            deleteButton.addEventListener("click", async () => {
                try {
                    const res = await fetch(`/api/${task.id}`, {
                        method: "DELETE"
                    });
                    if (res.ok) {
                        row.remove();
                    } else {
                        alert("Failed to delete task");
                    }
                } catch (err) {
                    console.error("Delete error:", err);
                }
            });

            actionCell.appendChild(deleteButton);
            row.appendChild(actionCell);
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

// Function to add a new task
async function addTask(event) {
    event.preventDefault();

    const { title, task } = event.target;
    if (!task.value.trim()) return alert("Please enter a task description.");

    try {
        const response = await fetch("/api/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: title.value.trim(),
                description: task.value.trim(),
                completed: "false"  // Send "false" as a string
            })
        });

        if (response.ok) {
            event.target.reset();
            loadTasks();
        } else {
            alert("Failed to add task");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

// function to search tasks
async function searchTasks(event) {
    event.preventDefault();
    const searchTerm = event.target.value.toLowerCase();
    const tableBody = document.getElementById("task-list");
    tableBody.innerHTML = ''; // Clear existing data

    try {
        const response = await fetch("/api/");
        if (!response.ok) throw new Error("Failed to fetch tasks");

        const tasks = await response.json();
        const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(searchTerm));

        filteredTasks.forEach(task => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${task.id}</td>
                <td>${task.title}</td>
                <td>${task.description}</td>
                <td>${task.completed}</td>
                <td><button class="delete-btn">Delete</button></td>
            `;
            row.querySelector(".delete-btn").addEventListener("click", async () => {
                try {
                    const res = await fetch(`/api/${task.id}`, { method: "DELETE" });
                    if (res.ok) row.remove();
                    else alert("Failed to delete task");
                } catch (err) {
                    console.error("Delete error:", err);
                }
            });
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Fetch error:", error);
    }
}


// Load tasks when the page is ready
document.addEventListener("DOMContentLoaded", loadTasks);


// Add event listener to the form submission
document.getElementById("task-form").addEventListener("submit", addTask);
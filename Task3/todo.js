// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create a new task item
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        // Create buttons for completing and deleting tasks
        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.onclick = completeTask;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = deleteTask;

        // Append buttons to the task item
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);

        // Append the task item to the pending tasks list
        const pendingList = document.getElementById("pendingList");
        pendingList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";
    }
}

// Function to mark a task as completed
function completeTask() {
    const taskItem = this.parentElement;
    const completedList = document.getElementById("completedList");
    taskItem.removeChild(taskItem.childNodes[0]); // Remove the "Complete" button
    completedList.appendChild(taskItem);
}

// Function to delete a task
function deleteTask() {
    const taskItem = this.parentElement;
    taskItem.remove();
}

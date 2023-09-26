const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="markTaskAsCompleted(this)">Completado</button>
            <button onclick="deleteTask(this)">Eliminar</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function markTaskAsCompleted(button) {
    const li = button.parentElement;
    li.classList.toggle('completed');
}

function deleteTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}

function deleteCompletedTasks() {
    const completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach(task => taskList.removeChild(task));
}

const tasks = [
    { name: "Balais Cuisine", assignedTo: "" },
    { name: "Balais Salon", assignedTo: "" },
    { name: "Balais Véranda", assignedTo: "" },
    { name: "Cage du Lapin", assignedTo: "" },
    { name: "Nourriture Chien", assignedTo: "" }
];

const people = ["Nathan", "Aaron", "Anna"];
let currentIndex = 0;

function assignTasks() {
    tasks.forEach((task, i) => {
        task.assignedTo = people[(currentIndex + i) % people.length];
    });
    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = `${task.name} - ${task.assignedTo}`;
        taskList.appendChild(li);
    });
}

document.getElementById("next-turn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % people.length;
    assignTasks();
});

assignTasks();

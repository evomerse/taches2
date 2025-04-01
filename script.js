const tasks = [
    { name: "Balais", location: "Cuisine" },
    { name: "Balais", location: "Salon" },
    { name: "Balais", location: "Véranda" },
    { name: "Cage du Lapin", location: "" },
    { name: "Nourriture Chien", location: "" }
];

const people = ["Nathan", "Aaron", "Anna"];
const locations = ["Véranda", "Cuisine", "Salon"]; // Rotation hebdomadaire

// Fonction pour obtenir la date du dernier dimanche
function getLastSunday() {
    let today = new Date();
    let dayOfWeek = today.getDay(); // 0 = Dimanche, 1 = Lundi...
    let diff = dayOfWeek === 0 ? 0 : dayOfWeek; 
    let lastSunday = new Date(today);
    lastSunday.setDate(today.getDate() - diff);
    return lastSunday.toISOString().split("T")[0]; // Format YYYY-MM-DD
}

// Fonction pour calculer la rotation basée sur la semaine actuelle
function getWeekRotation() {
    let startDate = new Date("2024-03-24"); // Dimanche de référence
    let currentDate = new Date();
    let diffWeeks = Math.floor((currentDate - startDate) / (7 * 24 * 60 * 60 * 1000));
    return diffWeeks % people.length; // 0, 1 ou 2
}

// Assigne les tâches en fonction de la semaine
function assignTasks() {
    let rotation = getWeekRotation();
    tasks.forEach((task, i) => {
        if (task.name === "Balais") {
            task.assignedTo = people[i];
            task.location = locations[(i + rotation) % locations.length];
        } else {
            task.assignedTo = people[i % people.length];
        }
    });
    displayTasks();
}

// Affiche les tâches avec la date
function displayTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = `<h2>Tâches du dimanche ${getLastSunday()}</h2>`;
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = `${task.name} ${task.location ? '(' + task.location + ')' : ''} - ${task.assignedTo}`;
        taskList.appendChild(li);
    });
}

// Lancement de la répartition
assignTasks();

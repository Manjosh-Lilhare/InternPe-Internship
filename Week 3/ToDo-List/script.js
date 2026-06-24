const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskPriority = document.getElementById("taskPriority");
const taskCategory = document.getElementById("taskCategory");

const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];

renderTasks();

addBtn.addEventListener("click", addTask);

function addTask(){

    const title = taskTitle.value.trim();
    const description = taskDescription.value.trim();
    const priority = Number(taskPriority.value);
    const category = taskCategory.value;

    if(title === ""){
        alert("Please enter task title");
        return;
    }

    tasks.push({
        title,
        description,
        priority,
        category,
        completed:false,
        createdAt:Date.now()
    });

    saveTasks();

    taskTitle.value = "";
    taskDescription.value = "";
}

function sortTasks(){

    tasks.sort((a,b)=>{

        if(a.completed !== b.completed){
            return a.completed - b.completed;
        }

        return b.priority - a.priority;

    });

}

function renderTasks(){

    sortTasks();

    taskList.innerHTML = "";

    tasks.forEach((task,index)=>{

        let priorityText = "";
        let priorityClass = "";

        if(task.priority === 3){
            priorityText = "🔥 High";
            priorityClass = "high";
        }
        else if(task.priority === 2){
            priorityText = "⚡ Medium";
            priorityClass = "medium";
        }
        else{
            priorityText = "🌱 Low";
            priorityClass = "low";
        }

        const card = document.createElement("div");

        card.className = task.completed
        ? "task-card completed-card"
        : "task-card";

        card.innerHTML = `
            <div class="task-header">

                <div class="task-title ${task.completed ? "completed-title" : ""}">
                    ${task.title}
                </div>

            </div>

            <div class="task-description">
                ${task.description || "No description provided"}
            </div>

            <div class="badges">

                <span class="badge ${priorityClass}">
                    ${priorityText}
                </span>

                <span class="badge">
                    ${task.category}
                </span>

            </div>

            <div class="actions">

                <button
                    class="action-btn complete-btn"
                    data-index="${index}"
                >
                    ${task.completed ? "↩ Undo" : "✔ Complete"}
                </button>

                <button
                    class="action-btn delete-btn"
                    data-index="${index}"
                >
                    🗑 Delete
                </button>

            </div>
        `;

        taskList.appendChild(card);
    });

    attachEvents();

    taskCount.textContent = tasks.length;
}

function attachEvents(){

    document
    .querySelectorAll(".complete-btn")
    .forEach((btn)=>{

        btn.addEventListener("click",()=>{

            const index = btn.dataset.index;

            tasks[index].completed =
            !tasks[index].completed;

            saveTasks();
        });

    });

    document
    .querySelectorAll(".delete-btn")
    .forEach((btn)=>{

        btn.addEventListener("click",()=>{

            const index = btn.dataset.index;

            tasks.splice(index,1);

            saveTasks();
        });

    });

}

function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

    renderTasks();
}
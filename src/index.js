document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //Grab form using its id
  const createTaskForm = document.getElementById("create-task-form");
  //Grab input field using id
  const newTaskDescription = document.getElementById("new-task-description");

  //Enables us to sort tasks depending on their priority
  const newTaskPriority = document.getElementById("new-task-priority")

  //New Tasks List
  const newTasksList = document.getElementById("tasks");

  //Add Event Listener to the form
  createTaskForm.addEventListener("submit", createNewTask);

});

//Define the createNewTask function
const createNewTask = function (event) {
  //Stops form from trying to submit
  event.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();  //Resets the form


//Delete a task
const deleteBtn = document.createElement("button");
deleteBtn.textContent = " X"
newTask.appendChild(deleteBtn);
// 
deleteBtn.addEventListener("click", deleteTask)
};

//Add the new task to the list of tasks
const appendNewTask = function (task) {
  document.getElementById("tasks").appendChild(task);
}

function deleteTask (event) {
  event.target.parentNode.remove();
}
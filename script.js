const textBox = document.getElementById("text-box");
const taskContainer = document.getElementById("task-container");

function addTask() {
  if (textBox.value === "") {
    alert("You must enter something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = textBox.value;
    taskContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u274c";
    li.appendChild(span);
  }
  textBox.value = "";
  saveData();
}

taskContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", taskContainer.innerHTML);
}

function showData() {
  taskContainer.innerHTML = localStorage.getItem("data");
}
showData();

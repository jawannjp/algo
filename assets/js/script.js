var tasks = [
  {
    name: "Faire les ",
    category: "Personnel"
  },
  {
    name: "Faire les cours",
    category: "Personnel"
  },
  {
    name: "Fair",
    category: "Pro"
  },
  {
    name: "Fa",
    category: "Pro"
  },
  {
    name: "Faire l",
    category: "Personnel"
  }
];

function display() {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].category == "Pro") {
      console.log(tasks[i]);
    }
  }
}


function deleteCatTask() {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].category == "Pro") {
      tasks.splice(i, 1);
    }
  }
}





var menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener('click', onMenuClick)

var header = document.getElementById('header');

function onMenuClick() {
  menuBtn.classList.toggle('menuBtn--open');
  header.classList.toggle('header--open');
}



var addTaskBtn = document.getElementById('addTaskBtn');
var addTaskPopup = document.getElementById('addTaskPopup');

addTaskBtn.addEventListener('click', displayPopup);

function displayPopup() {
  addTaskPopup.classList.toggle('addTask--open');
}
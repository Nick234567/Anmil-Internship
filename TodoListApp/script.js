// getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");
const searchInput = document.getElementById('search');
const list = document.getElementById('list');



// onkeyup event
inputBox.onkeyup = () => {
  let userEnteredValue = inputBox.value; //getting user entered value
  if (userEnteredValue.trim() != 0) {
    //if the user value isn't only spaces
    addBtn.classList.add("active"); //active the add button
  } else {
    addBtn.classList.remove("active"); //unactive the add button
  }
};

showTasks(); //calling showTask function

addBtn.onclick = () => {
  //when user click on Add icon button
  let userEnteredValue = inputBox.value; // input field value
  const listArray = getItem("New Todo");
  listArray.push({ value: userEnteredValue, isCompleted: false });
  setItem("New Todo", listArray); //transforming js object into a json string
  showTasks(); //calling showTask function
  addBtn.classList.remove("active");
};

function showTasks() {
  const listArray = getItem("New Todo");
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.filter((i) => !i.isCompleted).length;
  if (listArray.length > 0) {
    deleteAllBtn.classList.add("active"); //active the delete button
  } else {
    deleteAllBtn.classList.remove("active"); //unactive the delete button
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li onclick="toogleTaskCompletion(${index})" class=${
      element.isCompleted ? "checked" : ""
    }>${
      element.value
    }<span class="icon" onclick="event.stopPropagation(); deleteTask(${index})">
    <i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
  inputBox.value = "";
}

function toogleTaskCompletion(index) {
  let getLocalStorageData = getItem("New Todo");
  const listArray = getLocalStorageData.map((item, i) => {
    if (i === index) {
      return {
        ...item,
        isCompleted: !item.isCompleted,
      };
    } else {
      return item;
    }
  });
  setItem("New Todo", listArray);
  showTasks(); //call the showTasks function
}

// delete task function
function deleteTask(index) {
  let listArray = getItem("New Todo");
  listArray.splice(index, 1); //delete or remove the li
  setItem("New Todo", listArray);
  showTasks(); //call the showTasks function
}

// clear all tasks function
deleteAllBtn.onclick = () => {
  listArray = []; //empty the array
  setItem("New Todo", listArray); //set the item in localstorage
  showTasks(); //call the showTasks function
};

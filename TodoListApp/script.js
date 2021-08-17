// getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

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
  let getLocalStorageData = localStorage.getItem("New Todo");
  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData); //transforming json string into a js object
  }
  listArray.push({ value: userEnteredValue, isCompleted: false });
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json string
  showTasks(); //calling showTask function
  addBtn.classList.remove("active");
};

function showTasks() {
  let getLocalStorageData = localStorage.getItem("New Todo");
  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent =  listArray.filter((i) => !i.isCompleted).length;;
  if (listArray.length > 0) {
    deleteAllBtn.classList.add("active"); //active the delete button
  } else {
    deleteAllBtn.classList.remove("active"); //unactive the delete button
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li onclick="toogleTaskCompletion(${index})" class=${
      element.isCompleted ? "checked" : ""
    }>${element.value}<span class="icon" onclick="event.stopPropagation(); deleteTask(${index})">
    <i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
  inputBox.value = "";
}

function toogleTaskCompletion(index) {
  let getLocalStorageData = JSON.parse(localStorage.getItem("New Todo"));
  listArray = getLocalStorageData.map((item, i) => {
    if (i === index) {
      return {
        ...item,
        isCompleted: !item.isCompleted,
      };
    } else {
      return item;
    }
  });
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); //call the showTasks function
}

// delete task function
function deleteTask(index) {
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); //delete or remove the li
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); //call the showTasks function
}

// clear all tasks function
deleteAllBtn.onclick = () => {
  listArray = []; //empty the array
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //set the item in localstorage
  showTasks(); //call the showTasks function
};
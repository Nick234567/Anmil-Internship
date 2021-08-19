const getItem = (name) => {
  let listArray;
  let getLocalStorageData = localStorage.getItem(name);
  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData); //transforming json string into a js object
  }
  return listArray;
};

const setItem = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};

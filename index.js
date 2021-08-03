const main = document.querySelector(".main");

USER_INFOS.forEach(({ firstName, lastName, dateOfBirth }) => {
  const el = document.createElement("li");

  const name = `${firstName} ${lastName}`;
  let DOB = new Date(dateOfBirth);

  let today = new Date();
  let age = today.getTime() - DOB.getTime();
  let elapsed = new Date(age);
  let year = elapsed.getYear() - 70;
  let month = elapsed.getMonth();
  let day = elapsed.getDay();
  let ageTotal = `${year} years ${month} months and ${day} days`;

  el.innerHTML = `<span class="name">${name}</span> is <span class="age">${ageTotal}</span> old.`;
  main.appendChild(el);
});

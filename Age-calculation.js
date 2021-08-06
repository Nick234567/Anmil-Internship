const persons = [
    {
        firstName: "Aayush",
        lastName: "Shrestha",
        dateOfBirth: "1986-09-23",
      },
    {
      firstName: "Kushal",
      lastName: "Bajracharya",
      dateOfBirth: "1998-10-26",
    },
    {
      firstName: "Kiran",
      lastName: "Ghimire",
      dateOfBirth: "2001-11-11",
    },
    {
      firstName: "Nitesh",
      lastName: "Updhyaya",
      dateOfBirth: "1997-11-2",
    },
    {
      firstName: "Amresh",
      lastName: "Thakur",
      dateOfBirth: "1997-03-11",
    },
  ];
  persons.forEach(({ firstName, lastName, dateOfBirth }) => {
    
  
    const name = `${firstName} ${lastName}`;
    let DOB = new Date(dateOfBirth);
  
    let today = new Date();
    let age = today.getTime() - DOB.getTime();
    let elapsed = new Date(age);
    let year = elapsed.getYear() - 70; 
    let month = elapsed.getMonth();
    let day = elapsed.getDay();
    let ageTotal = `${year} years ${month} months and ${day} days`;
    console.log(`name: ${name} age: ${ageTotal}`);
  });
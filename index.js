    // 1==>
    let person = {
        name: "Ajay Morde",
        age: 24,
        email: "ajaymorde@gmail",
        hobbies: ["reading", "coding", "playing video games"]
      };
      
      console.log(person);
      console.log("--------------------------------------------------------------------")
      // ----------------------------------------------------------------------------------------------
      
      
      // 2
      let person1 = {
        name: "Ajay",
        age: 24,
        email: "ajaymorde@gmail.com",
        hobbies: ["reading", "coding", "playing video games"]
      };
      
      // Adding a new property using dot notation
      person.location = "India";
      
      // Updating the value of an existing property using square bracket notation
      person["email"] = "myemail@example.com";
      
      // Adding a nested object
      person.family = {
        mother: {
          name: "Sangita",
          age: 40
        },
        father: {
          name: "Parameshwar",
          age: 50
        }
      };
      
      console.log(person1);
      console.log("-------------------------------------------------------------------")
    //   --------------------------------------------------------------------------------------------

    let person2 = {
        name: "Ajay",
        age: 24,
        email: "ajaymorde457@gmail.com",
        hobbies: ["reading", "coding", "playing video games"],
        location: "New York",
        family: {
          mother: {
            name: "Sangita",
            age: 40
          },
          father: {
            name: "Parameshwar",
            age: 50
          }
        },
        siblings: [
          {
            name: "Jake Doe",
            age: 28
          },
          {
            name: "Jill Doe",
            age: 25
          }
        ]
      };
      
      // Defining a function that takes one parameter
      function greet(name) {
        console.log(`Hello, ${name}! Nice to meet you.`);
      }
      
      // Adding the greet function as a method of the person object
      person.greet = greet;
      
      // Displaying the entire object
      console.log(person);
      
      // Creating a shallow clone of the person object
      let personClone = Object.assign({}, person);
      
      // Displaying both the original and cloned objects
      console.log(person);
      console.log(personClone);
      
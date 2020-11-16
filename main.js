window.onload = function() {
    allUsers();
  };

const newArray = [];
function get(){

    fetch('https://randomuser.me/api/')
      .then( response => response.json())
        .then(data => {
            newArray.push(data.results["0"])
            console.log(newArray);
        })
  
        document.getElementById("contacts").innerHTML = " ";

        // list out users by name and picture
        newArray.map(person => {
            console.log(person);
            let createLi = document.createElement("li");
            let contactList = document.getElementById("contacts");
            let image = document.createElement("img");
            image.src = person.picture.thumbnail;
            createLi.appendChild(image);
            createLi.appendChild(document.createTextNode(person.name.first + " " + person.name.last));
            contactList.append(createLi);
        });
}

// getting multiple users in one array
function allUsers() {
    let multipleArray = null;
    fetch('https://randomuser.me/api/?results=10')
    .then (response => response.json())
    .then (data => {
        multipleArray = data.results
        multipleArray.map(person => {
        console.log(person);
        let createAllLi = document.createElement("li");
        let allContactsList = document.getElementById("allContacts");
        let allImage = document.createElement("img");
        
// this button will give you more information about the contact
        let button = document.createElement('button');
        button.addEventListener("click",(e) => {
            let textBox = document.createElement('p');
            // let pText = document.createTextNode("Cell: " + person.cell + " " + "Age: " + person.dob.age);
            let pText = document.createTextNode(`Phone: ${person.phone} Cell: ${person.cell} Age: ${person.dob.age} Email: ${person.email} Address: ${person.location.street.number} ${person.location.street.name} ${person.location.city} ${person.location.state} ${person.location.country} ${person.location.postcode}`);
            textBox.appendChild(pText);
            createAllLi.appendChild(textBox);
        })
        allImage.src = person.picture.thumbnail;
        createAllLi.appendChild(allImage);
        createAllLi.appendChild(document.createTextNode(person.name.first + " " + person.name.last));
        createAllLi.appendChild(button);

        let buttonText = document.createTextNode("More Info");
  
        button.appendChild(buttonText);
        allContactsList.append(createAllLi);
    })
      console.log(multipleArray);
    })

    document.getElementById("allContacts").innerHTML = " ";
}

  
"use strict";
const assert = require("assert");

// window.onload = function() {
//   get();
// };

let newArray = null;
function get() {
  fetch("https://randomuser.me/api/?results=20")
    .then(response => response.json())
    .then(data => {
      newArray = data.results;
      console.log(newArray);

      // List out all the user in your address book array by name and picture.
      newArray.map(currentValue => {
        //create <li> element
        let createLi = document.createElement("li");

        // adds id #listItem to each <li>
        createLi.id = "listItem";

        // selects id #contacts on the <ul>
        let contactList = document.getElementById("contacts");

        //creates an <img> element
        let image = document.createElement("img");

        //creates <button> element
        let button = document.createElement("button");

        //creates text for each <button>
        let buttonText = document.createTextNode("See More");

        //adds text inside <button>
        button.appendChild(buttonText);

        //adds id #seeMoreButton to each <button>
        button.id = "seeMoreButton";

        //when <button> is clicked, adds a <p> element inside each <li>
        let boolean = true;
        button.addEventListener("click", e => {
          //prevents button from being clicked more than once
          if (boolean == false) {
            return;
          }
          boolean = false;

          //creates a <p> element
          let ageText = document.createElement("p");

          //adds id #moreInfo to each <p>
          ageText.id = "moreInfo";

          //creates text for each <p> from api
          let age = document.createTextNode("Age: " + currentValue.dob.age);
          let br = document.createElement("br");
          let zip = document.createTextNode(
            "Zip Code: " + currentValue.location.postcode
          );

          //adds text to each <p>
          ageText.appendChild(age);
          ageText.appendChild(br);
          ageText.appendChild(zip);

          //adds <p> inside <li>
          createLi.appendChild(ageText);
        });

        //adds the image url from api to <img>
        image.src = currentValue.picture.large;

        //adds <img> to <li>
        createLi.appendChild(image);

        //adds names from api inside each <li>
        createLi.appendChild(
          document.createTextNode(
            currentValue.name.first + " " + currentValue.name.last
          )
        );
        //adds <button> inside <li>
        createLi.appendChild(button);

        //adds each <li> inside <ul>
        contactList.append(createLi);
      });
    });
}

describe("getRandomUser", () => {
  it("tests fetch and random users endpoint", () => {
    const testFetch = url => {
      assert(url === "https://randomuser.me/api/?results=20");
      return new Promise(function() {});
    };
    getRandomUser(testFetch, "random user");
  });
  it("tests 10 random users", () => {
    const testFetch = url => {
      assert(url === "https://randomuser.me/api/?results=20");
      return new Promise(function() {});
    };
    getRandomUser(testFetch, "?results=20");
  });
});
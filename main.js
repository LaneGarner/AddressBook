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
            textBox.innerHTML=(`<strong>Phone:</strong> ${person.phone}<br><strong>Cell:</strong> ${person.cell}<br><strong>Age:</strong> ${person.dob.age}<br><strong>Email:</strong> ${person.email}<br><strong>Address:</strong> ${person.location.street.number} ${person.location.street.name}<br>${person.location.city}, ${person.location.state}, ${person.location.country} ${person.location.postcode}`);
            // textBox.appendChild(pText);
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

  

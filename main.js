let user, res, myVar;
const newArray = []

window.onload = () => {
    getMultipleUsers()
    
}

const getSingleUser = () => {
    fetch('https://randomuser.me/api/')
    .then(checkFetch)
    .then(res => res.json())
    .then(person => {
        newArray.push(person.results[0])
    })

    console.log(newArray)

    .catch(err => console.log(`Error,  ${err}`))
}

const getMultipleUsers = () => {
    let multiUserArray;
    let addressBook = document.querySelector('#address-book')
    let listOfUsers = document.createElement('ul')
    listOfUsers.style.listStyleType = 'none';
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(people => {
        multiUserArray = people.results
        multiUserArray.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
        console.log('sorted array: ', multiUserArray)
        multiUserArray.forEach(person => {
            console.log('address: ', person.location)
            let contactItem = document.createElement('li')
            let userImg = document.createElement('img')
                userImg.src = person.picture.large
                userImg.alt = `${person.name.first} ${person.name.last} thumbnail`
            
            let showInfoBtn = document.createElement('button')
                showInfoBtn.addEventListener('click', () => {
                    let info = document.createElement('p');
                    info.id = `${person.name.first}-id`
                    info.innerHTML = `<strong>Phone:</strong> ${person.phone}<br><strong>Cell:</strong> ${person.cell}<br><strong>Age:</strong> ${person.dob.age}<br><strong>Email:</strong> ${person.email}<br><strong>Address:</strong> ${person.location.street.number} ${person.location.street.name}<br> ${person.location.city}, ${person.location.state}, ${person.location.country} ${person.location.postcode}`
                    contactItem.appendChild(info)
                    hideInfoBtn.style.display = 'block'
                    showInfoBtn.style.display = 'none'
                })
            let btnTxt = document.createTextNode('More info')
            showInfoBtn.appendChild(btnTxt)

            let hideInfoBtn = document.createElement('button')
            hideInfoBtn.style.display = 'none'
            hideInfoBtn.addEventListener('click', () => {
                let infoDiv = document.querySelector(`#${person.name.first}-id`)
                infoDiv.remove();
                hideInfoBtn.style.display = 'none'
                showInfoBtn.style.display = 'block'
            })
        let hideBtnTxt = document.createTextNode('Hide info')
        hideInfoBtn.appendChild(hideBtnTxt)


            let br = document.createElement("br")
            let br2 = document.createElement("br")

            
            contactItem.appendChild(userImg)
            contactItem.appendChild(br)
            contactItem.appendChild(document.createTextNode(`${person.name.first} ${person.name.last}`))
            contactItem.appendChild(br2)
            contactItem.appendChild(showInfoBtn)
            contactItem.appendChild(hideInfoBtn)
            listOfUsers.append(contactItem)
    })

    addressBook.append(listOfUsers)
    })

}
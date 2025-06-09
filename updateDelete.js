document.addEventListener("DOMContentLoaded", initialize);


function initialize() {
    const userList = JSON.parse(localStorage.getItem("userList")) || []
    console.log(userList.length)
    for (let i = 0; i < userList.length; i++) {
        display(userList[i])
    }
    //console.log(user)

}


// add new userList in usersList array
function handleFormSubmit(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const user = {
       
        name,
        email,
        phone

    }
    const userList = JSON.parse(localStorage.getItem("userList")) || [];
    user.id = Date.now();
    //console.log(userList);
    userList.push(user);
    display(user)
    localStorage.setItem("userList", JSON.stringify(userList));
   


}


 // use this function to display user on screen
function display(data) {
    const ul= document.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = data.name + " " + data.email + " " + data.phone
    li.id = data.id
    ul.appendChild(li);
    const delbtn = document.createElement('button');
    delbtn.textContent = 'Delete';
    delbtn.addEventListener('click', function () { deleteData(data.id, li) })
    li.appendChild(delbtn)
    ul.appendChild(li)
 
 }


 // use this function to delete the user details from local store and DOM (screen)
function deleteData(id, li) {
    const updateUserList=[]
    const userList= JSON.parse(localStorage.getItem("userList")) || [];
    for (const user of userList)
    {
        if (user.id !== id) {
            updateUserList.push(user)
        }
    }
    localStorage.setItem("userList", JSON.stringify(updateUserList))
    li.remove()
 
 }






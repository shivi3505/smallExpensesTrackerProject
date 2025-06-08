// Write your code below:
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
    localStorage.setItem(email, JSON.stringify(user));
    const listUser = document.querySelector('ul');
    const list = document.createElement('li')
    list.innerHTML = `${name}-${email}-${phone}`;
    const delbtn = document.createElement('button');
    delbtn.textContent = 'Delete';
    delbtn.addEventListener('click', function (e) {
        localStorage.removeItem(email);
        listUser.removeChild(list);
    })
    list.appendChild(delbtn)
    listUser.appendChild(list);
}
module.exports=handleFormSubmit
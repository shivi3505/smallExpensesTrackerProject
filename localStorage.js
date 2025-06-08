function handleFormSubmit(event) {
    event.preventDefault();

    const name = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    localStorage.setItem("username", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
}

module.exports = handleFormSubmit;

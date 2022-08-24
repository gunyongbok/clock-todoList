const enternameForm = document.querySelector(".name__form");
const enternameInput = enternameForm.querySelector(".name__form input");
const greeting = document.querySelector("h1");

const nameSubmit = ((event) => {
    event.preventDefault();
    enternameForm
        .classList
        .add("hidden");
    const username = enternameInput.value;
    localStorage.setItem("username", username);
    // save data to local storage
    greeting.innerText = `${username}'s to do List`;
    greeting
        .classList
        .remove("hidden");
})

const getuserName = localStorage.getItem("username");
if (getuserName === null) {
    enternameForm
        .classList
        .remove("hidden");
    enternameForm.addEventListener("submit", nameSubmit);
    // show the form
} else {
    greeting
        .classList
        .remove("hidden");
    greeting.innerText = `${getuserName}'s to do List`;
    // show the greeting
}
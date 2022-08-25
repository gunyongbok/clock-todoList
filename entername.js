const enterNameForm = document.querySelector(".name__form");
const enterNameInput = enterNameForm.querySelector(".name__form input");
const greeting = document.querySelector("h1");

const nameSubmit = ((event) => {
    event.preventDefault();
    enterNameForm
        .classList
        .add("hidden");
    const userName = enterNameInput.value;
    localStorage.setItem("userName", userName);
    // save data to local storage
    greeting.innerText = `${userName}'s to do List`;
    greeting
        .classList
        .remove("hidden");
})

const getUserName = localStorage.getItem("userName");
if (getUserName === null) {
    enterNameForm
        .classList
        .remove("hidden");
    enterNameForm.addEventListener("submit", nameSubmit);
    // show the form
} else {
    greeting
        .classList
        .remove("hidden");
    greeting.innerText = `${getUserName}'s to do List`;
    // show the greeting
}
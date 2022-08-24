const timeContainer = document.querySelector(".clock");
const dateContainer = document.querySelector(".date");
const clockManager = (() => {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    timeContainer.innerText = `${hours < 10
        ? `0${hours}`
        : hours}:${minutes < 10
            ? `0${minutes}`
            : minutes}:${seconds < 10
                ? `0${seconds}`
                : seconds}`;
})
const init = (() => {
    clockManager();
    setInterval(clockManager, 1000);
})
init();
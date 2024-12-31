var settingsMenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");
var textArea = document.querySelector("textarea");

function settingsMenuToggle() {
    settingsMenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = () => {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
    textArea.classList.toggle("dark-text");


    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
}

if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else {
    localStorage.setItem("theme", "light");
}

localStorage.setItem("theme", "light");
localStorage.getItem("theme");
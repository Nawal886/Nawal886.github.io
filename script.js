document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById("changeTheme");

    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});

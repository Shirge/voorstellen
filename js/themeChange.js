function changeTheme() {
    if (darkTheme) {
        document.body.removeAttribute("theme");
        darkTheme = false;
    } else {
        document.body.setAttribute("theme", "dark");
        darkTheme = true;
    }
    //Sets button text
    if (darkTheme) {
        button.setAttribute("value", "Light Mode");
    } else {
        button.setAttribute("value", "Dark Mode");;
    }
}
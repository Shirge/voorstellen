const systemDarkTheme = !(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')).matches;
const button = document.getElementById("button");
var darkTheme;

if (systemDarkTheme) {
    var darkTheme = true;
} else {
    var darkTheme = false;
}
changeTheme();
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("openButton").style.opacity = "0";
    document.getElementById("closeButton").style.display = "flex";
    document.getElementById("upArrow").style.opacity = "0";
    document.getElementById("c1").style.opacity = "0";

}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";

    document.getElementById("openButton").style.opacity = "0.8";
    document.getElementById("closeButton").style.display = "none";
    document.getElementById("upArrow").style.opacity = "0.8";
    document.getElementById("c1").style.opacity = "1";

}

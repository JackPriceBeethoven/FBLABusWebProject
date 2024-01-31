function openNav() {
    var navImages = document.getElementsByClassName("navImage");

    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("discription").style.borderTopRightRadius = "18px";
    document.getElementById("discription").style.borderBottomRightRadius = "18px";
    document.getElementById("discription2").style.borderTopRightRadius = "18px";
    document.getElementById("discription2").style.borderBottomRightRadius = "18px";
    document.getElementById("text").style.marginRight = "10%";
    document.getElementById("openButton").style.opacity = "0";
    document.getElementById("closeButton").style.display = "flex";
    document.getElementById("upArrow").style.opacity = "0";

    for (var i = 0; i < navImages.length; i++) {
        navImages[i].style.boxShadow = 'box-shadow: -22.5px 1px 32px -3.5px #000000;';
    }


}
function closeNav() {
    var navImages = document.getElementsByClassName("navImage");

    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("discription").style.borderTopRightRadius = "0px";
    document.getElementById("discription").style.borderBottomRightRadius = "0px";
    document.getElementById("discription2").style.borderTopRightRadius = "0px";
    document.getElementById("discription2").style.borderBottomRightRadius = "0px";
    document.getElementById("openButton").style.opacity = "0.8";
    document.getElementById("text").style.marginRight = "0%";
    document.getElementById("closeButton").style.display = "none";
    document.getElementById("upArrow").style.opacity = "0.8";


    for (var i = 0; i < navImages.length; i++) {
        // For example, you can add a border to each element
        navImages[i].style.boxShadow = 'box-shadow: -22.5px 1px 32px -3.5px rgba(0, 0, 0, 0);';
    }

}
// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth',
    block: 'start', // You can adjust the scroll position if needed
    inline: 'nearest', // You can adjust the scroll position if needed
    duration: 20000 // Adjust the duration in milliseconds (e.g., 2000 for 2 seconds)
});
});
});
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;


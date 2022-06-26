/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function openNav() {
  var x = document.getElementById("mySidepanel");
  if (x.style.width === "250px") {
    x.style.width = "0";
    document.getElementById("openbtn").innerHTML = "&#9776;";
  } else {
    x.style.width = "250px";
    document.getElementById("openbtn").innerHTML = "&#9747";
  }
}
/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}


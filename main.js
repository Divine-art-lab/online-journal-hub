function display() {
  // make show be the button
  var show = document.getElementById("about");
  if (show.style.display === "block") {
    show.style.display = "none";
  } else {
    show.style.display = "block";
  }
}

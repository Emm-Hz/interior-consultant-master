function responsive() {
  let menu = document.getElementById("topBar");
  if (menu.className === "menu") {
    menu.className += " responsive";

    let object = document.querySelector(".nav_box");
    // object.style.display = "none";

    document.getElementById('responsive_menu').innerHTML = '&#935;'


  } else {
    menu.className = "menu";

    let object = document.querySelector(".nav_box");
    object.style.display = "block";

    document.getElementById('responsive_menu').innerHTML = '&#9776;'

  }
}

Shery.makeMagnet(".nav i, .left .btn button");

Shery.mouseFollower(".main")

function lovebtn() {
  var icon = document.querySelector(".left .btn i");
  var a = 0;
  icon.addEventListener("click", function () {
    if (a === 0) {
      icon.style.color = "Red";
      a = 1;
    } else {
      icon.style.color = "";
      a = 0;
    }
  });
}

lovebtn();
function sidebar() {
  var sidebar = document.querySelector(".sidebar");
  var menu = document.querySelector(".navlogo");
  var close = document.querySelector(".close i");
  var btn = document.querySelector(".left .btn button");
  menu.addEventListener("click", function () {
    sidebar.style.display = "block";
    menu.style.display = "none";
    btn.style.display = "none";
  });

  close.addEventListener("click", function () {
    sidebar.style.display = "none";
    menu.style.display = "block";
    btn.style.display = "block";
  });
  
}

sidebar();
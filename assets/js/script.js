import "./lib/main.js";

let draw = turea.draw
let keyboard = turea.keyboard
let mouse = turea.mouse
let totalWidth = window.innerWidth;
let totalHeight = window.innerHeight;

window.onload = function() {
    start()
}

function start() {
    window.canvas = turea.init(totalWidth, totalHeight);
    window.ctx = window.canvas.getContext('2d')
    console.log(lightdm);
    requestAnimationFrame(animate);
}

function animate() {
    if (mouse.x <= totalWidth/2) document.body.style.cursor = "pointer";
    else document.body.style.cursor = "auto";
    draw.clearScreen();
    draw.circle(mouse.x, mouse.y, 50, mouse.left ? "blue" : "red");
    draw.text(20, totalHeight-20, 20, turea.clock() + " @ " + lightdm.hostname, "blue")
    requestAnimationFrame(animate);
}

window.__debug = false;

      if (window.__debug === true) {
        window.lightdm = {
          "authenticate": function(){ return true; },
          "hibernate": function(){ return true; },
          "restart": function(){ return true; },
          "shutdown": function(){ return true; },
          "suspend": function(){ return true; },
          "can_hibernate": true,
          "can_restart": true,
          "can_shutdown": true,
          "can_suspend": true,
          "hostname": "Mercury",
          "default_session": 'awesome',
          "lock_hint": false,
          "users": [
            {"display_name":"captain","language":"en_US.utf8","real_name":"John Doe","layout":null,"image":"src/img/default-user.png","home_directory":"/home/captain","name":"captain","logged_in":false,"session":"deepin"},
            {"display_name":"GClooney","language":"en_US.utf8","real_name":"George Clooney","layout":null,"image":"src/img/default-user.png","home_directory":"/home/gclooney","name":"gclooney","logged_in":false,"session":"xfce"},
            {"display_name":"LannisterX","language":"en_US.utf8","real_name":"Jaime Lannister","layout":null,"image":"src/img/default-user.png","home_directory":"/home/lannisterx","name":"lannisterx","logged_in":false,"session":"gnome"}
          ],
          "sessions": [
            {"name":"Awesome","key":"awesome","comment":"Awesome Desktop Environment"},
            {"name":"Deepin","key":"deepin","comment":"Deepin Desktop Environment"},
            {"name":"Gnome","key":"gnome","comment":"Gnome Desktop Environment"},
            {"name":"XFCE4","key":"xfce","comment":"XFCE Desktop Environment"},
            {"name":"Cinnamon","key":"cinnamon","comment":"Cinnamon DE"},
            {"name":"Cinnamon (Software)","key":"cinnamon-software","comment":"Cinnamon DE (Software Rendering)"},
            {"name":"LXDE","key":"lxde","comment":"LXDE Desktop Environment"},

            {"name":"Enlightenment","key":"enlightnment","comment":"Enlightenment Desktop Environment"},
            {"name":"KDE Plasma","key":"kde","comment":"KDE Plasma Desktop Environment"},
            {"name":"Budgie","key":"budgie","comment":"Budgie Desktop Environment"},
            {"name":"MATE","key":"mate","comment":"MATE Desktop Environment"},
            {"name":"Liri","key":"liri","comment":"Liri Desktop Environment"},
            {"name":"Pantheon","key":"pantheon","comment":"Pantheon Desktop Environment"}
          ]
        };
      }
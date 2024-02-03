let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');



menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
};

window.onscroll  = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active')
};


    var icon = document.getElementById("icon");
    var text  = document.getElementById("CurrentMode")

    icon.onclick = function(){
        document.body.classList.toggle("dark-theme")
        if(document.body.classList.contains("dark-theme")){
        icon.src = "sun.png";
        document.getElementById("CurrentMode").innerHTML = "Change to light mode"
        }else{
            icon.src = "moon.png"
            document.getElementById("CurrentMode").innerHTML = "Change to dark mode"
        }
        
    }
    text.onclick = function(){
        document.body.classList.toggle("dark-theme")
        if(document.body.classList.contains("dark-theme")){
        icon.src = "sun.png";
        document.getElementById("CurrentMode").innerHTML = "Change to light mode"
        }else{
            icon.src = "moon.png"
            document.getElementById("CurrentMode").innerHTML = "Change to dark mode"
        }
        
    }


      
   

const mainMenu = document.querySelector(".nav_wrapper");
const openMenu = document.querySelector(".nav-open");
const closeMenu = document.querySelector(".close-open");

const sidebar = document.getElementById("sidebar_wrapper");


// Preloader
showPreloader = () => {
    const preloader = document.querySelector('.preloader');
  
    window.addEventListener('load', () => {
      preloader.style.display = 'none';
    });
  };
  showPreloader();


// Toggle Menu
openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);


function show() {
  mainMenu.style.display = "block";
}

function close() {
  mainMenu.style.display = "none";
}



// Sidebar
function openSidebar() {
    sidebar.style.display = "block";
}

function closeSidebar() {
  sidebar.style.display = "none";
}
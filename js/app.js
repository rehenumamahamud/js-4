 let pass_show_hide = document.querySelector("#pass_show_hide");
let password = document.querySelector("#password");

pass_show_hide.addEventListener("click", () => {
         if (password.type == "password") {
         password.type = "text";
         pass_show_hide.innerHTML = '<i class="fa-solid fa-eye"></i>';
    } else {
                 password.type = "password";
        pass_show_hide.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    }
 });



document.querySelector('p').style.display = 'none';

let cursor = document.querySelector(".cursor");
let cursorSm = document.querySelector(".cursorSm");

function customMouseCursor(event){
    let left = event.pageX;
    let top = event.pageY;

    cursor.style.top  = top+'px'
    cursor.style.left  = left+'px'
    cursorSm.style.top  = top+'px'
    cursorSm.style.left  = left+'px'
    

}

window.addEventListener("mousemove", customMouseCursor);

let sidebar = document.querySelector(".sidebar");
let navBtn = document.querySelector("header nav .navBtn");

function  showSideBar(){
    sidebar.classList.add('active');
}


navBtn.addEventListener("click", showSideBar);



let cancelBtn = document.querySelector(".cancelBtn");

function  closeSideBar(e) {
    if (
      e.target.classList.contains("sidebar") ||
      e.target.classList.contains("cancelBtn")
    ) {
      sidebar.classList.remove("active");
    }

}

cancelBtn.addEventListener("click", closeSideBar);
sidebar.addEventListener("click", closeSideBar);


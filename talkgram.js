const menu = document.querySelector(".menu");
const search = document.querySelector(".search");
const contents = document.querySelector(".contents")
 
toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    search.classList.toggle('active');
    contents.classList.toggle('active');
    
});

init(); 
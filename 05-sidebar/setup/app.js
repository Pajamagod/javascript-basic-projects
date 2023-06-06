const sideToggle = document.querySelector('.sidebar-toggle');
const closeSide = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

sideToggle.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar');
})

closeSide.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar');
})
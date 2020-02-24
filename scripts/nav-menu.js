const body = document.body;
const navBtn = document.getElementById("nav-btn");

navBtn.addEventListener('click', function (e){
    e.preventDefault();
    body.classList.toggle('show');
});
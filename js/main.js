const nav = document.querySelector('#nav');
const navbtn = document.querySelector('#nav-btn');
const navbtnimg = document.querySelector('#nav-btn-img');

navbtn.onclick = () =>{
    if (nav.classList.toggle('open')){
        navbtnimg.src = "./images/menu-close.png"
    } else{
        navbtnimg.src = "./images/menu.png"
    }
}

let offset = 0;
const customersreviews = document.querySelector('.customers__reviews')

document.querySelector('.btn-next').addEventListener('click', function(){
    offset = offset + 288;
    if (offset > 576){
        offset = 0
    }
    customersreviews.style.left = -offset + 'px';
});
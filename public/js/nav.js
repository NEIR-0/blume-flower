// navbar
// const navbar = document.getElementById("navbar");

// navbar.innerHTML = `
// <div class="logo">
//     <img src="./foto/logo-blume 1.png" alt="logo">
// </div>
// <div class="navigasi">
//     <ul>
//         <li><a href="./index.html/#home" class="H">Home</a></li>
//         <li><a href="./index.html#about" class="AB">About Us</a></li>
//         <li><a href="./index.html#product" class="P">Product</a></li>
//         <li><a href="./index.html#contact" class="C">Contact Us</a></li>
//     </ul>
// </div>
// <div class="phone">
//     <input type="button">
//     <span></span>
//     <span></span>
//     <span></span>
// </div>
// `;

// slider phone efx
const slider = document.querySelector('.phone input');
const navigasi = document.querySelector('.navigasi ul');
slider.addEventListener('click', function(){
    navigasi.classList.add('slide');
});

// slider out nav
const sliderout1 = document.querySelector('.H');
const navigasiout1 = document.querySelector('.navigasi ul');
sliderout1.addEventListener('click', function(){
    navigasiout1.classList.remove('slide');
});


const sliderout2 = document.querySelector('.AB');
const navigasiout2 = document.querySelector('.navigasi ul');
sliderout2.addEventListener('click', function(){
    navigasiout2.classList.remove('slide');
});


const sliderout3 = document.querySelector('.P');
const navigasiout3 = document.querySelector('.navigasi ul');
sliderout3.addEventListener('click', function(){
    navigasiout3.classList.remove('slide');
});


const sliderout4 = document.querySelector('.C');
const navigasiout4 = document.querySelector('.navigasi ul');
sliderout4.addEventListener('click', function(){
    navigasiout4.classList.remove('slide');
});
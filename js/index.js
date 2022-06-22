console.log('hi')
let brg = document.querySelector('.burger'),
    online = document.querySelector('.content__online span');
brg.addEventListener('click', () =>{
  brg.classList.toggle('burger__active')
  document.querySelector('.nav__links').classList.toggle('nav__links-active')
})
fetch('https://api.mcsrvstat.us/2/book7shelf.ru ').then((response) => {
  return response.json();
}).then((data) =>{ 
  if (data.online) {
    online.innerHTML = data.players.online + " из " + data.players.max
  }else{
    
  }
});

const swiper = new Swiper('.revSwiper', { 
  // Optional parameters 
  direction: 'horizontal',
  effect: "cards",
  grabCursor: true,
  loop: true, 
  // If we need pagination 
  pagination: { el: '.revSwiper .swiper-pagination', }, 
  // Navigation arrows 
  navigation: { 
    nextEl: '.revSwiper .swiper-button-next',
  prevEl: '.revSwiper .swiper-button-prev', }
  // And if we need scrollbar 
  
});
var swiperDev = new Swiper(".devSwiper", {
      effect: "coverflow",
      grabCursor: true,
      enteredSlides: true,
      slidesPerView: "auto",
      navigation: {
        nextEl: '.devSwiper .swiper-button-next', 
        prevEl: '.devSwiper .swiper-button-prev', 
      },
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
      slideShadows: true,
      },
      pagination: {
      el: ".devSwiper .swiper-pagination",
    }
});




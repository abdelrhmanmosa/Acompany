let arrowUp = document.querySelector('.arrow-up');

window.onscroll = function (){

  console.log(this.scrollY);
  if (this.scrollY >= 700){
    arrowUp.classList.add("active");
  }else{
    arrowUp.classList.remove("active");
  }

}

arrowUp.onclick = function (){
window.scrollTo({
  top : 0,
  behavior : "smooth",
})
}


// swiper js 

var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    spaceBetween: 30,
    slidesPerView: "4",
    loop: true,
    autoplay:{
      delay:3000,
    },
    breakpoints:{
1200:{
slidesPerView : 4,
},
990 : {
slidesPerView : 4,
},
500 :{
slidesPerView : 3,
},
0:{
  slidesPerView : 2
}

}
  });


  // change background

  x = 0;
  function changeBg(){
      const images = [
          'linear-gradient(#253169b4,#253169b4),url("./image/slide1.jpg")',
          'linear-gradient(#253169b4,#253169b4),url("./image/slider2.jpg")',
          'linear-gradient(#253169b4,#253169b4),url("./image/slider3.jpg")',
          'linear-gradient(#253169b4,#253169b4),url("./image/slider4.jpg")'
      ]
     
      const bg = x++;
      if( x >= 4){
          x = 0;
      }
      
      const sectionbg = document.querySelector(".swiper-sec")
      sectionbg.style.backgroundImage = images[bg];
     
      console.log(x)        
  }
  setInterval(changeBg, 3000);
  

  // btn scroll




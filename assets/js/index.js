
/*=============== SWIPER TESTIMONIAL ===============*/

const swiperTestimonial = new Swiper('.testimonial__swiper',{
    loop: true,
    spaceBetween:32,
    grabCursor:true,
    pagination:{
        el:'.swiper-pagination',
        dynamicBullets:true,
        clickable:true,
    },
})
/*=============== SHOW SCROLL UP ===============*/ 
const scrollup=()=>{
    const scrollup = document.getElementById('scroll-up')
    this.scrollY>=350? scrollup.classList.add('show-scroll')
                      :scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollup)

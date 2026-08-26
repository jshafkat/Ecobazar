$(document).ready(function () {
    /**PRODUCT SEACRCHING */
    let searchProductBody = document.querySelector('#search');
    let headerSearchIcon = document.querySelector('.header_search_icon');
    headerSearchIcon.addEventListener('click', function (e) {
        e.preventDefault();
        searchProductBody.classList.add('search_product_active')
    })

    window.addEventListener('click', function (e) {
        if (e.target.classList.contains('search_product_active')) {
            searchProductBody.classList.remove('search_product_active')
        }
    })

    //* HERO SLIDER 
    $('.slides').slick({
        arrows: true,
        prevArrow: `<span class="prev_arr"><svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            < circle cx="22.5" cy="22.5" r="22" transform="matrix(-1 0 0 1 45 0)" fill="white" stroke="#E6E6E6" />
  <path d="M14.25 22.226H29.25" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M20.2998 16.201L14.2498 22.225L20.2998 28.25" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></span >`,
        nextArrow: `<span class="next_arr"><svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="22.5" cy="22.5" r="22" fill="white" stroke="#E6E6E6" />
  <path d="M30.75 22.226H15.75" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M24.7002 16.201L30.7502 22.225L24.7002 28.25" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></span>`,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
    });
});

const images = document.querySelectorAll('.carousel .carousel__line img');
const sliderLine = document.querySelector('.carousel__line');
let count = 0;
let width;

function init(){
    width = document.querySelector('.carousel__cont').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item =>{
        item.style.width = width +'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

window.addEventListener('resize', init);
init();

document.querySelector('.carousel__prev').addEventListener('click', function(){
    count--;
    if(count<0){
        count = images.length-1;
    }
    rollSlider();
});


document.querySelector('.carousel__next').addEventListener('click', function(){
    count++;
    if(count>= images.length){
        count = 0;
    }
    rollSlider();
});

function rollSlider(){
    sliderLine.style.transform = 'translate(-'+count*width+'px)';
}






$(function() {
  
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    
   

    function toggleSlide(item){
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
            })
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
});
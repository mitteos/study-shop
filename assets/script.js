new Swiper('.popular__slider', {
    spaceBetween: 30,
    slidesPerView: 'auto',
    centeredSlides: true,
    SlidesOffsetBefore: 30,
    SlidesOffsetAfter: 30,
    navigation: {
        nextEl: '.popular__slider-next',
        prevEl: '.popular__slider-prev',
      }
})
new Swiper('.best__item-slider',{
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
})

let size = document.querySelectorAll('.best__item-size');
size.forEach( el => el.addEventListener('click', ()=>{
        size.forEach( el2 => el2.classList.remove('size-active'))
        el.classList.add('size-active');
    })
)

let bestLike = document.querySelectorAll('.best__item-like');
bestLike.forEach(el => el.addEventListener('click', () => el.classList.toggle('like-active')))






let sliderItem = document.querySelectorAll('.cat__item');
sliderItem.forEach(el => {
    let sliderImg = el.querySelectorAll('.cat__slider-container img');
    let sliderSpan = el.querySelectorAll('.cat__slider-item');
    let imgCount = 0;
    sliderImg.forEach(el => {
        if(el.getAttribute('src') == '') el.style.display = 'none';
        else imgCount++;
    })
    el.querySelector('.cat__slider-wrapper').style.gridTemplateColumns = `repeat(${imgCount}, 1fr)`;
    for(let i = 0; i < sliderSpan.length; i++){
        if(i >= imgCount) sliderSpan[i].style.display = 'none';
    }
    for(let i = 0; i<imgCount; i++){
        sliderSpan[i].addEventListener('mouseenter', ()=>{
            sliderImg.forEach(el => el.style.opacity = '0');
            sliderSpan.forEach(el => el.style.borderBottom = '1px solid #cdcdcd');
            sliderImg[i].style.opacity = '1';
            sliderSpan[i].style.borderBottom = '1px solid #1f699b';
    
        })
    }
    if(imgCount == 0) sliderSpan.forEach(el => el.style.display = 'none');
    
})




$('.owl-carousel').owlCarousel({
    loop:false,
  stagePadding: 15,
    margin:10,
    nav:true,
  navText : ['<span class="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>','<span class="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>'],
    responsive:{
        0:{
            items:1
        },
        640:{
            items:1
        },
      960:{
            items:1
        },
        1200:{
            items:1
        }
    }
})
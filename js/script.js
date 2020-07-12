//counter up js
$('.counter').counterUp({
                delay: 10,
                time: 1000
            });

//video js
$('.venobox').venobox(); 


//screeshot slider
$('.screen-slider').slick({
  dots: true,
  infinite: true,
  speed:1000,
  slidesToShow: 1,
  slidesToScroll: 1,
    arrows:false,
    autoplay:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

//team slider
$('.team-slider').slick({
  dots: false,
  infinite: true,
  speed:1000,
  slidesToShow: 4,
  slidesToScroll: 1,
    arrows:false,
    autoplay:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});


//pricing slider
$('.price-slider').slick({
  dots: false,
  infinite: true,
  speed:1000,
  slidesToShow: 3,
  slidesToScroll: 1,
    arrows:false,
    autoplay:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});


//member slider
$('.member-slider').slick({
  dots: false,
  infinite: true,
  speed:300,
  slidesToShow: 3,
  slidesToScroll: 1,
    arrows:false,
    autoplay:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});
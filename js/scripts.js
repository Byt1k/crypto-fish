$('.roadmap__carousel').owlCarousel({
  // loop:true,
  margin: 42,
  dots: true,
  responsive: {
    0:{
        items:2,
        dots: false
    },
    768: {
      items: 4
    },
    1200: {
      items: 6
    }
  }
  // autoWidth: true
})
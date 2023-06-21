// Отображаем список новостей в виде слайдера Slick.
      $('#news-slider').slick({
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 300,
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true,
          prevArrow: '',
          nextArrow: ''
      });
// navbar
let bars = document.querySelector('.bars')
let links = document.querySelector('.links-list')

bars.addEventListener('click', function () {
  bars.classList.toggle('change')
  if (bars.classList.contains('change')) {
    bars.querySelector('i').className = 'fa fa-times'
    links.style.height = links.scrollHeight + 'px'
  } else {
    bars.querySelector('i').className = 'fa fa-bars'
    links.style.height = 0
  }
})

// make height === window height

$(function () {
  // adjust header height
  $('header').height($(window).height())
  $(window).resize(function () {
    $('header').height($(window).height())
    $('.bxslider').each(function () {
      $(this).css(
        'paddingTop',
        ($(window).height() - $('.bxslider li').height()) / 2,
      )
    })
  })

  // add class active to links and remove from the other

  $('.links-list li a').on('click', function () {
    $(this)
      .addClass('active')
      .parent()
      .siblings()
      .find('a')
      .removeClass('active')
  })

  // adjust bxslider list item center
  $('.bxslider').each(function () {
    $(this).css(
      'paddingTop',
      ($(window).height() - $('.bxslider li').height()) / 2,
    )
  })
  // trigger bx slider
  $('.bxslider').bxSlider({
    pager: false,
  })

  // smooth scroll to div
  $('.links-list li a').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: $($(this).data('scroll')).offset().top,
      },
      1500,
    )
  })

  // slider
  function autoSlider() {
    $('.testimonials-content .active').each(function () {
      if (!$(this).is(':last-child')) {
        $(this)
          .delay(3000)
          .fadeOut(1000, function () {
            $(this).removeClass('active').next().addClass('active').fadeIn(1000)
            autoSlider()
          })
      } else {
        $(this)
          .delay(3000)
          .fadeOut(1000, function () {
            $(this).removeClass('active')
            $('.testimonials-content div:first-child')
              .addClass('active')
              .fadeIn(1000)
            autoSlider()
          })
      }
    })
  }
  autoSlider()

  // shuffle projects items

  $('.projects-links li a').on('click', function (e) {
    e.preventDefault()
    $('.projects-links li a').each(function () {
      $(this).removeClass('project-active')
    })
    $(this).addClass('project-active')
    $('.projects-content .project-item').fadeOut()
    $('.' + $(this).data('shuffle')).fadeIn(1000)
    if (
      $(this).data('shuffle') == 'animation' ||
      $(this).data('shuffle') == 'cartoon' ||
      $(this).data('shuffle') == 'games' ||
      $(this).data('shuffle') == 'characters'
    ) {
      $('.projects-content').removeClass('puplic-grid')
      $('.projects-content').addClass('custom-grid')
    } else {
      $('.projects-content').removeClass('custom-grid')
      $('.projects-content').addClass('puplic-grid')
    }
  })
  // scroll to top
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 500) {
      $('.scroll-to-top').fadeIn(1000)
    } else {
      $('.scroll-to-top').fadeOut(1000)
    }
  })

  $('.scroll-to-top').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1500,
    )
  })

  // trigger nice scroll
  $('body').niceScroll({
    cursorcolor: 'teal',
    cursorwidth: '10px',
    cursorborder: '1px solid teal',
  })
})

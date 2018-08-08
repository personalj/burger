$(document).ready(function() {
  $('.loader-wrapper').remove();
    $('[data-opener]').click(function() {
                $this = $(this);
                if($this.is('.active')) {
                    $this.removeClass('active');
                    $('[data-target="'+$this.data('opener')+'"]').removeClass('active');
                }else{
                    $this.addClass('active');
                    $('[data-target="'+$this.data('opener')+'"]').addClass('active');
                }
     });
    $('.nav__list a[href^="#"]').click( function(){
            var scroll_el = $(this).attr('href');
           
            if ($(scroll_el).length != 0) {
                $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
            }
            $('.nav__list').add('.nav__burger').removeClass('active');
            return false;
        });

    $(".burgers-slider").lightSlider({
        item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10
 
        
    });
$('.team-acco__trigger').on('click', function(e){
        e.preventDefault();
        
        var $this = $(this),
            item = $this.closest('.team-acco__item'),
            container = $this.closest('.team-acco'),
            items = container.find('.team-acco__item'),
            content = item.find('.team-acco__content'),
            otherContent = container.find('.team-acco__content');
        
        if (!item.hasClass('active')) {

            items.removeClass('active');
            item.addClass('active');
            otherContent.slideUp();
            content.slideDown();

        } else {

            item.removeClass('active');
            content.slideUp();

        }
    });
     $(document).on('click', function (e) {
        var $this = $(e.target);

        if (!$this.closest('.team-acco').length) {
            $('.team-acco__item').removeClass('active')
            $('.team-acco__content').hide();
        }
    });
   $('.menu-acco__trigger').on('click', function(e){
        e.preventDefault();

        var $this = $(this),
            container = $this.closest('.menu-acco__list'),
            item = $this.closest('.menu-acco__item'),
            items = container.find('.menu-acco__item'),
            activeItem = items.filter('.active'),
            allContent = container.find('.menu-acco__content'),
            content = item.find('.menu-acco__content'),
            activeContent = activeItem.find('.menu-acco__content');

        if (!item.hasClass('active')) {

            items.removeClass('active');
            item.addClass('active');
            if($(window).width() < 1170) {
                allContent.stop(true,true).slideUp();
                content.stop(true,true).slideDown();
               
                
                
            }
            else {
                activeContent.animate({
                'width' : '0px'
                });

                content.animate({
                    'width' : '550px'
                });
            }

        } else {
             if($(window).width() < 1170) {
                 content.stop(true,true).slideUp();
                 item.removeClass('active');
               
            }else {
                item.removeClass('active');
                content.animate({
                    'width' : '0px'
                }); 
            }

        }
    });

    // клик вне аккордеона
    if($(window).width() > 1170) {
        $(document).on('click', function (e) {
        var $this = $(e.target);

        if (!$this.closest('.menu-acco__list').length) {
            $('.menu-acco__content').animate({
                'width' : '0px'
            });

            $('.menu-acco__item').removeClass('active');
        }
        });
    }
    
    $(".fancybox").fancybox({
        helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(47, 50, 52, 0.93)'
                }
            }
        }
    });
    $('.phone-mask').mask('+7 (999) 999 99 99');

});

$(function () {
  
  
 $('.arrow-down').on('click', function(e){
        e.preventDefault();
        var parent = $(this).parent('.section.hero');
     $('html, body').animate({ scrollTop: parent.height() }, 500);
  });
 // $('.menu-fixed__link').on('click', function(e){
 //        e.preventDefault();
 //        var $this = $(this),
 //            href = parseInt($this.attr('href'));

 //        $.fn.fullpage.moveTo(href);
 //        $this.closest('li').addClass('active')
 //        .siblings()
 //        .removeClass('active');
 //    });
 var sections = $('.section'),
       controllers = $('.menu-fixed__list'),
       controller = $('.menu-fixed__link');
   controller.on('click',function(e){
     e.preventDefault();
     var scroll_el = $(this).attr('href');
         $(this).closest('li').addClass('active').siblings().removeClass('active');
     
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
     
   })
   $(window).on('scroll resize load', function () {
      var cur_pos = $(this).scrollTop();

      sections.each(function() {
        var top = $(this).offset().top - 150,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {  
          controller.removeClass('active');
          sections.removeClass('active');

          $(this).addClass('active');
         controllers.find('a[href="#'+$(this).attr('id')+'"]').closest('li').addClass('active').siblings().removeClass('active');
        }
      });
    });
   // $(function () {
   //      var screen = 0;
   //      container = $('#maincontent'),
   //      sections = $('.section'),
   //      inscroll = false;

   //      $('.section:first-child').addClass('active');
   //      $('body').on('mousewheel', function(event){
   //          var activeSection = sections.filter('.active');
   //          if(!inscroll) {
   //              inscroll = true;
   //              if(event.deltaY > 0) {
   //                  if(activeSection.prev().length) {
   //                      screen--;
   //                  }
   //              }else {
   //                  if(activeSection.next().length) {
   //                      screen++;
   //                  }
   //              }
   //          }
   //          var position = (-screen * 100) + '%';
   //          sections.eq(screen).addClass('active').siblings().removeClass('active');
   //          container.css('top', position);

   //          setTimeout(function(){
   //              inscroll = false;
   //          },1300)
   //      })
   // })
   
});
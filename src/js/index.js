// Нужно для корректной работы es6
require('babelify/polyfill');

import $ from 'jquery';
import { mobile } from './media';
import './modernizr.js'; // for sticky footer with flex in ie10
import anim from 'animated-scrollto';
import scrollTo from './scrollto.js';
import swiper from '../bower_components/slick-carousel/slick/slick.js';

function ifMobile() {
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
	    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) 
	    		return true;
	return false;
}

(() => {
	$('.js-side-menu').click(() => {
		$('.canvas').toggleClass('canvas--slide');
		$('html, body').toggleClass('overflow');
	})
})();

(() => {
    // скролл 
    let obj = $('.scroll-link');
    if($(obj).length > 0) {
        $(obj).click(function(e) {
        	$('.canvas').removeClass('canvas--slide');
        	$('html, body').removeClass('overflow');
            e.preventDefault();
            setTimeout(scrollTo, 100, this.hash);
        });
    }
    $('.js-about-showmore__button').click(function() {
    	
    	if($(this).hasClass('active')){
    		$('.js-about__hide-text').hide();
    		$(this).removeClass('active');
    		$(this).text('ПОКАЗАТЬ ЕЩЕ');
    		$('.js-about-shadow').addClass('about-shadow');
    	}else{
    		$('.js-about__hide-text').show();
    		$(this).addClass('active');
    		$(this).text('СВЕРНУТЬ');
    		$('.js-about-shadow').removeClass('about-shadow');
    	}
    });
    $('.js-answer-showmore__button').click(function() {
    	
    	if($(this).hasClass('active')){
    		$('.js-answer__hide-item').hide();
    		$(this).removeClass('active');
    		$(this).text('ПОКАЗАТЬ ЕЩЕ');
    		$('.js-answer-shadow').addClass('about-shadow');
    	}else{
    		$('.js-answer__hide-item').show();
    		$(this).addClass('active');
    		$(this).text('СВЕРНУТЬ');
    		$('.js-answer-shadow').removeClass('about-shadow');
    	}
    });


    //let $elms = $('.scroll-link');
    // window.location.hash
    // $elms.each(function(){
    // 	console.log($(this).hash);
    // });
})();

// Слайдеры
(() => {



	// Слайдер
  //   $(".slider2").slick({
  //       adaptiveHeight: false,
  //       centerMode: true,
  //       centerPadding: '200px',
  //       autoplay: false,
  //       slidesToShow: 3,
  //       infinite: true,
  //       arrows: true,
  //       dots: true,
  //       responsive: [
		// {
		// 	breakpoint: 2000,
		// 	settings: {
		// 		slidesToShow: 1
		// 	}
		// },
		// {
		// 	breakpoint: 700,
		// 	settings: {
		// 		slidesToShow: 2
		// 	}
		// },
		// {
		// 	breakpoint: 500,
		// 	settings: {
		// 		slidesToShow: 1
		// 	}
		// }]
  //   });
		$('.slider').slick({
		  centerMode: true,
		  centerPadding: '280px',
		  slidesToShow: 1,
		  dots: false,
		  responsive: [
		    {
		      breakpoint: 900,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '60px',
		        slidesToShow: 1,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 1300,
		      settings: {
		        centerMode: true,
		        centerPadding: '0px',
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 1070,
		      settings: {
		        centerMode: true,
		        centerPadding: '0px',
		        slidesToShow: 1,
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '15px',
		        slidesToShow: 1,
		        dots: true
		      }
		    }
		  ]
		});

})();

//Answer-slide
(() => {

		// $('.js-answer').hover(function () {
		// 	if(!($(this).hasClass('active'))) {
		// 		$(this).find('.js-answer__img').attr('src', '/local/templates/amkdoc/amkdoc-template/dist/images/icon-plus-green.svg');
		// 	}else{
		// 		return false;
		// 	}
		// }, function () {
		// 	if(!($(this).hasClass('active'))) {
		// 		$(this).find('.js-answer__img').attr('src', '/local/templates/amkdoc/amkdoc-template/dist/images/icon-plus-gray.svg');
		// 	}else{
		// 		return false;
		// 	}
		// });

	$('.js-answer-toggle').click(function () {
		$(this).closest('.js-answer').toggleClass('active');
		// if($(this).hasClass('active')){
		// 	$(this).removeClass('active');
		// 	$(this).find('.js-answer__hide-text').hide();
		// 	$(this).find('.js-answer__img').attr('src', '/local/templates/amkdoc/amkdoc-template/dist/images/icon-plus-green.svg');
		// 	$(this).find('.js-answer__text').css('color', '');
		// }else{
		// 	$(this).addClass('active');
		// 	$(this).find('.js-answer__hide-text').show();
		// 	$(this).find('.js-answer__img').attr('src', '/local/templates/amkdoc/amkdoc-template/dist/images/icon-minus.svg');
		// 	$(this).find('.js-answer__text').css('color', '#72afff');
		// }
	});

})();


//services
(() => {
	$('.js-service__button').click(function() {
		if ($(this).hasClass('off')) {
			$('.js-service__item').show();
			$(this).removeClass('off');
			$(this).text('СВЕРНУТЬ');
		}else{
			$('.js-service__item').hide();
			$(this).addClass('off');
			$(this).text('ВСЕ УСЛУГИ');
		}
	});





})();
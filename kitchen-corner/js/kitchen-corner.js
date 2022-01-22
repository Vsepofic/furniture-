$(function () {
  $("#showKitchen1").click(function () {
    $(".kithenSchow2").removeClass("d-none");
    $("#showKitchen1").addClass("d-none");
    $("#showKitch2").removeClass("d-none");
  });
  $("#showKitchen2").click(function () {
    $(".kithenSchow3").removeClass("d-none");
    $("#showKitchen2").addClass("d-none");
  });
});

//! поиск по сайту *********************

document.querySelector('#elastic').oninput = function () {
  val = this.value.trim();
  let elasticItems = document.querySelectorAll('.elastic p');
  if (val != '') {
    elasticItems.forEach(function (elem) {
      if (elem.innerText.search(val) == -1) {
        elem.classList.add('hide');
        elem.innerHTML = elem.innerText;
      } else {
        elem.classList.remove('hide');
        let str = elem.innerText;
        elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
      }
    });
  } else {
    location.reload();
    elasticItems.forEach(function (elem) {
      elem.classList.remove('hide');
      elem.innerHTML = elem.innerText;
      // location.reload()
    });
  };
};
function insertMark(string, posit, leng) {
  // Hello world
  // Hello <mark>wo</mark>rld
  // Hello + <mark> + word + </mark> + rld
  return string.slice(0, posit) + '<mark>' + string.slice(posit, posit + leng) + '</mark>' + string.slice(posit + leng);
};

//!  ********************* поиск по сайту *

// *************************************************
// //? анимация блоков при скроле   ****************
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('elementShow');
    } else {
      change.target.classList.remove('elementShow');
    }
  });
}
let optionsKitchenCorner = {
  threshold: [0.5]
};
let observerKitchenCorner = new IntersectionObserver(onEntry, optionsKitchenCorner);
let elementsKitchenCorner = document.querySelectorAll('.animScroll');
for (let elm of elementsKitchenCorner) {
  observerKitchenCorner.observe(elm);
}
// //? анимация блоков при скроле   ****************

// //? анимация при скроле кнопка 'наверх'  ****************
// https://www.youtube.com/watch?v=jaMbi3SPiPQ

const scrollKitchenCorner = document.querySelector('.homeUp');
window.onscroll = () => {
  if (window.scrollY > 1000) {
    scrollKitchenCorner.classList.remove('homeUp_hide');
  } else if (window.scrollY < 1000) {
    scrollKitchenCorner.classList.add('homeUp_hide');
  }
};
// добавить в html: -  scroll-behavior: smooth;
// для плавного перемещения
//* на js
scrollKitchenCorner.onclick = () => {
  window.scrollTo(0, 0);
};

//* на jquery
// $('.homeUp').click(function () {
//   $(window).scrollTop(0);
// });

// //? анимация при скроле  кнопка 'наверх'  ****************

$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

$(function () {
  $("#but1").click(function () {
    $(".accordion-header button").css("backgroundColor", "rgb(50, 50, 50)");
    $(".accordion-header button").removeClass("text-dark");
    $(".accordion-header button").addClass("text-light");
    $(".accordion-collapse").css("backgroundColor", "rgb(50, 50, 50)");
  })
  $("#but2").click(function () {
    $(".accordion-header button").css("backgroundColor", "rgb(250, 250, 250)");
    $(".accordion-header button").removeClass("text-light");
    $(".accordion-header button").addClass("text-dark");
    $(".accordion-collapse").css("backgroundColor", "rgb(250, 250, 250)");
  })
})

$(function () {
  $("#showWork1").click(function () {
    $(".workSchow1").removeClass("d-none");
    $("#showWork1").addClass("d-none");
  });
  $("#showWork2").click(function () {
    $(".workSchow2").removeClass("d-none");
    $("#showWork2").addClass("d-none");
  });
  $("#showWork3").click(function () {
    $(".workSchow3").removeClass("d-none");
    $("#showWork3").addClass("d-none");
  });
  $("#showWork4").click(function () {
    $(".workSchow4").removeClass("d-none");
    $("#showWork4").addClass("d-none");
  });
});

//! **********************************************************
// ! паралакс
var image = document.getElementsByClassName('paralax1');
new simpleParallax(image);
//! ***********************************

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
let optionsDesigner = {
  threshold: [0.5]
};
let observerDesigner = new IntersectionObserver(onEntry, optionsDesigner);
let elementsDesigner = document.querySelectorAll('.animScroll');
for (let elm of elementsDesigner) {
  observerDesigner.observe(elm);
}
// //? анимация блоков при скроле   ****************

// //? анимация при скроле кнопка 'наверх'  ****************
// https://www.youtube.com/watch?v=jaMbi3SPiPQ

const scrollDesigner = document.querySelector('.homeUp');
window.onscroll = () => {
  if (window.scrollY > 1000) {
    scrollDesigner.classList.remove('homeUp_hide');
  } else if (window.scrollY < 1000) {
    scrollDesigner.classList.add('homeUp_hide');
  }
};
// добавить в html: -  scroll-behavior: smooth;
// для плавного перемещения
//* на js
scrollDesigner.onclick = () => {
  window.scrollTo(0, 0);
};

//* на jquery
// $('.homeUp').click(function () {
//   $(window).scrollTop(0);
// });

// //? анимация при скроле  кнопка 'наверх'  ****************


//! поиск по сайту *********************
//! https://www.youtube.com/watch?v=vV4cUAZvEy4&t=167s
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

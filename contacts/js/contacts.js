$(function () {
  $("#but1").click(function () {
    $(".breadLi a").removeClass("text-dark");
    $(".breadLi a").addClass("text-light");
    $(".but button").removeClass("btn-outline-dark");
    $(".but button").addClass("btn-outline-light");
    $(".contText span").removeClass("text-dark");
    $(".contText span").addClass("text-light");
  });
  $("#but2").click(function () {
    $(".breadLi a").removeClass("text-light");
    $(".breadLi a").addClass("text-dark");
    $(".but button").removeClass("btn-outline-light");
    $(".but button").addClass("btn-outline-dark");
    $(".contText span").removeClass("text-light");
    $(".contText span").addClass("text-dark");
  });
});


// *************************************************
// //? анимация при скроле
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('elementShow');
    } else {
      change.target.classList.remove('elementShow');
    }
  });
}
let optionsContact = {
  threshold: [0.5]
};
let observerContact = new IntersectionObserver(onEntry, optionsContact);
let elementsContact = document.querySelectorAll('.animScroll');
for (let elm of elementsContact) {
  observerContact.observe(elm);
}

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
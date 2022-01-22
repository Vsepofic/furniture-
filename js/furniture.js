
//? прелоадер
window.setTimeout(function() {
  document.body.classList.add("loaded");
}, 5000);
//****************************************************************
//*  тема светлая \ темная
$(function () {
  $("#but1").click(function () {
    $("#themeBtn2").removeClass("d-none");
    $("#themeBtn1").addClass("d-none");
    $(".spanLink").removeClass("text-dark");
    $(".spanLink").addClass("text-light");
    $(".dropdown-divider").addClass("bg-light");
    $(".wrapper").removeClass("text-dark");
    $(".wrapper").addClass("text-light");
    $("#theme").removeClass("bgLight");
    $("#theme").addClass("bgDark");
    $(".breadcrumb-item a").removeClass("text-dark");
    $(".breadcrumb-item a").addClass("text-light");
    $(".ulDark").addClass("bg-dark");
    $(".ulDark li a").removeClass("text-dark");
    $(".ulDark li a").addClass("text-secondary");
    $(".cardItem").css("backgroundColor", "rgb(75, 75, 75)");
    $(".logoImg2").removeClass("d-none");
    $(".logoImg1").addClass("d-none");
    $(".measurersCol button").removeClass("btn-outline-dark");
    $(".measurersCol button").addClass("btn-outline-light");
    $(".modal-header button").removeClass("btn-dark");
    $(".modal-header button").addClass("btn-light");
    $(".modal-content").removeClass("bgLight");
    $(".modal-content").addClass("bgDark");
    $(".modal-footer button").removeClass("btn-outline-dark");
    $(".modal-footer button").addClass("btn-outline-light");
    $(".catalogCol table").addClass("text-light");
    $(".catalogBox").removeClass("border-dark");
    $(".catalogBox").addClass("border-light");
    $(".contents").removeClass("contentsLight");
    $(".contents").addClass("contentsDark");
    // $(".tableBtn a").removeClass("btn-outline-dark");
    // $(".tableBtn a").addClass("btn-outline-light");
    // $(".commentsBtn button").removeClass("btn-outline-dark");
    // $(".commentsBtn button").addClass("btn-outline-light");
    $(".formBody button").removeClass("btn-outline-dark");
    $(".formBody button").addClass("btn-outline-light");
    $(".newMailRow").removeClass("border-dark");
    $(".newMailRow").addClass("border-light");
    $(".specLink span").removeClass("text-dark");
    $(".specLink span").addClass("text-light");
    // $(".menuImgFilter a").removeClass("btn-outline-dark");
    // $(".menuImgFilter a").addClass("btn-outline-light");
    $(".quarBorder").removeClass("border-dark");
    $(".quarBorder").addClass("border-light");
    // $(".techCol a").removeClass("btn-outline-dark");
    // $(".techCol a").addClass("btn-outline-light");
    // $(".modernCol2 a").removeClass("btn-outline-dark");
    // $(".modernCol2 a").addClass("btn-outline-light");
    $(".footerText a").removeClass("text-dark");
    $(".footerText a").addClass("text-light");
  });
  $("#but2").click(function () {
    $("#themeBtn1").removeClass("d-none");
    $("#themeBtn2").addClass("d-none");
    $(".spanLink").removeClass("text-light");
    $(".spanLink").addClass("text-dark");
    $(".dropdown-divider").removeClass("bg-light");
    $(".wrapper").removeClass("text-light");
    $(".wrapper").addClass("text-dark");
    $("#theme").removeClass("bgDark");
    $("#theme").addClass("bgLight");
    $(".breadcrumb-item a").removeClass("text-light");
    $(".breadcrumb-item a").addClass("text-dark");
    $(".ulDark").removeClass("bg-dark");
    $(".ulDark li a").removeClass("text-secondary");
    $(".ulDark li a").addClass("text-dark");
    $(".cardItem").css("backgroundColor", "rgb(255, 255, 255)");
    $(".logoImg1").removeClass("d-none");
    $(".logoImg2").addClass("d-none");
    $(".measurersCol button").removeClass("btn-outline-light");
    $(".measurersCol button").addClass("btn-outline-dark");
    $(".modal-header button").removeClass("btn-light");
    $(".modal-header button").addClass("btn-dark");
    $(".modal-content").removeClass("bgDark");
    $(".modal-content").addClass("bgLight");
    $(".modal-footer button").removeClass("btn-outline-light");
    $(".modal-footer button").addClass("btn-outline-dark");
    $(".catalogCol table").removeClass("text-light");
    $(".catalogBox").removeClass("border-light");
    $(".catalogBox").addClass("border-dark");
    $(".contents").removeClass("contentsDark");
    $(".contents").addClass("contentsLight");
    // $(".tableBtn a").removeClass("btn-outline-light");
    // $(".tableBtn a").addClass("btn-outline-dark");
    // $(".commentsBtn button").removeClass("btn-outline-light");
    // $(".commentsBtn button").addClass("btn-outline-dark");
    $(".formBody button").removeClass("btn-outline-light");
    $(".formBody button").addClass("btn-outline-dark");
    $(".newMailRow").removeClass("border-dark");
    $(".newMailRow").addClass("border-light");
    $(".specLink span").removeClass("text-light");
    $(".specLink span").addClass("text-dark");
    // $(".menuImgFilter a").removeClass("btn-outline-light");
    // $(".menuImgFilter a").addClass("btn-outline-dark");
    $(".quarBorder").removeClass("border-light");
    $(".quarBorder").addClass("border-dark");
    // $(".techCol a").removeClass("btn-outline-light");
    // $(".techCol a").addClass("btn-outline-dark");
    // $(".modernCol2 a").removeClass("btn-outline-light");
    // $(".modernCol2 a").addClass("btn-outline-dark");
    $(".footerText a").removeClass("text-light");
    $(".footerText a").addClass("text-dark");
  });
});

// *************************************************************************
//*  мультиязычность сайта   https://www.youtube.com/watch?v=MKx31x5u_SQ&t=31s
const select = document.querySelector("select");
const allLang = ["ru", "en", "ua"];
// когда изменяется язык меняем URL адрес страницы
select.addEventListener("change", changeURLLanguage);
// перенаправляем на URL с указанием языка
// console.log(select);
function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
}
// получаем язык и убираем #
function changeLanguage() {
  let hash = window.location.hash;
  // console.log(hash);
  hash = hash.substr(1);
  // console.log(hash);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#ru";
    location.reload();
  }
  // присваиваем select нужный язык
  select.value = hash;
  // переводим title 
  document.querySelector("title").innerHTML = langArr["title"][hash];
  // перебираем массив для перевода текста
  for (let key in langArr) {
    // получаем елемент (защита от ошибок в классах HTML)
    let elem = document.querySelector(".lang" + key);
    // если получили елемент - присваиваем перевод
    if (elem) {
      elem.innerHTML = langArr[key][hash];
      // еще нужна проверка на undefinet на наличие нужного перевода, если нет (загружать по умолчанию)
    }
  }
};
changeLanguage();
//*  мультиязычность сайта   https://www.youtube.com/watch?v=MKx31x5u_SQ&t=31s
// ******************************************************************************

//! коментарии на сайте

let comments = [];
btnSubmit.onclick = function() {
    event.preventDefault();
    let commName = document.getElementById('commentsName');
    let commText = document.getElementById('commentsText');
    let comment = {
        name: commName.value,
        text: commText.value,
        time: Math.floor(Date.now() / 1000)
    };
    commName.value = commText.value = '';
    // comments.push(comment);
    comments.unshift(comment);
    saveComments();
    showComments();
};
function saveComments() {
    localStorage.setItem('comments', JSON.stringify(comments));
};
function loadComments() {
    if(localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
};
window.onload = () => loadComments();
function showComments() {
    let commArea = document.getElementById('commentsArea');
    let visible = '';
    comments.forEach(function(e) {
        visible += `<p class="commentsName"><em>Имя: </em><b> ${e.name}</b></p>`;
        visible += `<p class="commentsText"><em>Комментарий: </em><b> ${e.text}</b></p>`;
        visible += `<p class="commentsTime"><em>Дата: </em> <em><b> ${timeConverter(e.time)}</b></em></p><br><hr></hr><br>`;
    });
  commArea.innerHTML = visible;
};
function timeConverter(time) {
  var millsec = new Date(time * 1000);
  var months = ['January','February','February','April','May','June','July','August','September','October','November','December'];
  var year = millsec.getFullYear();
  var month = months[millsec.getMonth()];
  var date = millsec.getDate();
  var hour = millsec.getHours();
  if (hour < 10) {
    hour = '0' + hour;
  }
  var min = millsec.getMinutes();
  if (min < 10) {
    min = '0' + min;
  }
  var sec = millsec.getSeconds();
  if (sec < 10) {
    sec = '0' + sec;
  }
  
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  return time;
};
// скрытие блока с комментариями
$(function() {
  $("#btnHide").click(function() {
      $("#commentsArea").hide(500);
  });

  $("#btnShow").click(function() {
    $("#commentsArea").show(500);
  });
});



//! **********************************************************
// ! паралакс в catalog
var image = document.getElementsByClassName('paralax1');
new simpleParallax(image);

var imageLeft = document.querySelector('.left'),
  imageRight = document.querySelector('.right');

new simpleParallax(imageLeft, {
  orientation: 'left',
  scale: 1.8
});
new simpleParallax(imageRight, {
  orientation: 'right',
  scale: 1.8
});
//! ***********************************


//*********************************************************************** 

// ********************************************************************************


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

// //? анимация блоков при скроле   ****************
//? https://www.youtube.com/watch?v=yIWKeTR73cg&t=160s
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('elementShow');
    } else {
      change.target.classList.remove('elementShow');
    }
  });
}
let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animScroll');
for (let elm of elements) {
  observer.observe(elm);
}
// //? анимация блоков при скроле   ****************

// //? анимация при скроле кнопка 'наверх'  ****************
// https://www.youtube.com/watch?v=jaMbi3SPiPQ

const scrollBtn = document.querySelector('.homeUp');
window.onscroll = () => {
  if (window.scrollY > 1000) {
    scrollBtn.classList.remove('homeUp_hide');
  } else if (window.scrollY < 1000) {
    scrollBtn.classList.add('homeUp_hide');
  }
};
// добавить в html: -  scroll-behavior: smooth;
// для плавного перемещения
//* на js
scrollBtn.onclick = () => {
  window.scrollTo(0, 0);
};

//* на jquery
// $('.homeUp').click(function () {
//   $(window).scrollTop(0);
// });

// //? анимация при скроле  кнопка 'наверх'  ****************

// ! валидация формы   *? вариант 1 **
function checkForm1() {
  var name = document.getElementById('validationName').value;
  var checkName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
  if (!checkName.test(name)) {
    console.log('no');
      alert('Формат имени A-z, A-я');
      return false;
  } else {
    console.log('yes');
  };
  var phone = document.getElementById('validationPhone').value;
  var checkPhone = /^((\+)?(3)?(8)?[\- ]?)?(\(?\d{3}\)?[\- ]?)?\d{3}[\- ]?\d{2}[\- ]?\d{2}$/;
  if (!checkPhone.test(phone)) {
    console.log('no');
      alert('Формат номера телефона должен быть +380957778899');
      return false;
  } else {
    console.log('yes');
  };

  var email = document.getElementById('validationEmail').value;
  var checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;
  if (!checkEmail.test(email)) {
    console.log('no');
      alert('Формат почты должен быть user@gmail.com');
      return false;
  } else {
    console.log('yes');
  };
};

let selector = document.querySelectorAll('input[type="tel"]');
let inMask = new Inputmask('+38 (999) 999-99-99');
inMask.mask(selector);

// получаем input file в переменную
  const formImage = document.getElementById('formImage');
  // получаем div для превью в переменную
  const formPreview = document.getElementById('formPreview');
  // слушаем изменения в input file
  formImage.addEventListener('change', () => {
    uploadFile(formImage.files[0]);
  });

  function uploadFile(file) {
    // проверяем тип файла
    if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
      alert('Разрешены только изображения.');
      formImage.value = '';
      return;
    }
    // проверим размер файла (<2 мб)
    if (file.size > 2 * 1024 * 1024) {
      alert('Файл должен быть меньше 2 мб.');
      return;
    }
    // выводим файл в превью
    var reader = new FileReader();
    reader.onload = function (e) {
      formPreview.innerHTML = `<img src="${e.target.result}" alt="фото">`;
    };
    reader.onerror = function (e) {
      alert('Ошибка');
    };
    reader.readAsDataURL(file);

  }

// ! валидация формы   *? вариант 2 **
// ************************************
function checkForm2() {
  var name = document.getElementById('validationName2').value;
  var checkName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
  if (!checkName.test(name)) {
    console.log('no');
      alert('Формат имени A-z, A-я');
      return false;
  } else {
    console.log('yes');
  };
};


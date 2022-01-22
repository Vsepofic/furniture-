$(function () {
  $("#but1").click(function () {
    // $(".contents").removeClass("contentsLight");
    // $(".contents").addClass("contentsDark");
  });
  $("#but2").click(function () {
    // $(".contents").removeClass("contentsDark");
    // $(".contents").addClass("contentsLight");
  });
});

// **********************************************
//* фильтр
const filterBox = document.querySelectorAll('.filter');

document.getElementById('nav2').addEventListener('click', function(event){
  if (event.target.tagName !== 'A') return false;

  let filterClass = event.target.dataset['filt'];
  // console.log(filterClass);

  filterBox.forEach(function (elem) {
    elem.classList.remove('hideFilter', 1000);
    if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
      elem.classList.add('hideFilter', 1000);
    }
  })
});


// *************************************************
//! поиск по сайту 2 *********************

$( function() {
  var projects = [
    { value: "Кухни", label: "Кухни", desc: "<a href='kitchen.html' target='blank'>Кухни </a>" },
    { value: "Угловые кухни", label: "Угловые кухни", desc: "<a href='../kitchen-corner/kitchen-corner.html' target='blank'>Угловые кухни</a>" },
    { value: "Дизайнеры", label: "Дизайнеры", desc: "<a href='../designers/designer.html' target='blank'>Дизайнеры</a>" },
    { value: "Стиль Лофт", label: "Стиль Лофт", desc: "<a href='../portfolio/portfolio-loft.html' target='blank'>Стиль Лофт</a>" },
    { value: "Стиль Прованс", label: "Стиль Прованс", desc: "<a href='../portfolio/portfolio-prov.html' target='blank'>Стиль Прованс</a>" },
    { value: "Стиль Классика", label: "Стиль Классика", desc: "<a href='../portfolio/portfolio-class.html' target='blank'>Стиль Классика</a>" },
    { value: "Стиль Минимализм", label: "Стиль Минимализм", desc: "<a href='../portfolio/portfolio-mini.html' target='blank'>Стиль Минимализм</a>" },
    { value: "Стиль Этно", label: "Стиль Этно", desc: "<a href='../portfolio/portfolio-etno.html' target='blank'>Стиль Этно</a>" },
    { value: "Контакты", label: "Контакты", desc: "<a href='../contacts/contacts.html' target='blank'>Контакты</a>" },
    { value: "Доставка", label: "Доставка", desc: "<a href='../delivery/delivery.html' target='blank'>Доставка</a>" },
    { value: "Калькуляторы", label: "Калькуляторы", desc: "<a href='../calc/calc.html' target='blank'>Калькуляторы</a>" },
    // home **********
    { value: "5 шагов", label: "5 шагов", desc: "<a href='#topContact'>5 шагов до кухни вашей мечты</a>" },
    { value: "Выбор кухни", label: "Выбор кухни", desc: "<a href='#menuImg'>Выбор кухни</a>" },
    { value: "Кухни на заказ", label: "Кухни на заказ", desc: "<a href='#service'>Кухни на заказ</a>" },
    { value: "Гарантия", label: "Гарантия", desc: "<a href='#quarantee'>Гарантия</a>" },
    { value: "Бытовая техника", label: "Бытовая техника", desc: "<a href='#technique'>Бытовая техника</a>" },
    { value: "Столешницы на заказ", label: "Столешницы на заказ", desc: "<a href='#worktops'>Столешницы на заказ</a>" },
    { value: "Современное оснащение", label: "Современное оснащение", desc: "<a href='#modern'>Современное оснащение</a>" },
    { value: "Нюансы помещения", label: "Нюансы помещения", desc: "<a href='#designers'>Нюансы помещения</a>" },
    { value: "Наши дизайнеры", label: "Наши дизайнеры", desc: "<a href='#designersCard'>Наши дизайнеры</a>" },
    { value: "Дизайн Проект", label: "Дизайн Проект", desc: "<a href='#drawing'>Дизайн Проект</a>" },
    { value: "Отзывы о нас", label: "Отзывы о нас", desc: "<a href='#commentsVideo'>Отзывы о нас</a>" },
    { value: "Консультация специалиста", label: "Консультация специалиста", desc: "<a href='#specialist'>Консультация специалиста</a>" },
    { value: "Мы на карте", label: "Мы на карте", desc: "<a href='#contactMaps'>Мы на карте</a>" },
  ];

  $( "#project" ).autocomplete({
    minLength: 0,
    source: projects,
    focus: function( event, ui ) {
      $( "#project" ).val( ui.item.label );
      return false;
    },
    select: function( event, ui ) {
      $( "#project" ).val( ui.item.label );
      $( "#project-id" ).val( ui.item.value );
      $( "#project-description" ).html( ui.item.desc );
      // $( "#project-icon" ).attr( "src", "img/" + ui.item.icon );

      return false;
    }
  })
  .autocomplete( "instance" )._renderItem = function( ul, item ) {
    return $( "<li>" )
      .append( "<div>" + item.desc + "</div>" )
      .appendTo( ul );
  };
});

//!  ********************* поиск по сайту 2 *
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
let optionsKitchen = {
  threshold: [0.5]
};
let observerKitchen = new IntersectionObserver(onEntry, optionsKitchen);
let elementsKitchen = document.querySelectorAll('.animScroll');
for (let elm of elementsKitchen) {
  observerKitchen.observe(elm);
}
// //? анимация блоков при скроле   ****************

// //? анимация при скроле кнопка 'наверх'  ****************
// https://www.youtube.com/watch?v=jaMbi3SPiPQ

const scrollKitchen = document.querySelector('.homeUp');
window.onscroll = () => {
  if (window.scrollY > 1000) {
    scrollKitchen.classList.remove('homeUp_hide');
  } else if (window.scrollY < 1000) {
    scrollKitchen.classList.add('homeUp_hide');
  }
};
// добавить в html: -  scroll-behavior: smooth;
// для плавного перемещения
//* на js
scrollKitchen.onclick = () => {
  window.scrollTo(0, 0);
};

//* на jquery
// $('.homeUp').click(function () {
//   $(window).scrollTop(0);
// });

// //? анимация при скроле  кнопка 'наверх'  ****************
$(function () {
  $("#but1").click(function () {
    $("table").removeClass("text-dark");
    $("table").addClass("text-light");
  })
    $("#but2").click(function () {
    $("table").removeClass("text-light");
    $("table").addClass("text-dark");
  })
})

// ! API вариант 3  - работает, но надо как-то для функции вставлять в "data" выбранный пользователем город

// https://devcenter.novaposhta.ua/blog/%D0%BF%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D0%B0%D0%BE%D0%B2-%D0%BA-api

// https://devcenter.novaposhta.ua/docs/services/556d7ccaa0fe4f08e8f7ce43/operations/556d8211a0fe4f08e8f7ce45/console

document.getElementById('buttonSearch').addEventListener('click', (e) => {
  getPost(document.getElementById('inputSearch').value);
});

document.getElementById('inputSearch').addEventListener('keydown', (e) => {
  if (e.key == 'Enter') getPost(document.getElementById('inputSearch').value);
});

function getPost(CityName) {

  // *******************************

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.novaposhta.ua/v2.0/json/",
    "method": "POST",
    "headers": {
      "content-type": "application/json",

    },
    "processData": false,
    "data": `{
      "modelName": "AddressGeneral",
      "calledMethod": "getWarehouses",
      "methodProperties": {
        "Language": "ru",
        "CityName": "${CityName}"
      },
      "apiKey": "c123f49ebb36e7f15c01e9dca21365cc"
    }`
  }
  $.ajax(settings).done(function (response) {
    console.log(response);


    // *********************************************************
    
    function getResponse2() {

      document.getElementById('inputSearch').value = "";
      document.getElementById('parent11').innerHTML = "";
      // document.getElementById('parent1').innerHTML = "";
      // document.getElementById('parent2').innerHTML = "";
      // document.getElementById('parent3').innerHTML = "";
      // document.getElementById('parent4').innerHTML = "";
      // document.getElementById('parent5').innerHTML = "";
      // document.getElementById('parent6').innerHTML = "";
      // document.getElementById('parent7').innerHTML = "";
      // document.getElementById('parent8').innerHTML = "";
      // document.getElementById('parent9').innerHTML = "";

      let dataLength = response.data.length;
      console.log(dataLength);

      document.getElementById('city').innerText = response.data[0].CityDescriptionRu;
      console.log(response.data[0].CityDescriptionRu);
      document.getElementById('branch-1').innerText = response.data.length;
      document.getElementById('phone').innerText = response.data[0].Phone;
      if (dataLength > 0) {
        $("#parent").removeClass("d-none");
      }

      let parent11 = document.querySelector('#parent11');
      // let parent1 = document.querySelector('#parent1');
      // let parent2 = document.querySelector('#parent2');
      // let parent3 = document.querySelector('#parent3');
      // let parent4 = document.querySelector('#parent4');
      // let parent5 = document.querySelector('#parent5');
      // let parent6 = document.querySelector('#parent6');
      // let parent7 = document.querySelector('#parent7');
      // let parent8 = document.querySelector('#parent8');
      // let parent9 = document.querySelector('#parent9');

      // for (let a = 0; a < dataLength; a++) {
      //   let li = document.createElement('tr');
      //   li.className = "hurrah";
      //   li.innerHTML = response.data[a].DescriptionRu;
      //   parent1.appendChild(li);
      // }
      // for (let b = 0; b < dataLength; b++) {
      //   let li = document.createElement('tr');
      //   li.className = "hurrah";
      //   li.innerHTML = response.data[b].Delivery.Monday;
      //   parent2.appendChild(li);
      // }
      // for (let c = 0; c < dataLength; c++) {
      //   let li = document.createElement('tr');
      //   li.className = "hurrah";
      //   li.innerHTML = response.data[c].Delivery.Tuesday;
      //   parent3.appendChild(li);
      // }
      // for (let d = 0; d < dataLength; d++) {
      //   let li = document.createElement('tr');
      //   li.className = "hurrah";
      //   li.innerHTML = response.data[d].Delivery.Wednesday;
      //   parent4.appendChild(li);
      // }
      // for (let e = 0; e < dataLength; e++) {
      //   let li = document.createElement('tr');
      //   li.className = "hurrah";
      //   li.innerHTML = response.data[e].Delivery.Thursday;
      //   parent5.appendChild(li);
      // }
      // for (let i = 0; i < dataLength; i++) {
      //   let li = document.createElement('tr');
      //   li.className = "hurrah";
      //   li.innerHTML = response.data[i].Delivery.Friday;
      //   parent6.appendChild(li);
      // }
      // for (let f = 0; f < dataLength; f++) {
      //   let li = document.createElement('tr');
      //   li.className = "hurrah";
      //   li.innerHTML = response.data[f].Delivery.Saturday;
      //   parent7.appendChild(li);
      // }
      // for (let h = 0; h < dataLength; h++) {
      //   let li = document.createElement('tr');
      //   li.className = "hurrah";
      //   li.innerHTML = response.data[h].Delivery.Sunday;
      //   parent8.appendChild(li);
      // }
      // for (let k = 0; k < dataLength; k++) {
      //   let li = document.createElement('tr');
      //   li.className = "hurrah";
      //   li.innerHTML = `${response.data[k].ReceivingLimitationsOnDimensions.Height}-${response.data[k].ReceivingLimitationsOnDimensions.Length}-${response.data[k].ReceivingLimitationsOnDimensions.Width}`
      //   parent9.appendChild(li);
      // }

      for (let a = 0; a < dataLength; a++) {
        let li = document.createElement('tr');
        li.className = "hurrah";
        li.innerHTML = `<strong>${response.data[a].DescriptionRu}</strong> <br><strong>График работы:</strong> Пон: ${response.data[a].Delivery.Monday} Вт: ${response.data[a].Delivery.Tuesday} Ср: ${response.data[a].Delivery.Wednesday} Чт: ${response.data[a].Delivery.Thursday} Пт: ${response.data[a].Delivery.Friday} Сб: ${response.data[a].Delivery.Saturday} Вс: ${response.data[a].Delivery.Sunday} <br><strong>Габариты посылки:</strong> ${response.data[a].ReceivingLimitationsOnDimensions.Height}-${response.data[a].ReceivingLimitationsOnDimensions.Length}-${response.data[a].ReceivingLimitationsOnDimensions.Width}<br>`;
        parent11.appendChild(li);
      }

      $(function () {
        $('tr').slice(0, 25).show();
        if (dataLength > 25) {
          $("#loadMore").removeClass("d-none")
        } else {
          $("#loadMore").addClass("d-none")
        }
        $('#loadMore').on('click', function (e) {
          e.preventDefault();
          $('tr:hidden').slice(0, 25).slideDown();
        })
      });

    }
    getResponse2()
  });
};
document.onload = getPost();

// $(function () {
//   $('tr').slice(0, 4).show();
//   $('#loadMore').on('click', function (e) {
//     e.preventDefault();
//     $('tr:hidden').slice(0, 4).sliceDown();
//   })
// });


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
let optionsDelivery = {
  threshold: [0.5]
};
let observerDelivery = new IntersectionObserver(onEntry, optionsDelivery);
let elementsDelivery = document.querySelectorAll('.animScroll');
for (let elm of elementsDelivery) {
  observerDelivery.observe(elm);
}
// //? анимация блоков при скроле   ****************

// //? анимация при скроле кнопка 'наверх'  ****************
// https://www.youtube.com/watch?v=jaMbi3SPiPQ

const scrollDelivery = document.querySelector('.homeUp');
window.onscroll = () => {
  if (window.scrollY > 1000) {
    scrollDelivery.classList.remove('homeUp_hide');
  } else if (window.scrollY < 1000) {
    scrollDelivery.classList.add('homeUp_hide');
  }
};
// добавить в html: -  scroll-behavior: smooth;
// для плавного перемещения
//* на js
scrollDelivery.onclick = () => {
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
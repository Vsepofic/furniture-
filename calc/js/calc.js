//* калькулятор расчета стоимости кухни
// https://www.youtube.com/watch?v=JbQB_49ijqw
// Элементы формы
const squareInput = document.querySelector('#squareInput');
const squareRange = document.querySelector('#squareRange');
// находим все инпуты для изменения итоговой суммы
const inputs = document.querySelectorAll('input');
// находим радиокнопки
const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');
const radioАpron = document.querySelectorAll('input[name="apron"]');
// находим чекбоксы 
const ceiling = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name="walls"]');
const floor = document.querySelector('input[name="floor"]');
// стоимость за 1 кв.стоимость
const basePrice = 2000;
// поле для вывода итоговой суммы
const totalPriceElement = document.getElementById('totalPrice');
const totalDiscount = document.getElementById('discountPrice');
const totalDiscountPrice = document.getElementById('discountTotalPrice');
// Связка range с текстовым полем
// Слушаем событие input
squareRange.addEventListener('input', function () {
  squareInput.value = squareRange.value;
})
// Связкатекстового поля с range
// Слушаем событие range
squareInput.addEventListener('input', function () {
  squareRange.value = squareInput.value;
})
// считаем площадь
// parseInt - преобразование строки в число
// parseFloat - преобразование строки (с точкой) в число
// функция расчета итоговой суммы
function calculate() {
  let totalPrice = basePrice * parseInt(squareInput.value);
  for (const radio of radioType) {
    if (radio.checked) {
      totalPrice = totalPrice * parseFloat(radio.value);
    }
  }
  for (const radio of radioBuilding) {
    if (radio.checked) {
      totalPrice = totalPrice * parseFloat(radio.value);
    }
  }
  for (const radio of radioRooms) {
    if (radio.checked) {
      totalPrice = totalPrice * parseFloat(radio.value);
    }
  }
  for (const radio of radioАpron) {
    if (radio.checked) {
      totalPrice = totalPrice * parseFloat(radio.value);
    }
  }
  if (ceiling.checked) {
    // totalPrice = totalPrice * parseFloat(ceiling.value); // если цена не за кв.м.
    totalPrice = totalPrice + parseFloat(ceiling.value) * parseInt(squareInput.value);
  }
  if (walls.checked) {
    totalPrice = totalPrice + parseFloat(walls.value) * parseInt(squareInput.value);
  }
  if (floor.checked) {
    totalPrice = totalPrice + parseFloat(floor.value) * parseInt(squareInput.value);
  }
  // вычисляем скидку
  let discount;
  let discountPrice;
  if (totalPrice > 100000) {
    discountPrice = totalPrice * 0.9;
  } else {
    discountPrice = 0;
  }
  if (totalPrice > 100000) {
    discount = totalPrice * 0.1;
  } else {
    discount = 0;
  }
  if (totalPrice > 100000) {
    document.getElementsByClassName('colorRed')[0].style.color = "red";
    document.getElementsByClassName('colorBlue')[0].style.color = "rgb(0, 120, 250)";
    document.getElementsByClassName('colorGreen')[0].style.color = "green";
  } else {
    document.getElementsByClassName('colorRed')[0].style.color = "gray";
    document.getElementsByClassName('colorBlue')[0].style.color = "gray";
    document.getElementsByClassName('colorGreen')[0].style.color = "gray";
  }
  // округляем до целого числа
  totalPrice = ( Math.floor(totalPrice));
  discountPrice = ( Math.floor(discountPrice) );
  discount = ( Math.floor(discount));
  // форматируем вывод числа согласно языковой зоны
  const formatter1 = new Intl.NumberFormat('ru');
  totalPriceElement.innerText = formatter1.format(totalPrice);
  const formatter2 = new Intl.NumberFormat('ru');
  totalDiscountPrice.innerText = formatter2.format(discountPrice);
  const formatter3 = new Intl.NumberFormat('ru');
  totalDiscount.innerText = formatter3.format(discount);
}
calculate();
// перебираем input 
for (const input of inputs) {
  input.addEventListener('input', function () {
    calculate();
  })
}





//* калькулятор расчета стоимости шкафа-купе 
// https://www.youtube.com/watch?v=JbQB_49ijqw
// Элементы формы
// константы 
const squareInput1 = document.querySelector('#squareInput1');
const squareRange1 = document.querySelector('#squareRange1');
// константы 
const squareInput2 = document.querySelector('#squareInput2');
const squareRange2 = document.querySelector('#squareRange2');
// константы 
const squareInput3 = document.querySelector('#squareInput3');
const squareRange3 = document.querySelector('#squareRange3');
// находим все инпуты для изменения итоговой суммы
const inputs2 = document.querySelectorAll('input');
console.log(inputs2);

// // находим все селекты для изменения итоговой суммы
// const selector1 = document.getElementsByTagName('option');
// console.log(selector1);
// const selector11 = document.getElementById('selectMaterial');
// console.log(selector11);
// console.log(select);
// // находим option
// const option1 = document.querySelectorAll('option[name="material"]');
// const option2 = document.querySelectorAll('option[name="coupe"]');
// console.log(option1);
// console.log(option2);

// const material1 = document.getElementById('material1').value;
// const material2 = document.getElementById('material2').value;
// const material3 = document.getElementById('material3').value;

// const coupe1 = document.getElementById('coupe1').value;
// const coupe2 = document.getElementById('coupe2').value;
// const coupe3 = document.getElementById('coupe3').value;
// console.log(material1);
// console.log(material2);
// console.log(material3);
// console.log(coupe1);
// console.log(coupe2);
// console.log(coupe3);

// находим радиокнопки 1 блока
const radioSection = document.querySelectorAll('input[name="section"]');
console.log(radioSection);
const radioShelf = document.querySelectorAll('input[name="shelf"]');
const radioBox = document.querySelectorAll('input[name="box"]');
// находим радиокнопки 2 блока
const radioBarbell = document.querySelectorAll('input[name="barbell"]');
const radioMaterial = document.querySelectorAll('input[name="material"]');
const radioSystem = document.querySelectorAll('input[name="system"]');
// находим радиокнопки 3 блока
const radioPlate = document.querySelectorAll('input[name="plate"]');
const radioMirror = document.querySelectorAll('input[name="mirror"]');
const radioGlass = document.querySelectorAll('input[name="glass"]');
// находим радиокнопки 4 блока
const radioPantograph = document.querySelectorAll('input[name="pantograph"]');
const radioDelivery = document.querySelectorAll('input[name="delivery"]');
const radioInstallation = document.querySelectorAll('input[name="installation"]');
// const radioАpron = document.querySelectorAll('input[name="apron"]');
// стоимость за 1 кв.стоимость
const basePrice2 = 2;   // к примеру 2250 денег

// Связка range с текстовым полем
// Слушаем событие input              Длина шкафа
squareRange1.addEventListener('input', function () {
  squareInput1.value = squareRange1.value;
})
// Связкатекстового поля с range
// Слушаем событие range
squareInput1.addEventListener('input', function () {
  squareRange1.value = squareInput1.value;
})
// Слушаем событие input              Высота шкафа
squareRange2.addEventListener('input', function () {
  squareInput2.value = squareRange2.value;
})
squareInput2.addEventListener('input', function () {
  squareRange2.value = squareInput2.value;
})
// Слушаем событие input              Глубина шкафа
squareRange3.addEventListener('input', function () {
  squareInput3.value = squareRange3.value;
})
squareInput3.addEventListener('input', function () {
  squareRange3.value = squareInput3.value;
})



// Слушаем событие select 
// selector11.addEventListener('select', function ()  {
  // const data = document.getElementById('coupe2').value;
  // console.log(data);
// })



// поле для вывода площади 
const totalSquareElement = document.getElementById('totalSquare');
// поле для вывода итоговой суммы
const totalPriceElement2 = document.getElementById('totalPrice2');
const totalDiscount2 = document.getElementById('discountPrice2');
const totalDiscountPrice2 = document.getElementById('discountTotalPrice2');

// функция расчета итоговой суммы
function calculate2() {
  let totalSquare = ((squareInput1.value)/100) * ((squareInput2.value)/100) * ((squareInput3.value)/100);
  let totalPrice2 = basePrice2 * parseInt(totalSquare);
  console.log(totalSquare);


  // selector11.addEventListener('change', function () {
  //   console.log(this.value);
  //   totalPrice2 = totalPrice2 * parseFloat(this.value);
  //   console.log(totalPrice2);
  //   console.log(parseFloat(this.value));
  //   if (this.value) {
  //     totalPrice2 = totalPrice2 * parseFloat(this.value);
  //   }
  //   console.log(totalPrice2);
  //   // if (material2) {
  //   //   totalPrice2 = totalPrice2 * parseFloat(material2);
  //   // }
  //   // console.log(totalPrice2);
  //   // if (material3) {
  //   //   totalPrice2 = totalPrice2 * parseFloat(material3);
  //   // }
  //   // console.log(totalPrice2);
  // })
  //   console.log(totalPrice2);

  // for (const radio of option2) {
  //   if (radio.selected) {
  //     totalPrice2 = totalPrice2 * parseFloat(radio.value);
  //     console.log(totalPrice2);
  //   }
  // }



  for (const radio of radioSection) {
    if (radio.checked) {
      totalPrice2 = totalPrice2 * parseFloat(radio.value);
    }
  }
  for (const radio of radioShelf) {
    if (radio.checked) {
      totalPrice2 = totalPrice2 * parseFloat(radio.value);
    }
  }
  for (const radio of radioBox) {
    if (radio.checked) {
      totalPrice2 = totalPrice2 * parseFloat(radio.value);
    }
  }

  for (const radio of radioBarbell) {
    if (radio.checked) {
      totalPrice2 = totalPrice2 * parseFloat(radio.value);
    }
  }
  for (const radio of radioMaterial) {
    if (radio.checked) {
      totalPrice2 = totalPrice2 * parseFloat(radio.value);
    }
  }
  for (const radio of radioSystem) {
    if (radio.checked) {
      totalPrice2 = totalPrice2 * parseFloat(radio.value);
    }
  }

  for (const radio of radioPlate) {
    if (radio.checked) {
      totalPrice2 = totalPrice2 * parseFloat(radio.value);
    }
  }
  for (const radio of radioMirror) {
    if (radio.checked) {
      totalPrice2 = totalPrice2 * parseFloat(radio.value);
    }
  }
  for (const radio of radioGlass) {
    if (radio.checked) {
      totalPrice2 = totalPrice2 * parseFloat(radio.value);
    }
  }

  for (const radio of radioPantograph) {
    if (radio.checked) {
      totalPrice2 = totalPrice2 * parseFloat(radio.value);
    }
  }
  for (const radio of radioDelivery) {
    if (radio.checked) {
      totalPrice2 = totalPrice2 * parseFloat(radio.value);
    }
  }
  for (const radio of radioInstallation) {
    if (radio.checked) {
      totalPrice2 = totalPrice2 * parseFloat(radio.value);
    }
  }

  // вычисляем скидку
  let discount2;
  let discountPrice2;
  if (totalPrice2 > 50000) {
    discountPrice2 = totalPrice2 * 0.9;
  } else {
    discountPrice2 = 0;
  }
  if (totalPrice2 > 50000) {
    discount2 = totalPrice2 * 0.1;
  } else {
    discount2 = 0;
  }
  if (totalPrice2 > 50000) {
    document.getElementsByClassName('colorRed2')[0].style.color = "red";
    document.getElementsByClassName('colorBlue2')[0].style.color = "rgb(0, 120, 250)";
    document.getElementsByClassName('colorGreen2')[0].style.color = "green";
  } else {
    document.getElementsByClassName('colorRed2')[0].style.color = "gray";
    document.getElementsByClassName('colorBlue2')[0].style.color = "gray";
    document.getElementsByClassName('colorGreen2')[0].style.color = "gray";
  }
  // округляем до целого числа
  totalPrice2 = ( Math.floor(totalPrice2));
  discountPrice2 = ( Math.floor(discountPrice2) );
  discount2 = ( Math.floor(discount2));
  // форматируем вывод числа согласно языковой зоны
  const formatter1 = new Intl.NumberFormat('ru');
  totalPriceElement2.innerText = formatter1.format(totalPrice2);
  // const formatter2 = new Intl.NumberFormat('ru');
  totalDiscountPrice2.innerText = formatter1.format(discountPrice2);
  // const formatter3 = new Intl.NumberFormat('ru');
  totalDiscount2.innerText = formatter1.format(discount2);
  // const formatter1 = new Intl.NumberFormat('ru');
  // totalSquareElement.innerText = formatter1.format(totalSquare);
}
calculate2();

// перебираем импуты
for (const input2 of inputs2) {
  console.log('change');
  input2.addEventListener('input', function () {
    calculate2();
  })
}








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
let optionsCalc = {
  threshold: [0.5]
};
let observerCalc = new IntersectionObserver(onEntry, optionsCalc);
let elementsCalc = document.querySelectorAll('.animScroll');
for (let elm of elementsCalc) {
  observerCalc.observe(elm);
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
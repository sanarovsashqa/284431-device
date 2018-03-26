var btnDelivery = document.querySelector('button.services-control__btn_delivery');
var btnGuarantee = document.querySelector('button.services-control__btn_guarantee');
var btnCredit = document.querySelector('button.services-control__btn_credit');
var slideDelivery = document.querySelector('li.services-slider__slide_delivery');
var slideGuarantee = document.querySelector('li.services-slider__slide_guarantee');
var slideCredit = document.querySelector('li.services-slider__slide_credit');

btnDelivery.addEventListener('click', function () {
  btnDelivery.classList.add('services-control__btn_current');
  btnGuarantee.classList.remove('services-control__btn_current');
  btnCredit.classList.remove('services-control__btn_current');
  slideDelivery.classList.add('services-slider__slide_current');
  slideGuarantee.classList.remove('services-slider__slide_current');
  slideCredit.classList.remove('services-slider__slide_current');
});

btnGuarantee.addEventListener('click', function () {
  btnDelivery.classList.remove('services-control__btn_current');
  btnGuarantee.classList.add('services-control__btn_current');
  btnCredit.classList.remove('services-control__btn_current');
  slideDelivery.classList.remove('services-slider__slide_current');
  slideGuarantee.classList.add('services-slider__slide_current');
  slideCredit.classList.remove('services-slider__slide_current');
});

btnCredit.addEventListener('click', function () {
  btnDelivery.classList.remove('services-control__btn_current');
  btnGuarantee.classList.remove('services-control__btn_current');
  btnCredit.classList.add('services-control__btn_current');
  slideDelivery.classList.remove('services-slider__slide_current');
  slideGuarantee.classList.remove('services-slider__slide_current');
  slideCredit.classList.add('services-slider__slide_current');
});


var writeUsShow = document.querySelector('.contact__link');
var writeUs = document.querySelector('.write-us');
var modalClose = document.querySelector('.write-us-close');
var form = document.querySelector('.write-us__form');
var nme = document.querySelector('.write-us__input_name');
var email = document.querySelector('.write-us__input_email');
var letter = document.querySelector('.write-us__textarea');

writeUsShow.addEventListener('click', function (evt) {
  evt.preventDefault();
  writeUs.classList.add('modal-show');
});

modalClose.addEventListener('click', function() {
  writeUs.classList.remove('modal-show');
});

form.addEventListener("submit", function (evt) {
  console.log(!nme.value);
  console.log(!email.value);
  console.log(!letter.value);
  if (!nme.value || !email.value || !letter.value) {
    evt.preventDefault();
    writeUs.classList.remove("modal-error");
    writeUs.offsetWidth = writeUs.offsetWidth;
    writeUs.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writeUs.classList.contains("modal-show")) {
      writeUs.classList.remove("modal-show");
      writeUs.classList.remove("modal-error");
    }
  }
});



var mapShow = document.querySelector('.contact__link_map');
var map = document.querySelector('.map-popup');
var modalClose = document.querySelector('.map-close');

mapShow.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log("123")
  map.classList.add('modal-show');
});
modalClose.addEventListener('click', function() {
  map.classList.remove('modal-show');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (map.classList.contains("modal-show")) {
      map.classList.remove("modal-show");
    }
  }
});


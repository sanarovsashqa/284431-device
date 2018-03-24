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

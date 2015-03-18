var $artShowOne = $('.artimg1');
var $btnShowOneHide = $('.firstbutton');

var $artShowTwo = $('.artimg2');
var $btnShowTwoHide = $('.secbutton');

var $artShowThree = $('.artimg3');
var $btnShowThreeHide = $('.trdbutton');

$btnShowOneHide.on('click', function () {
    $artShowTwo.removeClass('js-toggle-show');
    $artShowThree.removeClass('js-toggle-show');
    $artShowOne.toggleClass('js-toggle-show');
});

$btnShowTwoHide.on('click', function () {
    $artShowOne.removeClass('js-toggle-show');
    $artShowThree.removeClass('js-toggle-show');
    $artShowTwo.toggleClass('js-toggle-show');
});

$btnShowThreeHide.on('click', function () {
    $artShowTwo.removeClass('js-toggle-show');
    $artShowOne.removeClass('js-toggle-show');
    $artShowThree.toggleClass('js-toggle-show');
});


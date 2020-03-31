$(document).foundation();

// Price list trigger styles
$('.trigger-view-styles').mouseover(function () {

  if ($('#form-items').hasClass('block')) {

    $('#form-items').removeClass('block');
    $('#form-items').addClass('table');

    $('.table section').removeClass('large-3 medium-4 small-12');
    $('.table section').addClass('large-12');

    $('.item').addClass('grid-x align-justify');

    $('.item img').addClass('cell large-1 medium-12 small-12');
    $('.item h4').addClass('cell large-2 medium-12 small-12');
    $('.item .description-item').addClass('cell large-5 medium-12 small-12');
    $('.item button').addClass('cell large-2 medium-12 small-12');
    $('.item h5').addClass('cell large-2 medium-12 small-12');
  } else {

    $('#form-items').removeClass('table');
    $('#form-items').addClass('block');

    $('.block section').removeClass('large-12');
    $('.block section').addClass('large-3 medium-4 small-12');

    $('.item').removeClass('grid-x align-justify');

    $('.item img').removeClass('cell large-1 medium-12 small-12');
    $('.item h4').removeClass('cell large-2 medium-12 small-12');
    $('.item .description-item').removeClass('cell large-5 medium-12 small-12');
    $('.item button').removeClass('cell large-2 medium-12 small-12');
    $('.item h5').removeClass('cell large-2 medium-12 small-12');
  }

});

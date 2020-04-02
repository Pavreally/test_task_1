var itemTitle = 'h4',
    itemTitleChangeInput = 'input',
    itemTitleChangeButton = 'button',
    itemPrice = 'h5',
    itemDescription = '.description-item';

// Price list trigger styles
$('.trigger-view-styles').mouseover(function () {

  if ($('#form-items').hasClass('block')) {
    $('#form-items').removeClass('block');
    $('#form-items').addClass('table');

    $('.table li').removeClass('large-3 medium-4 small-12');
    $('.table li').addClass('large-12');

    $('.inner-items').addClass('grid-x align-justify');

    $('.inner-items img').addClass('cell large-1 medium-12 small-12');
    $('.inner-items ' + itemTitle).addClass('cell large-2 medium-12 small-12');
    $('.inner-items ' + itemDescription).addClass('cell large-5 medium-12 small-12');
    $('.inner-items ' + itemTitleChangeButton).addClass('cell large-2 medium-12 small-12');
    $('.inner-items ' + itemPrice).addClass('cell large-2 medium-12 small-12');
  } else {
    $('#form-items').removeClass('table');
    $('#form-items').addClass('block');

    $('.block li').removeClass('large-12');
    $('.block li').addClass('large-3 medium-4 small-12');

    $('.inner-items').removeClass('grid-x align-justify');

    $('.inner-items img').removeClass('cell large-1 medium-12 small-12');
    $('.inner-items ' + itemTitle).removeClass('cell large-2 medium-12 small-12');
    $('.inner-items ' + itemDescription).removeClass('cell large-5 medium-12 small-12');
    $('.inner-items ' + itemTitleChangeButton).removeClass('cell large-2 medium-12 small-12');
    $('.inner-items ' + itemPrice).removeClass('cell large-2 medium-12 small-12');
  }
});

$(document).ready(function () {

  // Title item change
  $('.block-items .inner-items').each(function(i) {
    i++;

    $('#item-' + i + ' ' + itemTitle).click(function () {
      if ($('#item-' + i + ' #form-title-item').hasClass('hide')) {
        $('#item-' + i + ' #form-title-item').removeClass('hide');
      }
    });

    $('#item-' + i + ' #form-title-item ' + itemTitleChangeInput).val($('#item-' + i + ' ' + itemTitle).text());

    $('#item-' + i + ' #form-title-item ' + itemTitleChangeButton).click(function () {
      $('#item-' + i + ' ' + itemTitle).text($('#item-' + i + ' #form-title-item ' + itemTitleChangeInput).val());
      $('#item-' + i + ' #form-title-item').addClass('hide');
      return false; // disable form submission and to page reload
    });
  });

  // Drag to items
  $(function () {
    $('#form-items').sortable();
    $('#form-items').disableSelection();
  });
});
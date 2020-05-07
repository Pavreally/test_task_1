let getPositionCursor = el => {
  $('#workplace').focus();

  if (el.selectionStart) {
    return el.selectionStart;
  } else if (document.selection) {
    let sel = document.selection.createRange();
    let clone = sel.duplicate();

    sel.collapse(true);
    clone.moveToElementTest(el);
    clone.setEndPoint('EndToEnd', sel);
    return clone.text.length;
  }

  return 0;
}

$('#workplace').on('input', function (e) {
  let $checkForm = $('#workplace').val(),
    // Position number last element
    posSymbol = getPositionCursor(document.getElementById('workplace')),
    // Caret and added element
    caretLeftSymbol = document.getElementById('workplace').value.substring(posSymbol - 1, posSymbol),
    caretRightSymbol = document.getElementById('workplace').value.substring(posSymbol, posSymbol + 1);

  // Check validate brackets
  let checkBrackets = $checkForm => {
    let startCheck = [];
    let endCheck = c => {
      switch (c) {
        case ')': case '}': case ']':
          return true;
        case '(': case '{': case '[':
          startCheck.push(c);
        default:
          return false;
      }
    }

    for (let i = 0; i < $checkForm.length; i++) {
      let el = $checkForm[i];

      if (endCheck(el) && !match(startCheck.pop() + el)) {
        return false;
      }
    }

    return startCheck.length === 0;
  }

  let match = t => {
    switch (t) {
      case '()': case '{}': case '[]':
        return true;
      default:
        return false;
    }
  }

  let getStrValidate = () => {
    document.getElementById('workplace').value =
      $checkForm.substring(0, posSymbol - 1) +
      caretLeftSymbol.replace(/\(|\)|\{|\}|\[|\]/g, function (bracketsType) {
        if (caretLeftSymbol == '(' || caretLeftSymbol == ')') {
          return bracketsType = '()';
        } else if (caretLeftSymbol == '{' || caretLeftSymbol == '}') {
          return bracketsType = '{}';
        } else if (caretLeftSymbol == '[' || caretLeftSymbol == ']') {
          return bracketsType = '[]';
        }
      }) +
      $checkForm.substring(posSymbol, $checkForm.length);
  }

  switch (caretLeftSymbol) {
    case '(': case ')':
      getStrValidate();
      $('#look').text(checkBrackets($checkForm));
      break;
    case '{': case '}':
      getStrValidate();
      $('#look').text(checkBrackets($checkForm));
      break;
    case '[': case ']':
      getStrValidate();
      $('#look').text(checkBrackets($checkForm));
      break;

    default:
      break;
  }

  if ($checkForm == '') {
    $('#look').text('Обработчик поля ввода');
  } else {
    $('#look').text(checkBrackets($checkForm));
  }

  // console.clear();
  // console.log(`Number: ${posSymbol}`);
  // console.log(`Caret\nleft: ${caretLeftSymbol}\nright: ${caretRightSymbol}`);

});

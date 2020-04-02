$('#workplace').on('input', function (e) {
  let $elements = $('#workplace').val(),
      arrElements = $elements.split('');

  // $('#output').text(arrElements.sort().join(''));

  // Check validate brackets
  let checkBrackets = $elements => {
    let startStack = [];
    let endStack = c => {
      switch (c) {
        case ')': case '}': case ']':
          return true;
        case '(': case '{': case '[':
          startStack.push(c);
        default:
          return false;
      }
    };

    for (let i = 0; i < $elements.length; i++) {
      let e = $elements[i];

      if (endStack(e) && !match(startStack.pop() + e)) {
        return false;
      }
    }

    return startStack.length === 0;
  }

  let match = t => {
    switch (t) {
      case '()': case '{}': case '[]':
        return true;
      default:
        return false;
    }
  }

  if ($('#workplace').val() == '') {
    $('#look').text('Обработчик поля ввода');
  } else {
    $('#look').text(checkBrackets($elements));
  }
});
const keys = [
  {
    eventKode: 'Backquote',
    eventKey: 'ё',
    eventKeyEng: '`',
  },
  {
    eventKode: 'Digit1',
    eventKey: '1',
    eventKeyEng: '1',
  },
  {
    eventKode: 'Digit2',
    eventKey: '2',
    eventKeyEng: '2',
  },
  {
    eventKode: 'Digit3',
    eventKey: '3',
    eventKeyEng: '3',
  },
  {
    eventKode: 'Digit4',
    eventKey: '4',
    eventKeyEng: '4',
  },
  {
    eventKode: 'Digit5',
    eventKey: '5',
    eventKeyEng: '5',
  },
  {
    eventKode: 'Digit6',
    eventKey: '6',
    eventKeyEng: '6',
  },
  {
    eventKode: 'Digit7',
    eventKey: '7',
    eventKeyEng: '7',
  },
  {
    eventKode: 'Digit8',
    eventKey: '8',
    eventKeyEng: '8',
  },
  {
    eventKode: 'Digit9',
    eventKey: '9',
    eventKeyEng: '9',
  },
  {
    eventKode: 'Digit0',
    eventKey: '0',
    eventKeyEng: '0',
  },
  {
    eventKode: 'Minus',
    eventKey: '-',
    eventKeyEng: '-',
  },
  {
    eventKode: 'Equal',
    eventKey: '=',
    eventKeyEng: '=',
  },
  {
    eventKode: 'Backspace',
    eventKey: 'Backspace',
    eventKeyEng: 'Backspace',
  },
  {
    eventKode: 'Tab',
    eventKey: 'Tab',
    eventKeyEng: 'Tab',
  },
  {
    eventKode: 'KeyQ',
    eventKey: 'й',
    eventKeyEng: 'q',
  },
  {
    eventKode: 'KeyW',
    eventKey: 'ц',
    eventKeyEng: 'w',
  },
  {
    eventKode: 'KeyE',
    eventKey: 'у',
    eventKeyEng: 'e',
  },
  {
    eventKode: 'KeyR',
    eventKey: 'к',
    eventKeyEng: 'r',
  },
  {
    eventKode: 'KeyT',
    eventKey: 'е',
    eventKeyEng: 't',
  },
  {
    eventKode: 'KeyY',
    eventKey: 'н',
    eventKeyEng: 'y',
  },
  {
    eventKode: 'KeyU',
    eventKey: 'г',
    eventKeyEng: 'u',
  },
  {
    eventKode: 'KeyI',
    eventKey: 'ш',
    eventKeyEng: 'i',
  },
  {
    eventKode: 'KeyO',
    eventKey: 'щ',
    eventKeyEng: 'o',
  },
  {
    eventKode: 'KeyP',
    eventKey: 'з',
    eventKeyEng: 'p',
  },
  {
    eventKode: 'BracketLeft',
    eventKey: 'х',
    eventKeyEng: '[',
  },
  {
    eventKode: 'BracketRight',
    eventKey: 'ъ',
    eventKeyEng: ']',
  },
  {
    eventKode: 'Backslash',
    eventKey: '\\',
    eventKeyEng: '\\',
  },
  {
    eventKode: 'Delete',
    eventKey: 'Del',
    eventKeyEng: 'Del',
  },
  {
    eventKode: 'CapsLock',
    eventKey: 'CapsLk',
    eventKeyEng: 'CapsLk',
  },
  {
    eventKode: 'KeyA',
    eventKey: 'ф',
    eventKeyEng: 'a',
  },
  {
    eventKode: 'KeyS',
    eventKey: 'ы',
    eventKeyEng: 's',
  },
  {
    eventKode: 'KeyD',
    eventKey: 'в',
    eventKeyEng: 'd',
  },
  {
    eventKode: 'KeyF',
    eventKey: 'а',
    eventKeyEng: 'f',
  },
  {
    eventKode: 'KeyG',
    eventKey: 'п',
    eventKeyEng: 'g',
  },
  {
    eventKode: 'KeyH',
    eventKey: 'р',
    eventKeyEng: 'h',
  },
  {
    eventKode: 'KeyJ',
    eventKey: 'о',
    eventKeyEng: 'j',
  },
  {
    eventKode: 'KeyK',
    eventKey: 'л',
    eventKeyEng: 'k',
  },
  {
    eventKode: 'KeyL',
    eventKey: 'д',
    eventKeyEng: 'l',
  },
  {
    eventKode: 'Semicolon',
    eventKey: 'ж',
    eventKeyEng: ';',
  },
  {
    eventKode: 'Quote',
    eventKey: 'э',
    eventKeyEng: '\'',
  },
  {
    eventKode: 'Enter',
    eventKey: 'Enter',
    eventKeyEng: 'Enter',
  },
  {
    eventKode: 'ShiftLeft',
    eventKey: 'Shift',
    eventKeyEng: 'Shift',
  },
  {
    eventKode: 'KeyZ',
    eventKey: 'я',
    eventKeyEng: 'z',
  },
  {
    eventKode: 'KeyX',
    eventKey: 'ч',
    eventKeyEng: 'x',
  },
  {
    eventKode: 'KeyC',
    eventKey: 'с',
    eventKeyEng: 'c',
  },
  {
    eventKode: 'KeyV',
    eventKey: 'м',
    eventKeyEng: 'v',
  },
  {
    eventKode: 'KeyB',
    eventKey: 'и',
    eventKeyEng: 'b',
  },
  {
    eventKode: 'KeyN',
    eventKey: 'т',
    eventKeyEng: 'n',
  },
  {
    eventKode: 'KeyM',
    eventKey: 'ь',
    eventKeyEng: 'm',
  },
  {
    eventKode: 'Comma',
    eventKey: 'б',
    eventKeyEng: ',',
  },
  {
    eventKode: 'Period',
    eventKey: 'ю',
    eventKeyEng: '.',
  },
  {
    eventKode: 'Slash',
    eventKey: '/',
    eventKeyEng: '?',
  },
  {
    eventKode: 'ArrowUp',
    eventKey: '▲',
    eventKeyEng: '▲',
  },
  {
    eventKode: 'ShiftRight',
    eventKey: 'Shift',
    eventKeyEng: 'Shift',
  },
  {
    eventKode: 'ControlLeft',
    eventKey: 'Ctrl',
    eventKeyEng: 'Ctrl',
  },
  {
    eventKode: 'MetaLeft',
    eventKey: 'Win',
    eventKeyEng: 'Win',
  },
  {
    eventKode: 'AltLeft',
    eventKey: 'Alt',
    eventKeyEng: 'Alt',
  },
  {
    eventKode: 'Space',
    eventKey: ' ',
    eventKeyEng: ' ',
  },
  {
    eventKode: 'AltRight',
    eventKey: 'Alt',
    eventKeyEng: 'Alt',
  },
  {
    eventKode: 'ArrowLeft',
    eventKey: '◀',
    eventKeyEng: '◀',
  },
  {
    eventKode: 'ArrowDown',
    eventKey: '▼',
    eventKeyEng: '▼',
  },
  {
    eventKode: 'ArrowRight',
    eventKey: '▶',
    eventKeyEng: '▶',
  },
  {
    eventKode: 'ControlRight',
    eventKey: 'Ctrl',
    eventKeyEng: 'Ctrl',
  },
]
let key;
let keyboard;
let textarea;
function createKeyboard() {
  let container = document.createElement('container');
  container.classList.add('container');
  textarea = document.createElement('textarea');
  textarea.setAttribute('cols', 5);
  textarea.setAttribute('rows', 10);
  keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  document.body.append(container);
  container.append(textarea);
  container.append(keyboard);
  for (let i = 0; i < keys.length; i++) {
    key = document.createElement('div');
    key.classList.add('keyboard__key');
    key.id = keys[i].eventKode;
    key.innerHTML = keys[i].eventKeyEng;
    keyboard.append(key);
    let br = document.createElement('br');
    switch (keys[i].eventKode) {
        case 'Backspace':
        case 'Enter':
        key.classList.add('keyboard__key--wide');
        key.after(br);
        break;
        case 'CapsLock':
          key.classList.add('keyboard__key--wide');
          break;
        case 'Delete':
          case 'ShiftRight':
        key.after(br);
        break;
        case 'Space':
        key.classList.add('keyboard__key--extra-wide');
        break;
    }
}
}
createKeyboard();

const keysArr = document.querySelectorAll('.keyboard__key');

document.addEventListener('keydown', function(event) {
  for (let i = 0; i < keysArr.length; i++) {
  if (event.code == keysArr[i].id) {
    keysArr[i].classList.toggle('active');
  }
}
});
document.addEventListener('keyup', function(event) {
  for (let i = 0; i < keysArr.length; i++) {
  if (event.code == keysArr[i].id) {
    keysArr[i].classList.toggle('active');
  }
}
});

let pressedKeys = [];
document.addEventListener('keydown', function(event) {
  pressedKeys.push(event.code);
  if (pressedKeys.includes('AltLeft') && pressedKeys.includes('ControlLeft')) {
    if (keysArr[0].innerHTML == '`') {
      for (let i = 0; i < keysArr.length; i++) {
          keysArr[i].innerHTML = keys[i].eventKey;
           };
           pressedKeys = [];
    } else {
      for (let i = 0; i < keysArr.length; i++) {
            keysArr[i].innerHTML = keys[i].eventKeyEng;
             };
             pressedKeys = [];
    }
  } 
  });

keyboard.addEventListener('mousedown', function(event) {
  if (event.target.classList.contains("keyboard__key")) {
event.target.classList.add('active');
textarea.value += `${event.target.innerText}`;
}
  })
  keyboard.addEventListener('mouseup', function(event) {
event.target.classList.remove('active');
  })


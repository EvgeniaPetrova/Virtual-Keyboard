const keyLayout = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
  'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del',
  'capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
  'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'shift',
  'ctrl', 'win', 'alt', ' ', 'alt', '◀', '▼', '▶', 'ctrl',
];

function createKeyboard() {
  let container = document.createElement('container');
  container.classList.add('container');
  let textarea = document.createElement('textarea');
  textarea.setAttribute('cols', 5);
  textarea.setAttribute('rows', 10);
  let keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  document.body.append(container);
  container.append(textarea);
  container.append(keyboard);
  for (let i = 0; i < keyLayout.length; i++) {
    let key = document.createElement('div');
    key.classList.add('keyboard__key');
    key.innerHTML = keyLayout[i];
    keyboard.append(key);
    let br = document.createElement('br');
    switch (keyLayout[i]) {
        case 'backspace':
        key.classList.add('keyboard__key--wide');
        key.after(br);
        break;
        case 'del':
        key.after(br);
        break;
        case 'ctrl':
        if (keyLayout[i] !== keyLayout[keyLayout.length - 1]) {
        key.after(br)};
        break;
        case 'enter':
        key.classList.add('keyboard__key--wide');
        key.after(br);
        break;
        case ' ':
        key.classList.add('keyboard__key--extra-wide');
        break;
        case 'capslock':
        case 'enter':    
        key.classList.add('keyboard__key--wide');
        break;
    }
}
}
createKeyboard();
// Нам в первую очередь нужно найти textarea;
// Найти - textarea value.length;
// textarea value.length - передать в total-characters;


const textArea = document.querySelector('.realtime__textarea');
const totalCharacter = document.querySelector('#total-character');
const remaining = document.querySelector('#remaining');


textArea.addEventListener('keyup',updateCounter);
// updateCounter(); // не будет показывать цифры у total-character и remaining до написания

function updateCounter() {
    totalCharacter.innerHTML = textArea.value.length;

    remaining.innerHTML = textArea.getAttribute('maxLength') - textArea.value.length;
}

// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"

let pElement = document.getElementsByTagName('p');

// b) отримує текст з блоку з id "rules"

let rulesElement = document.getElementsByClassName('fc_bp');

// c) замініть текст параграфа з id 'content' на будь-який інший

pElement.innerHtml = '// d) замініть текст параграфа з id \'rules\' на будь-який інший\n' +
    '// e) змініть кожному елементу колір фону на червоний\n' +
    '// f) змініть кожному елементу колір тексту на синій\n' +
    '// g) отримати весь список класів елемента з id=rules і вивести їх в console.log\n' +
    '// h) отримати всі елементи з класом fc_rules\n' +
    '// i) поміняти колір тексту у всіх елементів fc_rules на червоний';

// d) замініть текст параграфа з id 'rules' на будь-який інший

rulesElement.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate deleniti\n' +
    '    molestias mollitia pariatur porro saepe! Dolorem eaque earum eligendi, iste maxime molestias quam vitae.\n' +
    '    Dolore hic in quae sed.';

// e) змініть кожному елементу колір фону на червоний

pElement.style.backgroundColor = 'red';
rulesElement.style.backgroundColor = 'red';

// f) змініть кожному елементу колір тексту на синій

pElement.style.color = 'blue';
rulesElement.style.color = 'blue';

// g) отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(pElement.classList);
console.log(rulesElement.classList);

// h) отримати всі елементи з класом fc_rules

let fcElement = document.getElementsByClassName('fc_rules');

// i) поміняти колір тексту у всіх елементів fc_rules на червоний

fcElement.style.color = 'red';
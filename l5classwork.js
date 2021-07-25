// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

let headerElement = document.getElementById('main_header');

// b) робить шириниу елементу ul 400px

let ulElement = document.getElementsByTagName('ul');
ulElement.style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let linkListElement = document.getElementsByClassName('LinkList');
linkListElement.style.width = '50%';

// d) отримує текст який зберігається в елементі з класом listElement2

let listElement = document.getElementsByClassName('ListElement2');

// e) отримує всі елементи li та змінює ім колір фону на сірий

let liElement = document.getElementsByTagName('li');
liElement.style.backgroundColor = 'silver';

// f) отримує всі елементи 'a' та додає їм клас anchor

let aElement = document.getElementsByTagName('a');
aElement.classList.add('anchor');

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

aElement = document.getElementsByTagName('a');
aElement.style.fontsize = function (){
    if('link3'){
        fontsize = '40px';
    }
    return fontsize;
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

aElement = document.getElementsByTagName('a');
aElement.classList.add(function (){
    return element_xxx = element_('a');
})

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let subElement = document.getElementsByClassName('sub-header');
subElement.style.backgroundColor = prompt('Введіть колір фону');

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

subElement = document.getElementsByClassName('sub-header');
subElement.style.color  = function (){
    if('content 2'){
        color = prompt('Введіть колір');
    }
    return color;
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let contentElement = document.getElementsByClassName('content_1');
contentElement.innerText = prompt('Введіть текст');

// l) отримати елементи p та змінити їм padding на 20px

let pElement = document.getElementsByTagName('p');
pElement.style.padding = '20px';

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
//
let textElement = document.getElementsByClassName('text2');
textElement.innerHtml = 'mon-year';

// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div
//
let loginForm = document.forms.LoginForm;
const email = loginForm.email;
const action = loginForm.action;
action.onclick = function (ev){
    'index.html'=== action;
    // const loginData = {
    //     email: email.value,
    //     password: password.value
    // }
    // ev.preventDefault();
}
email.oninput = function (ev){
    localStorage.setItem('email',ev.target.value)
}
let inputs = document.getElementsByTagName('input');
for (const input of inputs) {
    input.oninput = function (ev){
        console.log(ev.target.value);
    }
}
localStorage.setItem('name', JSON.stringify(email));

// 3. Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
//     створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//
//
//     ДОДАТКОВО
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

const form = document.forms.itemForm;
const name = form.name;
const price = form.price;
const ok = form.ok;

ok.oclick = function (ev) {
    ev.preventDefault();

    let storage = [];
    const item = {name, price};
    const storageJSON = localStorage.getItem('storage');
    if (storageJSON) {
        storage = JSON.parse(storageJSON);
    }
    storage.push({name: name.value, price:price.value, id: storage.length + 1});
    localStorage.setItem('storage',JSON.stringify(storage));
}
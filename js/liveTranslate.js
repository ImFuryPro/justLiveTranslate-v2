/*
* Just Live Translate Native
* Author: Иван "ImFuryPro" Сапоненко
* Version: 2.0
* Description: Реализует живой перевод сайта по созданному словарю. Версия без использования jQuery.
*/

let newSource = './js/dictionaries/dictionary.json', // Путь до словаря в формате JSON
    changeLangButtons = document.querySelectorAll(`[data-action="changeLang"]`); // Получаем все кнопки для смены языка

// По умолчанию "Русский"
if (localStorage.getItem("lang") === "" || localStorage.getItem("lang") === "null" || localStorage.getItem("lang") === null) {
    localStorage.setItem("lang", "ru");
}

// Читаем словарь
function readTextFile(file) {
    let rawFile = new XMLHttpRequest(),
        allText = "";

    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return allText;
}

/*
* Получение словаря из JSON файла и его обработка
* source - путь до словаря
* lang - язык словаря
*/
function getSetDictionary(source, lang) {
    let dictionary = readTextFile(source),
        parseDictionary = JSON.parse(dictionary),
        langArray = parseDictionary[lang];

    localStorage.setItem("lang", lang); // Устанавливаем в хранилище значение языка, чтобы при обновлении страницы язык не сменился

    Object.keys(langArray).map(function(arrayObjKey) {
        let domElement = document.querySelector(`[data-word="${arrayObjKey}"]`);

        if (domElement.tagName === "INPUT") {
            domElement.setAttribute("placeholder", langArray[arrayObjKey]);
        } else {
            domElement.innerHTML = langArray[arrayObjKey];
        }
    });
}

// Вызываем функцию сразу, как только страница загрузилась
getSetDictionary(newSource, localStorage.getItem("lang"));

// Переключение языка
changeLangButtons.forEach(button => {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        getSetDictionary(newSource, this.dataset.lang);
    });
});

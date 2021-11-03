# Just Live Translate v2.0
Live Dictionary Translate<br />

Author: Иван "ImFuryPro" Сапоненко<br />
Version: 2.0<br />
Description: Реализует живой перевод сайта по словарю. Версия без использования jQuery.<br />

Версия с JQuery: [https://github.com/ImFuryPro/JustLiveTranslate](https://github.com/ImFuryPro/JustLiveTranslate)

## Использование
1. Устанавливаем необходимый словарь по пути **/js/dictionaries/dictionary.json**;
2. Устанавливаем скрипт в код страницы, перед тегом body;
3. Для перевода слов, в необходимых тегах устанавливаем атрибут [data-word="*"], где * - ключ текста в словаре (п.1);
4. Для установки кнопки для смены языка, необходимо в тег ссылок или кнопки установить атрибуты [data-action="changeLang"] и [data-lang="*"], где * - ключ языка в словаре (п.1);
5. ...
6. Profit!

**ImFuryPro**, 2021 (c)
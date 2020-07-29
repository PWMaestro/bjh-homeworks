# Домашние задания по курсу «Базовый JavaScript в Браузере»

## Блок 1. Основы разработки интерфейсов

#### 1.1. [Возможности JavaScript в браузере](./01-js-features/)  

#### 1.2. [Способы поиска нужного HTML-элемента](./02-element-search/)

#### 1.3. [Объект события](./03-event-object/)

## Блок 2. Работа с DOM

#### 2.1. [DOM](./04-dom/)

#### 2.2. [Работа с HTML-формами](./05-html-forms/)

#### 2.3. [Изменение структуры HTML-документа](./06-document-structure/)

## Блок 3. Работа с состоянием

#### 3.1. [Асинхронные запросы](./07-async-requests/)

#### 3.2. [Хранение состояния на клиенте](./08-client-state)

## Требования

* браузер;
* редактор кода, например [Sublime Text][1] или [Visual Studio Code][2];
* аккаунт на [GitHub][0] ([инструкция по регистрации на GitHub][3]);
* система контроля версий [Git][4], установленная локально ([инструкция по установке Git][5]);

## Начало работы

1. Создать репозиторий на [GitHub][0]. Параметры создаваемого репозитория:
* Repository name: `bhj-homeworks`;
* Access level: Public;
* Initialize this repository with a README: No;
* Add .gitignore: None;
* Add a license: None.

После нажатия на кнопку `Create repository`, вы будете переведены на страницу вновь созданного репозитория.
URL адрес текущей страницы будет являться URL адресом вашего репозитория.
Пример URL адреса репозитория: `https://github.com/username/bhj-homeworks`, где `username` - имя вашего профиля GitHub, `bhj-homeworks` - название репозитория. Далее по тексту адрес вашего репозитория будет иметь обозначение: `%repo-url%`.

2. Создать директорию на вашем компьютере, в которой вы планируете выполнять домашние задания.
3. Открыть созданную директорию с помощью терминала или командной строки вашей операционной системы.
4. Клонировать репозиторий с домашними заданиями с помощью команды `git clone https://github.com/netology-code/bhj-homeworks` в открывшемся терминале или командной строке.
5. Перейти в директорию склонированного репозитория `cd ./bhj-homeworks`.
6. Добавить репозиторий в проект `git remote add homeworks %repo-url%`, где `%repo-url%` — адрес созданного репозитория.

## Решение задач
1. Перейти в папку задания, например, для первого задания `cd ./js-features`.
2. Открыть файл `main.js` в вашем редакторе кода и выполнить задание.
3. Открыть файл `index.html` в вашем браузере и с помощью консоли DevTools убедиться в правильности выводимых результатов.
4. Добавить файл `main.js` в индекс git с помощью команды `git add %file-path%`, где `%file-path%` - путь до целевого файла, например, для первого задания `git add main.js`.
5. Сделать коммит используя команду `git commit -m '%comment%'`, где %comment% - это произвольный комментарий к вашему коммиту, например, для первого задания `git commit -m 'first commit variables'`.
6. Опубликовать код в репозиторий homeworks с помощью команды `git push -u homeworks master`.
7. Прислать ссылку на репозиторий через личный кабинет на сайте [Нетологии][6].


[0]: https://github.com/
[1]: https://www.sublimetext.com/
[2]: https://code.visualstudio.com/
[3]: https://github.com/netology-code/guides/blob/master/git/github.md
[4]: https://git-scm.com/
[5]: https://github.com/netology-code/guides/blob/master/git/REAMDE.md
[6]: https://netology.ru/

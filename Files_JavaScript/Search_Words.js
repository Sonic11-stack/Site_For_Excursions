document.addEventListener('DOMContentLoaded', function() {
    const searchDivHTML = `
        <div class="Search animate__animated">
            <form id="searchForm">
                <input type="text" id="searchInput" list="keywords" placeholder="Поиск по экскурсиям" style="border-radius: 5px; outline: 1px solid #000;">
                <datalist id="keywords">
                    <option value="Квадроцикл"></option>
                    <option value="Абрау-Дюрсо"></option>
                    <option value="Электробайк"></option>
                    <option value="Дайвинг"></option>
                    <option value="Экскурсии"></option>
                    <option value="Арена Колизей"></option>
                    <option value="Новороссийск"></option>
                    <option value="Дельфинарий"></option>
                    <option value="Лотосы"></option>
                    <option value="Тамань"></option>
                    <option value="Старый парк"></option>
                    <option value="Канатные дороги"></option>
                    <option value="Сафари"></option>
                    <option value="Олимп"></option>
                    <option value="Кавказское гостеприимство"></option>
                    <option value="Сочи"></option>
                    <option value="Лаго-Наки"></option>
                    <option value="Водопады"></option>
                    <option value="Пшадские водопады"></option>
                    <option value="Жане"></option>
                    <option value="Куаго"></option>
                    <option value="Плесецкие водопады"></option>
                    <option value="Гебиусские водопады"></option>
                    <option value="Абхазия"></option>
                    <option value="Гуамское ущелье"></option>
                    <option value="Конные прогулки"></option>
                    <option value="Грозовые ворота"></option>
                    <option value="Пшада"></option>
                    <option value="Ночной Геленджик"></option>
                    <option value="Жилье"></option>
                    <option value="Яхты"></option>
                    <option value="Морская рыбалка"></option>
                    <option value="Ночная дискотека"></option>
                    <option value="Пляж Сосновка"></option>
                    <option value="Катера"></option>
                    <option value="Скала Парус"></option>
                    <option value="Анимация в море"></option>
                    <option value="Джек Воробей"></option>
                    <option value="Рио"></option>
                    <option value="На закат"></option>
                    <option value="Джиппинг"></option>
                    <option value="Автобусные экскурсии"></option>
                    <option value="Морские прогулки"></option>
                    <option value="Экстрим"></option>
                    <option value="Природа Геленджика"></option>
                    <option value="Золотая бухта"></option>
                </datalist>
            </form>
        </div>
    `;

    const sectionFirst = document.querySelector('div.Invisible_Line');
    sectionFirst.insertAdjacentHTML('beforebegin', searchDivHTML);

    setTimeout(function() {
        const searchDiv = document.querySelector('.Search');
        searchDiv.classList.add('animate__zoomIn'); 
    }, 100);
});

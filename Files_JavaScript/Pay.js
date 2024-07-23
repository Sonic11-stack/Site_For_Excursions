document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const dataList = document.getElementById('keywords');

    searchInput.addEventListener('input', function(event) {
        const userInput = event.target.value.trim().toLowerCase();

        const options = dataList.querySelectorAll('option');
        for (let option of options) {
            if (option.value.toLowerCase() === userInput) {
                redirectToPage(option.value);
                event.preventDefault();
                event.stopPropagation();
                return;
            }
        }
    });

    function redirectToPage(keyword) {
        const pages = {
            "Квадроцикл": '../Files_HTML/ATVs.html',
            "Абрау-Дюрсо": '../Files_HTML/Abrau-Durso.html',
            "Электробайк": '../Files_HTML/Electric_Bike.html',
            "Дайвинг": '../Files_HTML/Diving.html',
            "Экскурсии": '../Files_HTML/Excursions.html',
            "Арена Колизей": '../Files_HTML/Amazons_and_a_wedding_in_Malinovka.html',
            "Новороссийск": '../Files_HTML/Novorossiysk.html',
            "Дельфинарий": '../Files_HTML/Dolphinarium.html',
            "Лотосы": '../Files_HTML/Lotuses.html',
            "Тамань": '../Files_HTML/Taman.html',
            "Старый парк": '../Files_HTML/The-Old-Park.html',
            "Канатные дороги": '../Files_HTML/Cable-Сars.html',
            "Сафари": '../Files_HTML/Safari.html',
            "Олимп": '../Files_HTML/Olympus.html',
            "Кавказское гостеприимство": '../Files_HTML/Caucasian_Hospitality.html',
            "Сочи": '../Files_HTML/Sochi.html',
            "Лаго-Наки": '../Files_HTML/Adygea.html',
            "Водопады": '../Files_HTML/Waterfalls.html',
            "Пшадские водопады": '../Files_HTML/Pshadsky_Waterfalls.html',
            "Жане": '../Files_HTML/Jean.html',
            "Куаго": '../Files_HTML/Kuago.html',
            "Плесецкие водопады": '../Files_HTML/Plesetsk_Waterfalls.html',
            "Гебиусские водопады": '../Files_HTML/Gebius_Waterfalls.html',
            "Абхазия": '../Files_HTML/Abkhazia.html',
            "Гуамское ущелье": '../Files_HTML/Guam_Gorge.html',
            "Конные прогулки": '../Files_HTML/HorsebackRiding.html',
            "Грозовые ворота": '../Files_HTML/Thunder_Gate.html',
            "Пшада": '../Files_HTML/Pshada_Jipping.html',
            "Ночной Геленджик": '../Files_HTML/Gelendzhik_At_Night.html',
            "Жилье": '../Files_HTML/Housing.html',
            "Яхты": '../Files_HTML/Yachts.html',
            "Морская рыбалка": '../Files_HTML/Fishing.html',
            "Ночная дискотека": '../Files_HTML/Night_Disco.html',
            "Пляж Сосновка": '../Files_HTML/Sosnovka_Beach.html',
            "Катера": '../Files_HTML/Boats.html',
            "Скала Парус": '../Files_HTML/The_Sail_Rock.html',
            "Анимация в море": '../Files_HTML/Animation_At_Sea.html',
            "Джек Воробей": '../Files_HTML/Jack_Sparrow.html',
            "Рио": '../Files_HTML/Rio.html',
            "На закат": '../Files_HTML/Sunset.html',
            "Автобусные экскурсии": '../Files_HTML/Excursions.html',
            "Морские прогулки": '../Files_HTML/Boat_Trips.html',
            "Природа Геленджика": '../Files_HTML/Waterfalls.html',
            "Экстрим": '../Files_HTML/Extreme.html',
            "Золотая бухта": '../Files_HTML/Aquapark.html'
        };

        const pageUrl = pages[keyword];

        if (pageUrl) {
            window.location.href = pageUrl;
        } else {
            alert('Страница не найдена');
        }
    }
});
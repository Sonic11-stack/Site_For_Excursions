document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const dataList = document.getElementById('keywords');

    if (!searchInput) {
        console.error('searchInput not found');
    }

    if (!dataList) {
        console.error('dataList not found');
    }

    searchInput.addEventListener('change', function(event) {
        const userInput = event.target.value.trim().toLowerCase();
        console.log('User input:', userInput); // Логируем ввод пользователя

        const options = dataList.querySelectorAll('option');
        let matchFound = false;

        for (let option of options) {
            console.log('Checking option:', option.value.toLowerCase()); // Логируем каждую опцию
            if (option.value.toLowerCase() === userInput) {
                console.log('Match found:', option.value); // Логируем совпадение
                redirectToPage(option.value);
                matchFound = true;
                break;
            }
        }

        if (!matchFound) {
            console.log('No match found for:', userInput); // Логируем отсутствие совпадения
        }
    });

    function redirectToPage(keyword) {
        const pages = {
            "квадроцикл": '../Files_HTML/ATVs.html',
            "абрау-дюрсо": '../Files_HTML/Abrau-Durso.html',
            "электробайк": '../Files_HTML/Electric_Bike.html',
            "дайвинг": '../Files_HTML/Diving.html',
            "экскурсии": '../Files_HTML/Excursions.html',
            "арена колизей": '../Files_HTML/Amazons_and_a_wedding_in_Malinovka.html',
            "новороссийск": '../Files_HTML/Novorossiysk.html',
            "дельфинарий": '../Files_HTML/Dolphinarium.html',
            "лотосы": '../Files_HTML/Lotuses.html',
            "тамань": '../Files_HTML/Taman.html',
            "старый парк": '../Files_HTML/The-Old-Park.html',
            "канатные дороги": '../Files_HTML/Cable-Сars.html',
            "сафари": '../Files_HTML/Safari.html',
            "олимп": '../Files_HTML/Olympus.html',
            "кавказское гостеприимство": '../Files_HTML/Caucasian_Hospitality.html',
            "сочи": '../Files_HTML/Sochi.html',
            "лаго-наки": '../Files_HTML/Adygea.html',
            "водопады": '../Files_HTML/Waterfalls.html',
            "пшадские водопады": '../Files_HTML/Pshadsky_Waterfalls.html',
            "жане": '../Files_HTML/Jean.html',
            "куаго": '../Files_HTML/Kuago.html',
            "плесецкие водопады": '../Files_HTML/Plesetsk_Waterfalls.html',
            "гебиусские водопады": '../Files_HTML/Gebius_Waterfalls.html',
            "абхазия": '../Files_HTML/Abkhazia.html',
            "гуамское ущелье": '../Files_HTML/Guam_Gorge.html',
            "конные прогулки": '../Files_HTML/HorsebackRiding.html',
            "грозовые ворота": '../Files_HTML/Thunder_Gate.html',
            "пшада": '../Files_HTML/Pshada_Jipping.html',
            "ночной геленджик": '../Files_HTML/Gelendzhik_At_Night.html',
            "жилье": '../Files_HTML/Housing.html',
            "яхты": '../Files_HTML/Yachts.html',
            "морская рыбалка": '../Files_HTML/Fishing.html',
            "ночная дискотека": '../Files_HTML/Night_Disco.html',
            "пляж сосновка": '../Files_HTML/Sosnovka_Beach.html',
            "катера": '../Files_HTML/Boats.html',
            "скала парус": '../Files_HTML/The_Sail_Rock.html',
            "анимация в море": '../Files_HTML/Animation_At_Sea.html',
            "джек воробей": '../Files_HTML/Jack_Sparrow.html',
            "рио": '../Files_HTML/Rio.html',
            "на закат": '../Files_HTML/Sunset.html',
            "джиппинг": '../Files_HTML/Jipping.html',
            "автобусные экскурсии": '../Files_HTML/Excursions.html',
            "морские прогулки": '../Files_HTML/Boat_Trips.html',
            "природа геленджика": '../Files_HTML/Nature_of_Gelendzhik.html',
            "экстрим": '../Files_HTML/Extreme.html',
            "золотая бухта": '../Files_HTML/Aquapark.html'
        };

        const pageUrl = pages[keyword.toLowerCase()];
        console.log('Redirecting to:', pageUrl); // Логируем URL перенаправления

        if (pageUrl) {
            window.location.href = pageUrl;
        } else {
            alert('Страница не найдена');
        }
    }
});

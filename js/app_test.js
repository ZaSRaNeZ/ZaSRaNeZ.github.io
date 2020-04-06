var classTimetable = '';
var timetableDiv = document.createElement('div');
var obj = {};
var classListButtons = '';



function hrefCheck(str) {

    var re = /(https?|ftp):\/\/\S+[^\s.,> )\];'\"!?]/g;
    var template = '<a href="$&" target="_blank">$&</a>';
    var out = str.replace(re, template);

    return out;
}

function classRead() {

    for (let className in obj) {
        classListButtons += `<div class="class-ask__butons" onclick="classClick(this)" classData="${className}">${className.toLowerCase()}</div>`;

    }
    classListButtons += `<div class="class-ask__butons" onclick="classClick(this)" classData="all">Всі</div>`;
    document.getElementById('class-ask__content').innerHTML = '';
    document.getElementById('class-ask__content').innerHTML = classListButtons;
}


// В этой функции он считывает номер класа и отправяет запрос на принт именно этого класа, в случае если все то отправляет запрос на принт всех

function classClick(el) {

    console.log(el.getAttribute('classData'));
    document.getElementById('main').innerHTML = '';

    startTimetablePrint();

    if (el.getAttribute('classData') == 'all') {
        for (let className in obj) {
            printClassTimetable(className);
        }
    } else {
        printClassTimetable(el.getAttribute('classData'));
    }
    endTimetablePrint();

    document.getElementById('main').innerHTML = classTimetable;
}

// Принт начала таблицы

function startTimetablePrint() {
    classTimetable += `<div class="timetable">
    <div class="timetable__wrapper">
        <div class="timetable__container">
            <div class="timetable__title">Розклад</div>`
}


// Закрытие тегов с принта начала таблицы

function endTimetablePrint() {
    classTimetable += ` </div>
                    </div>
                </div>`
}



function printClassTimetable(classData) {
    classTimetable += `<div class="timetable__class-name">${classData.toLowerCase()}</div>`

    for (let day in obj[classData]) {
        classTimetable += `
        <div class="timetable__day day">
        <div class="day__title">
            <h2>${day}</h2>
        </div>
        <div class="day__content">
            <div class="day__content-title">
                <div class="day__content-item day__content-item--number-invisible"></div>
                <div class="day__content-item day__content-item--title">Предмет</div>
                <div class="day__content-item day__content-item--title">Вчитель</div>
                <div class="day__content-item day__content-item--title">Посилання на ефір</div>
                <div class="day__content-item day__content-item--title">Роз'яснення вчителя</div>
                <div class="day__content-item day__content-item--title">посилання на д\з</div>
            </div>`

        for (let lesson in obj[classData][day]) {
            classTimetable += `<div class="day__content-lessons">
                <div class="day__content-item day__content-item--number">${lesson}</div>`
            for (let lessoninfo in obj[classData][day][lesson].lesson) {
                classTimetable += `
                    <div class="day__content-lessons-info">
                        <div class="day__content-item day__content-item--lesson-name">${obj[classData][day][lesson].lesson[lessoninfo]}</div>
                        <div class="day__content-item">${hrefCheck(obj[classData][day][lesson].teacherName[lessoninfo])}</div>
                        <div class="day__content-item">
                        ${hrefCheck(obj[classData][day][lesson].efir[lessoninfo])} 
                        </div>
                        <div class="day__content-item">${hrefCheck(obj[classData][day][lesson].expl[lessoninfo])}</div>
                        <div class="day__content-item">${hrefCheck(obj[classData][day][lesson].DZ[lessoninfo])}</div>
                    </div>
                    `
            }

            classTimetable += `</div>`
        }
        classTimetable += `</div></div>`
    }



}






(function() {
    var app = "https://script.google.com/macros/s/AKfycbw7ToESp3irLLMSEX7sGE-IqdC7qWmsOKJDr6bjGrTzcd1wgEXy/exec",
        output = {},
        xhr = new XMLHttpRequest();
    xhr.open('GET', app);
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status == 200) {
            try {
                var output = JSON.parse(xhr.response);
            } catch (e) {}
        }
        obj = output;
        classRead();
    }
    xhr.send()
})()
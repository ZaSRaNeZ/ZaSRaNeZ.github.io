var classTimetable = '';
var timetableDiv = document.createElement('div');

function timetableGenerator(obj) {

    for (let className in obj) {

        classTimetable += `
        <div class="timetable">
            <div class="timetable__wrapper">
                <div class="timetable__clas-name">${className}</div>
                <div class="timetable__container">`

        for (let day in obj[className]) {
            classTimetable += `
                    <div class="timetable__day day">
                                <div class="day__title">${day}</div>
                                <div class="day__content">
                                    <ul class="day__list">`
            for (let lesson in obj[className][day]) {
                classTimetable += `<li class="day__list-item">
                <div class="day__lesson-number">${lesson}</div>
                <div class="day__lesson-info">`;
                for (let lessoninfo in obj[className][day][lesson].lesson) {
                    classTimetable += `<div class="day__lesson-info-block">
                    <div class="day__lesson-info-item">${obj[className][day][lesson].lesson[lessoninfo]}</div>
                    <div class="day__lesson-info-item">${obj[className][day][lesson].teacherName[lessoninfo]}</div>
                    <div class="day__lesson-info-item">${obj[className][day][lesson].efir[lessoninfo]}</div>
                    <div class="day__lesson-info-item">${obj[className][day][lesson].expl[lessoninfo]}</div>
                    <div class="day__lesson-info-item">${obj[className][day][lesson].DZ[lessoninfo]}</div>
                    </div>`
                }
                classTimetable += `    </div>
            </li>`
            }
            classTimetable += `</ul>
                                </div>
                            </div>
                    `
        }
        classTimetable += `
                </div>
            </div>
        </div>`
    }

    timetableDiv.innerHTML += classTimetable;
    document.getElementById('main').append(timetableDiv);




}

(function() {
    var app = "https://script.google.com/macros/s/AKfycbx9mC81n4B4OVCOROQMkbCHvOHZqccpBGeIdxyhmhO5bDtt9j8/exec",
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
        timetableGenerator(output);
    }
    xhr.send()
})()
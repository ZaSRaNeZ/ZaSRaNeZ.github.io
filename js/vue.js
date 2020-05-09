obj = {};


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
        document.getElementById('header__back').setAttribute('onclick', 'back()');
    }
    xhr.send()
})()

new Vue({
    el: '#app',
    data: obj
});
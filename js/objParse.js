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
        console.log(output)
    }
    xhr.send()
})()
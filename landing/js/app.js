
window.onload = function () {

    (function () {
        var ibgList = document.querySelectorAll('.ibg');
        for (let item of ibgList) {
            let innerImg = item.querySelector('img');
            innerImg
            item.style = `background-image:url(${innerImg.src})`;
            innerImg.style = 'display:none';
        }
    })()
}


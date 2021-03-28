function makeGETRequest(url, callback) {
    let xhr;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.responseText+'\n'+xhr.responseXML);
            callback(xhr.responseText);
        }
    }

    xhr.open('GET', url, true);
    xhr.send();
}

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

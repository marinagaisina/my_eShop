function makeGETRequest(url, callback) {
    let xhr;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // xhr.onload
    // xhr.status == 200 (successful), 404 (not found), 500 (server error)
    console.log(xhr.readyState);
    xhr.onreadystatechange = function () {
        console.log('ready state: ' + xhr.readyState);
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText+'\n'+xhr.responseXML+'\n'+xhr.status);
            callback(xhr.responseText);
        } else {
            callback(JSON.stringify([DEFAULT_PRODUCT]));
        }
    }

    xhr.open('GET', url, true); //true - is a default value, not necessarily to type "true"
    // xhr.timeout = 1500;
    // xhr settings (headers, etc.)
    xhr.send();
}
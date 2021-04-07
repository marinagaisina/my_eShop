function makeGETRequest(method, url) {
    return new Promise((resolve, reject) => {
        let xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        // xhr.onload
        // xhr.status == 200 (successful), 404 (not found), 500 (server error)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    //alert(xhr.responseText);
                    console.log(xhr.responseText+'\n'+xhr.responseXML+'\n'+xhr.status);
                    //const goods = JSON.parse(xhr.responseText); - передаем в then и там парсим
                    resolve(xhr.responseText);
                } else {
                    reject('Error with status code: ', xhr.status);
                }
            }
        }

        xhr.open(method, url); //the 3rd parameter: true - is a default value, not necessarily to type "true"
        // xhr.timeout = 1500;
        // xhr settings (headers, etc.)
        xhr.send();
    })

}

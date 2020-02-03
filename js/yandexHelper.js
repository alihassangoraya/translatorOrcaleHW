makeYandexAPIReuest = () => {
    let body = `key=${yandexAPIKey}&text=${state.sourceText}&lang=${state.targetLang}`;

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body,
        redirect: 'follow'
    };

    makeAPIRequest(yandexTranlationAPI, requestOptions);
}

handleYandexResponse = (data) => {
    if (data.error) {
        getElement("on-message").innerHTML = data.error.message;
    } else {
        if (data.code == 200) {
            const translation = {
                source_lang: data.lang.split("-")[0],
                target_lang: data.lang.split("-")[1],
                target_text: data.text[0],
            }

            saveSearchResult(translation);
        } else {
            getElement("on-message").innerHTML = data.error.message;
        }
    }
}
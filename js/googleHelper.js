makeGoogleAPIReuest = () => {
    let body = {
        "q": state.sourceText,
        "target": state.targetLang
    }

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify(body);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    makeAPIRequest(googleTranlationAPI, requestOptions);
}

handleGoogleResponse = (data) => {
    if (data.error) {
        getElement("on-message").innerHTML = data.error.message;
    } else {
        data = data.data;

        const translation = {
            source_lang: data.translations[0].detectedSourceLanguage,
            target_lang: state.targetLang,
            target_text: data.translations[0].translatedText,
        }

        saveSearchResult(translation);
    }
}
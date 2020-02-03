
let state = {
    engine: engines.google,
    sourceText: "",
    sourceLang: "",
    targetLang: ""
};

makeAPIRequest = (api, requestOptions) => {
    getElement("submit-button").disabled = true;

    fetch(api, requestOptions)
        .then(response => response.text())
        .then(result => {
            getElement("submit-button").disabled = false;

            console.log(result);
            let data = JSON.parse(result);

            switch (state.engine) {
                case engines.yandex: 
                    handleYandexResponse(data);
                    break;
                default:
                    handleGoogleResponse(data);
            }
        })
        .catch(error => {
            console.log('error', error);
            getElement("on-message").innerHTML = error.message;
        });
}

// event handler for form submit
translateText = (e) => {
    e.preventDefault();
    getElement("on-message").innerHTML = "";

    switch (state.engine) {
        case engines.yandex:
            makeYandexAPIReuest();
            break;
        case engines.apertium:
            getElement("on-message").innerHTML = "Its coming soon, please use Google or Yandex for now ;-)";
            break;
        case engines.microsoft:
            getElement("on-message").innerHTML = "Its coming soon, please use Google or Yandex for now ;-)";
            break;
        default:
            makeGoogleAPIReuest();
    }
}


// handling all inputs change here
onChange = (e) => {
    state[e.name] = e.value;
}

// update search Result
saveSearchResult = translation => {
    translation.source_text = state.sourceText;
    translation.translation_engine = state.engine;
    localStorage.setItem("translation", JSON.stringify(translation));

    setHistoryResult(translation);
}

// Display search result from local storage
setHistoryResult = savedResult => {
    getElement("source-lang").innerHTML = savedResult.source_lang;
    getElement("target-lang").innerHTML = savedResult.target_lang;
    getElement("source-text").innerHTML = savedResult.source_text;
    getElement("target-text").innerHTML = savedResult.target_text;
    getElement("translation-engine").innerHTML = capitalize(savedResult.translation_engine);

    let el = getElement("last-search-result")
    addClass(el, "show");
    removeClass(el, "hide");
}

getLastSearchResult = () => {
    if (localStorage.getItem("translation")) {
        let savedResult = JSON.parse(localStorage.getItem("translation"));
        setHistoryResult(savedResult);
    } else {
        let el = getElement("last-search-result")
        addClass(el, "hide");
        removeClass(el, "show");
        getElement("on-message").innerHTML = "Sorry! No translation history found for any translation engine."    
    }
}

// When the DOM is ready....
document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#translation-form").addEventListener("submit", translateText);

    getElement("clear-history").addEventListener("click", (e) => {
        e.preventDefault();

        localStorage.removeItem("translation");
        getLastSearchResult();
    });

    if (typeof(Storage) !== "undefined") {
        getLastSearchResult();
    } else {
        getElement("on-message").innerHTML = "Sorry! Your browser doesn't support Web Storage. Please try different browser."
    }
}, false);
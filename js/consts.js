const engines = {
    google: "google",
    microsoft: "microsoft",
    apertium: "apertium",
    yandex: "yandex"
}
const googleAPIKey = "AIzaSyAIZ2HdG9tX5WLbfw6Jw5XAIS_9Lqg3Uoc";
const googleTranlationAPI = `https://translation.googleapis.com/language/translate/v2?key=${googleAPIKey}`;
const googleTranlationDetectAPI = `https://translation.googleapis.com/language/translate/v2/detect?key=${googleAPIKey}`;


const yandexAPIKey = "trnsl.1.1.20200203T011815Z.670b9a380ae4b8d9.028bedd819b36e4c726c422a897249e76a458363";
const yandexTranlationAPI = "https://translate.yandex.net/api/v1.5/tr.json/translate";
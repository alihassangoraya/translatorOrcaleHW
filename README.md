# translator using Google and Yandex API

You can simply download and run it in localhost. Its easier in MS code. You can open index.html and right click inside the code and select 'Open with Live Server'.

First of all I wasn't sure that I should write the code using jQuery, Node or TypeScript. 

So I decided to write in Vanilla JS by using some core as well as ES6+ features so that I can make sure that you understand what I am writing and what I am capable off.

I haven't used any kind of library for CSS or JS.

For the local storage I have used window.localStorage object by using its built in methods. I can also use sessionStorage, the only difference is when browser is closed then sessionStorage is lost.

For Source and Target languages I have hard coded values in dropdowns but we can also fetch from API provided by Google and Yandex or any other provider. If we have to load languages from APIs then for Source Language we can call API as soon as the page/DOM is loaded and for target language we can load whenever the value of source language changes.

Apart from that, I have tried to make it very generic so that if we have to add features or support for more APIs then we can add/modify easily.

For the source language, I have not used the API which takes the source language as an input, instead I have used the API which detects the source language automatically. But if required I can use that one also.
I didn't use that because I think you just want to see the way how I consume the APIs.
APIs can also be consumed using plain/vanila JS feature using XMLHttpRequest object but I prefered to use the modern one with fetch method which also uses the promises.

I didn't make any check for the limit of length of source text but API should response for that if limit exceeds and I am displaying the errors.
If you want to add or modify anything in it please let me know, I would love to do it. 

Lastly, I also solved Fibonacci series question. 

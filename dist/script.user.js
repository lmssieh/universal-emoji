var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// ==UserScript==
// @name        Universal Emoji & Kaomoji
// @namespace   https://github.com/lmssieh/universal-emoji
// @match       *://*/*
// @grant       none
// @version     0.1
// @author      lmssieh
// @description 9/26/2022, 10:45:49 PM
// ==/UserScript==
(function () {
    var emojis = {};
    var kaomojis = {};
    var urls = [
        "https://raw.githubusercontent.com/lmssieh/universal-emoji/main/assets/emojis.json",
        "https://raw.githubusercontent.com/lmssieh/universal-emoji/main/assets/kaomojis.json",
    ];
    var promiseUrls = urls.map(function (url) { return fetch(url); });
    Promise.all(promiseUrls)
        .then(function (responses) { return Promise.all(responses.map(function (r) { return r.json(); })); })
        .then(function (data) {
        console.log(data);
        emojis = __assign({}, data[0]);
        kaomojis = data[1];
        console.log(emojis, kaomojis);
    })
        .then(main);
    function main() {
        function replaceText(str) {
            var newStr = str;
            // emoji regex, find anything inside colons, ex: :rooster:
            var regex = /(\:[\w\s]+\:)/g;
            var m;
            while ((m = regex.exec(str)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                // The result can be accessed through the `m`-variable.
                m.forEach(function (match, groupIndex) {
                    var formateEmojiName = match.substr(1, match.length - 2);
                    console.log(formateEmojiName, emojis[formateEmojiName]);
                    if (!emojis[formateEmojiName])
                        return;
                    var emoji = emojis[formateEmojiName].emoji;
                    newStr = newStr.replace(match, "".concat(emoji));
                });
            }
            // kaomoji regex, find a word after /slash, ex: /dab
            var kregex = /(\/[^ \/]+)/g;
            var mk;
            while ((mk = kregex.exec(str)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (mk.index === kregex.lastIndex) {
                    kregex.lastIndex++;
                }
                // The result can be accessed through the `m`-variable.
                mk.forEach(function (match, groupIndex) {
                    var formatedKaomoji = match
                        .substr(1, match.length - 1)
                        .split("_")
                        .join(" ");
                    var kaomoji = kaomojis[formatedKaomoji];
                    if (!kaomoji)
                        return;
                    newStr = newStr.replace(match, "".concat(kaomoji));
                });
            }
            return newStr;
        }
        var debounce;
        document.addEventListener("keyup", function (event) {
            var target = event.target;
            if (target.tagName === "TEXTAREA" ||
                (target.tagName === "INPUT" && target.type === "text")) {
                clearTimeout(debounce);
                debounce = setTimeout(function () {
                    target.value = replaceText(target.value);
                }, 100);
            }
        });
    }
})();

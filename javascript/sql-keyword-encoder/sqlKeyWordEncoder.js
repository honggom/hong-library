const sqlKeyWords = ["insert", "select", "update", "delete"];

function encode(url) {
    for (const keyWord of sqlKeyWords) {
        while (true) {
            const keyWordStartOf = url.search(new RegExp(keyWord, "i"));
            if (keyWordStartOf != - 1) { // 해당 문자열에 키워드가 있는 경우
                const keyWordLength = keyWord.length;
                url = replaceToBase64(url, keyWordLength, keyWordStartOf);
            } else {
                break
            }
        }
    }
    return url;
}

const prefix = "(==>";
const suffix = "<==)";

function replaceToBase64(url, keyWordLength, keyWordStartOf) {
    return url.substr(0, keyWordStartOf) + prefix + btoa(url.substr(keyWordStartOf, keyWordLength)) + suffix + url.substr(keyWordStartOf + keyWordLength);
}

function decode(url) {
    while(url.includes(prefix) || url.includes(suffix)) {
        const prefixEnd = url.indexOf(prefix) + prefix.length;
        const suffixStart = url.indexOf(suffix);
        const encodeKeyWord = url.substr(prefixEnd, suffixStart - prefixEnd) 

        url = url.replace(encodeKeyWord, atob(encodeKeyWord));
        url = url.replace(prefix, "");
        url = url.replace(suffix, "");
    }
    return url;
}

export default { encode, decode }
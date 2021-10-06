const sqlKeyWords = ["insert", "select", "update", "delete"];

// 문자열에 SQL 키워드가 있으면 해당 키워드를 `prefix + base64(키워드) + suffix` 형태로 인코딩한다.
function encode(str) {
    for (const keyWord of sqlKeyWords) {
        while (true) {
            const keyWordStart = str.search(new RegExp(keyWord, "i"));
            if (keyWordStart != - 1) { // 해당 문자열에 키워드가 있는 경우
                const keyWordLength = keyWord.length;
                str = replaceToBase64(str, keyWordLength, keyWordStart);
            } else {
                break
            }
        }
    }
    return str;
}

const prefix = "(==>";
const suffix = "<==)";

function replaceToBase64(str, keyWordLength, keyWordStart) {
    return str.substr(0, keyWordStart) + prefix + btoa(str.substr(keyWordStart, keyWordLength)) + suffix + str.substr(keyWordStart + keyWordLength);
}

// 위 encode() 함수로 인코딩된 문자열을 디코딩한다.
function decode(str) {
    while(str.includes(prefix) || str.includes(suffix)) {
        const prefixEnd = str.indexOf(prefix) + prefix.length;
        const suffixStart = str.indexOf(suffix);
        const encodeKeyWord = str.substr(prefixEnd, suffixStart - prefixEnd)

        str = str.replace(encodeKeyWord, atob(encodeKeyWord));
        str = str.replace(prefix, "");
        str = str.replace(suffix, "");
    }
    return str;
}

export default { encode, decode }
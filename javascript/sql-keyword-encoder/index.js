import SqlKeyWordEncoder from "./parser.js";

var givenStr = "naver.com/delete/aaaa/Insert/gggg/Update/update/SelEct";

var encodedUrl = SqlKeyWordEncoder.encode(givenStr);
var decodedUrl = SqlKeyWordEncoder.decode(encodedUrl);

console.log(encodedUrl);
console.log(decodedUrl);

if (decodedUrl === givenStr) {
    console.log("정상적으로 디코딩됨");
}

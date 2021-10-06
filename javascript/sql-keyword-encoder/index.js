import UrlEncoder from "./parser.js";

var givenStr = "naver.com/delete/aaaa/Insert/gggg/Update/update/SelEct";

var encodedUrl = UrlEncoder.encode(givenStr);
var decodedUrl = UrlEncoder.decode(encodedUrl);

console.log(encodedUrl);
console.log(decodedUrl);

if (decodedUrl === givenStr) {
    console.log("정상적으로 디코딩됨");
}

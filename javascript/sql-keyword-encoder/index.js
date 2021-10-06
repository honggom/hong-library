import UrlEncoder from "./sqlKeyWordEncoder.js";

var givenStr = "naver.com/delete/aaaa/Insert/gggg/Update/update/SelEct";

var encodedUrl = UrlEncoder.encode(givenStr);
var decodedUrl = UrlEncoder.decode(encodedUrl);

console.log(encodedUrl);

if (decodedUrl === givenStr) {
    console.log("정상적으로 디코딩됨");
}

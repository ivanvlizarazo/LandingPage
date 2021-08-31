import Cookies from "js-cookie";

export default function getCookieInfo(key) {
  var userInfo = Cookies.get("token");

  if (typeof userInfo !== "undefined") {
    var obj = JSON.parse(userInfo.substr(2, userInfo.length - 1));
    return obj[key];
  }
  return null;
}

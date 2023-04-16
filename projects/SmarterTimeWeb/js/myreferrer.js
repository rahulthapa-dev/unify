function getDomain(url) {
  if (url) {
    var match = /(?:https?:\/\/)?(?:\w+:\/)?[^:?#\/\s]*?([^.\s]+\.(?:[a-z]{2,}|co\.uk|org\.uk|ac\.uk|org\.au|com\.au))(?:[:?#\/]|$)/gi
      .exec(url);
    return match ? match[1] : null;
  } else
    return null;
}

function getReferrer() {
  var field = "referrer";
  if (sessionStorage.getItem(field)) {
    var refer = sessionStorage.getItem(field);
    return refer;
  } else if (document.referrer != null) {
    var refer = getDomain(document.referrer);
    sessionStorage.setItem(field, refer);
    return refer;
  } else {
    return null;
  }
}

function getPlaystoreLink() {
  var referrer = getReferrer();
  if (referrer == null || referrer === "" || referrer === "null" || referrer === "smartertime") {
    return "https://play.google.com/store/apps/details?id=com.smartertime&referrer=utm_source%3Dstwebsite";
  } else {
    return "https://play.google.com/store/apps/details?id=com.smartertime&referrer=utm_source%3Dstwebsite%26utm_medium%3D" + referrer;
  }
}

function goToPlaystore() {
  window.open(getPlaystoreLink());
}

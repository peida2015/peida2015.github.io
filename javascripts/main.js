"use strict";

(function () {
  console.log("main.js");
  window.addEventListener("scroll", function (e) {
    // if (window.scrollY > 400) debugger;
    if (window.scrollY > 400 && window.scrollY < 600) {
      window.scrollY < 500 ? document.querySelector('a[name=d3pg]').scrollIntoView({behavior:"instant"}) : document.querySelector('a[name=index]').scrollIntoView({behavior:"instant"});
    } else if (window.scrollY > 1000 && window.scrollY < 1200) {
      window.scrollY < 1100 ? document.querySelector('a[name=scitwits]').scrollIntoView({behavior:"instant"}) : document.querySelector('a[name=d3pg]').scrollIntoView({behavior:"instant"})
    } else if (window.scrollY > 1600 && window.scrollY < 1800) {
      window.scrollY < 1700 ? document.querySelector('a[name=pong]').scrollIntoView({behavior:"instant"}) : document.querySelector('a[name=scitwits]').scrollIntoView({behavior:"instant"})
    } else if (window.scrollY > 2200 && window.scrollY < 2400) {
      window.scrollY < 2300 ? document.querySelector('a[name=bio]').scrollIntoView({behavior:"instant"}) : document.querySelector('a[name=pong]').scrollIntoView({behavior:"instant"})
    }
  });
})();

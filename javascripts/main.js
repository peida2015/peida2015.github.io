"use strict";

(function () {
  console.log("main.js");
  const buttonLabels = ["D3 Playground", "SciTwits", "Pong", "About Me"];
  function highlightButtons(buttonNum) {
    d3.selectAll('.nav-buttons').select(function () {
      if (this.textContent === buttonLabels[buttonNum]) {
        return this.classList.add("highlight");
      } else {
        return this.classList.remove('highlight')
      };
    });
  };

  window.addEventListener("scroll", function (e) {

    if (window.scrollY > 400 && window.scrollY < 600) {
      if (window.scrollY < 500) {
        document.querySelector('a[name=d3pg]').scrollIntoView({behavior:"instant"});
        highlightButtons(0);
      } else {
        document.querySelector('a[name=index]').scrollIntoView({behavior:"instant"});
        d3.selectAll('.nav-buttons').classed('highlight', false);
      }
    } else if (window.scrollY > 1000 && window.scrollY < 1200) {
      if (window.scrollY < 1100) {
         document.querySelector('a[name=scitwits]').scrollIntoView({behavior:"instant"});
         highlightButtons(1);
      } else {
         document.querySelector('a[name=d3pg]').scrollIntoView({behavior:"instant"});
         highlightButtons(0);
      };
    } else if (window.scrollY > 1600 && window.scrollY < 1800) {
      if (window.scrollY < 1700) {
         document.querySelector('a[name=pong]').scrollIntoView({behavior:"instant"});
         highlightButtons(2)
       } else {
         document.querySelector('a[name=scitwits]').scrollIntoView({behavior:"instant"});
         highlightButtons(1);
       }
    } else if (window.scrollY > 2300 && window.scrollY < 2500) {
      if (window.scrollY < 2400) {
         document.querySelector('a[name=bio]').scrollIntoView({behavior:"instant"});
         highlightButtons(3);
       } else {
         document.querySelector('a[name=pong]').scrollIntoView({behavior:"instant"});
         highlightButtons(2);
       }
    }
  });
})();

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

  window.addEventListener("wheel", function (e) {

    var index = document.querySelector('a[name=index]');
    var d3pg = document.querySelector('a[name=d3pg]');
    var scitwits = document.querySelector('a[name=scitwits]');
    var pong = document.querySelector('a[name=pong]');
    var bio = document.querySelector('a[name=bio]');

    // debugger
    var indexPos = index.getBoundingClientRect().top;
    var d3pgPos = d3pg.getBoundingClientRect().top;
    var scitwitsPos = scitwits.getBoundingClientRect().top;
    var pongPos = pong.getBoundingClientRect().top;
    var bioPos = bio.getBoundingClientRect().top;

// debugger
    if (d3pgPos > 200 && d3pgPos < 300) {
      if (d3pgPos < 300 && e.deltaY > 0) {
        d3pg.scrollIntoView({behavior:"instant"});
        highlightButtons(0);
      } else if (d3pgPos > 200 && e.deltaY < 0) {
        document.querySelector('a[name=index]').scrollIntoView({behavior:"instant"});
        d3.selectAll('.nav-buttons').classed('highlight', false);
      }
    } else if (scitwitsPos > 200 && scitwitsPos < 300) {
      if (scitwitsPos < 300 && e.deltaY > 0) {
         scitwits.scrollIntoView({behavior:"instant"});
         highlightButtons(1);
      } else if (scitwitsPos > 200 && e.deltaY < 0) {
         d3pg.scrollIntoView({behavior:"instant"});
         highlightButtons(0);
      };
    } else if (pongPos > 200 && pongPos < 300) {
      if (pongPos < 300 && e.deltaY > 0) {
         pong.scrollIntoView({behavior:"instant"});
         highlightButtons(2)
       } else if (pongPos > 200 && e.deltaY < 0) {
         scitwits.scrollIntoView({behavior:"instant"});
         highlightButtons(1);
       }
    } else if (bioPos > 200 && bioPos < 300) {
      if (bioPos < 300 && e.deltaY > 0) {
         bio.scrollIntoView({behavior:"instant"});
         highlightButtons(3);
       } else if (bioPos > 200 && e.deltaY < 0) {
         pong.scrollIntoView({behavior:"instant"});
         highlightButtons(2);
       }
    }
  });
})();

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

  var slowlyScrollTo = function (pos, dur=500) {
    d3.transition().duration(dur)
      .tween('scroll', function () {
        var itp = d3.interpolateNumber(window.pageXOffset, pos);
        return function (t) { window.scrollTo(itp(t), 0) }
      })
  }

  window.onload = function () {
    if (document.readyState == "complete") {
      var navButtons = d3.selectAll('.nav-links div button');

      navButtons.on('click', function(e) {
        navButtons.classed('highlight', false);

        // un-highlight all and highlight the button clicked;
        this.classList.add("highlight");
        let leftPos = d3.select(`a[name=${this.name}]`).property('offsetLeft');
        slowlyScrollTo(leftPos)
      })
    }
  }


  // window.addEventListener("wheel", function (e) {
  //   var indexPos = document.querySelector('a[name=index]').getBoundingClientRect().left;
  //
  //   var d3pgPos = document.querySelector('a[name=d3pg]').getBoundingClientRect().left;
  //
  //   var scitwitsPos = document.querySelector('a[name=scitwits]').getBoundingClientRect().left;
  //
  //   var pongPos = document.querySelector('a[name=pong]').getBoundingClientRect().left;
  //
  //   var bioPos = document.querySelector('a[name=bio]').getBoundingClientRect().left;
  //
  //
  //   if (d3pgPos > 200 && d3pgPos < 400) {
  //     if (d3pgPos < 400 && e.deltaY > 0) {
  //       slowlyScrollTo(d3pgPos)
  //       highlightButtons(0);
  //     } else if (d3pgPos > 200 && e.deltaY < 0) {
  //       slowlyScrollTo(indexPos)
  //       d3.selectAll('.nav-buttons').classed('highlight', false);
  //     }
  //   } else if (scitwitsPos > 200 && scitwitsPos < 400) {
  //     if (scitwitsPos < 400 && e.deltaY > 0) {
  //        slowlyScrollTo(scitwitsPos);
  //        highlightButtons(1);
  //     } else if (scitwitsPos > 200 && e.deltaY < 0) {
  //        slowlyScrollTo(d3pgPos);
  //        highlightButtons(0);
  //     };
  //   } else if (pongPos > 200 && pongPos < 400) {
  //     if (pongPos < 400 && e.deltaY > 0) {
  //        slowlyScrollTo(pongPos);
  //        highlightButtons(2)
  //      } else if (pongPos > 200 && e.deltaY < 0) {
  //        slowlyScrollTo(scitwitsPos);
  //        highlightButtons(1);
  //      }
  //   } else if (bioPos > 200 && bioPos < 400) {
  //     if (bioPos < 300 && e.deltaY > 0) {
  //        slowlyScrollTo(bioPos);
  //        highlightButtons(3);
  //      } else if (bioPos > 200 && e.deltaY < 0) {
  //        slowlyScrollTo(pongPos);
  //        highlightButtons(2);
  //      }
  //   }
  // });
})();

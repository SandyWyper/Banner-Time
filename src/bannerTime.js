(function() {
  "use:strict";
  // build stylesheet
  let styleBanner = document.createElement("style");
  styleBanner.innerHTML =
    "#banner-time{user-select: none;overflow:hidden;}#banner-time a{color: inherit;text-decoration: none;}#banner-time #desktop-banner-slides {display: none !important;}#banner-time #mobile-banner-slides {display: block !important;}@media only screen and (min-width: 768px) {#banner-time #desktop-banner-slides {display: block !important;}#banner-time #mobile-banner-slides{display: none !important;}}";
  // build banner element
  let bannerDiv = document.createElement("div");
  bannerDiv.id = "banner-time";
  // insert elements into the dom
  document.head.appendChild(styleBanner);
  document.body.prepend(bannerDiv);

  this.Banner = function() {
    // option defaults
    let defaults = {
      startTime: [2019],
      endTime: [2080],
      timeZone: 0,
      bannerLink: "",
      transition: {
        type: "fade",
        displayDuration: 5000,
        interval: 800,
        speed: 1000
      },
      bannerText: {
        desktop: ["STOP!!", "BANNER TIME!!"],
        mobile: ["STOP!!", "BANNER TIME!!"]
      },
      CSS: {
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        background: "orangeRed",
        color: "white",
        "white-space": "nowrap",
        height: "43px",
        "line-height": "30px",
        width: "100%",
        "font-family": "inherit",
        "font-size": "30px",
        "z-index": "25"
      }
    };

    // Ensure that the banner that is run is the correct one:
    // Eg. Most recent start time, and end time has not passed
    let relevantBannerIndex = getRelevantBannerIndex(arguments);
    // Create options by extending defaults with the passed in arugments
    if (
      arguments[relevantBannerIndex] &&
      typeof arguments[relevantBannerIndex] === "object"
    ) {
      this.options = extendDefaults(defaults, arguments[relevantBannerIndex]);
    } else {
      this.options = defaults;
    }

    // JQuery method to extend defaults with user options
    function extendDefaults(defaults, userOptions) {
      $.extend(true, defaults, userOptions);

      return defaults;
    }

    let timeWindow = checkTime(
      this.options.startTime,
      this.options.endTime,
      this.options.timeZone
    );

    if (timeWindow) {
      initBanner(this.options);
    } else {
      console.log("not showing promotion banner");
    }
  };
})();

function checkTime(starts, ends, timeZone) {
  //take date input from settings.
  //check for timezone option and adjust start/finsh dates to be UTC.
  const adjustTime = (time, timezone) => {
    let newTime = [];
    while (time.length < 4) {
      if (time.length === 2) {
        time.push(1);
      } else {
        time.push(0);
      }
    }

    time.forEach(function(int, index) {
      if (index === 3) {
        newTime.push(int + timezone);
      } else {
        newTime.push(int);
      }
    });

    return newTime;
  };

  let showBanner = new Date(Date.UTC(...adjustTime(starts, timeZone)));
  let hideBanner = new Date(Date.UTC(...adjustTime(ends, timeZone)));
  showBanner = showBanner.getTime();
  hideBanner = hideBanner.getTime();
  //when web user's page loads check banner start UTC time compared to current UTC and display banner or not.
  const timeNow = Date.now();
  if (timeNow > showBanner && timeNow < hideBanner) {
    return true;
  } else {
    return false;
  }
}

function getRelevantBannerIndex() {
  let mostRecentStartTime = 0;
  let relevantBannerIndex = 0;
  const timeNow = Date.now();

  Array.from(...arguments).forEach(function(arg, index) {
    let startTimeGiven = arg.startTime || [2019];
    startTimeGiven = new Date(Date.UTC(...startTimeGiven));
    startTimeGiven = startTimeGiven.getTime();
    let endTimeGiven = arg.endTime || [2080];
    endTimeGiven = new Date(Date.UTC(...endTimeGiven));
    endTimeGiven = endTimeGiven.getTime();

    if (mostRecentStartTime < startTimeGiven && timeNow < endTimeGiven) {
      mostRecentStartTime = startTimeGiven;
      relevantBannerIndex = index;
    }
  });

  return relevantBannerIndex;
}

function initBanner(options) {
  // Fill DOM element
  let $banner = $("#banner-time");

  let bannerHTML = buildBannerElements(
    options.bannerText.desktop,
    options.bannerText.mobile,
    options.bannerLink
  );

  $banner.append(bannerHTML);
  $banner.css(options.CSS);

  transition(options.transition, options.bannerText.desktop.length, "desktop");
  transition(options.transition, options.bannerText.mobile.length, "mobile");
}

function buildBannerElements(deskText, mobText, link) {
  let bannerConstructed = "";

  if (deskText) {
    bannerConstructed += '<div id="desktop-banner-slides">';

    deskText.forEach(function(text, index) {
      bannerConstructed += `<div class="js-slide-${index}" 
        ${index > 0 ? 'style="display:none"' : 'style="display:block"'}>`;
      if (link) {
        bannerConstructed += `<a href="${link}"><p>${text}</p></a></div>`;
      } else {
        bannerConstructed += `<p>${text}</p></div>`;
      }
    });

    bannerConstructed += `</div>`;
  }

  if (mobText) {
    bannerConstructed += `<div id="mobile-banner-slides">`;

    mobText.forEach(function(text, index) {
      bannerConstructed += `<div class="js-slide-${index}" ${
        index > 0 ? 'style="display:none"' : 'style="display:block"'
      }>`;
      if (link) {
        bannerConstructed += `<a href="${link}"><p>${text}</p></a></div>`;
      } else {
        bannerConstructed += `<p>${text}</p></div>`;
      }
    });

    bannerConstructed += `</div>`;
  }

  return bannerConstructed;
}

function transition(transition, numberOfSlides, screen) {
  if (numberOfSlides > 1) {
    switch (transition.type) {
      case "fade":
        fade(transition, numberOfSlides, screen);
        break;
      case "slide":
        slide(transition, numberOfSlides, screen);
      // *** more transition options to be added ***
    }
  }
}

function fade(transition, numberOfSlides, screen) {
  let count = 0;
  let $currentSlide;
  runTransition();

  function runTransition() {
    $currentSlide = $(`#${screen}-banner-slides .js-slide-${count}`);

    $currentSlide
      .delay(transition.interval)
      .fadeIn(transition.speed, function() {
        $currentSlide
          .delay(transition.displayDuration)
          .fadeOut(transition.speed, function() {
            count = count < numberOfSlides - 1 ? count + 1 : 0;
            runTransition();
          });
      });
  }
}

function slide(transition, numberOfSlides, screen) {
  let count = 0;
  let $currentSlide;
  $(`#${screen}-banner-slides`).css({
    position: "relative",
    width: "100%",
    height: "100%"
  });

  styleSlides(screen);

  runTransition();

  function runTransition() {
    $currentSlide = $(`#${screen}-banner-slides .js-slide-${count}`);
    $currentSlide
      .animate(
        {
          left: $currentSlide.parent().width() / 2 - $currentSlide.width() / 2
        },
        transition.speed
      )
      .delay(transition.displayDuration)
      .animate({ left: "300%" }, transition.speed, function() {
        setTimeout(function() {
          $currentSlide.css({ left: "-200%" });
          count = count < numberOfSlides - 1 ? count + 1 : 0;
          $(this).stop();
          runTransition();
        }, transition.interval);
      });
  }
}

function styleSlides(screen) {
  $(`#${screen}-banner-slides > div`).css({
    position: "absolute",
    height: "100%",
    left: "-200%",
    display: "flex",
    "align-items": "center",
    "justify-content": "center"
  });
}

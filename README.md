# Banner Time

- Make destoptext the default - if no mobile text then just use the destop text.

<div>
<img src="https://sandywyper.github.io/Banner-Time/banner-time.jpg" style="max-width: 400px;width:100%">
</div>

**Version 1.0.0** - [Change log](CHANGELOG.md)

A simple sale baner that can be scheduled to show for a set time.

- [Example 1 - Fade](https://codepen.io/SandyWyper/full/yLLGzOx)
- [Example 2 - Slide](https://codepen.io/SandyWyper/full/qBBLaVg)

## Getting started

### Set-up

1. Download Banner-Time and put the '/dist/bannerTime.js' file in your site directory.
2. Reference this file from a script tag below where you include Jquery.

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="bannerTime.js"></script>
```

If you dont have JQuery in your project already, find it [here](https://jquery.com/).

3. Next you must initialise the banner. `const myBanner = new Banner()` This will create and insert the banner into your site using the default options. You should see the banner transition from 'Stop!!' to 'Banner Time!!'.

4. Insert your banner settings.

```
    const bannerSettings =  {
      startTime: [2019, 10, 9],
      endTime: [2020, 0, 1],
      CSS: {
        "border-bottom": "2px solid black",
        "background-color": "darkgrey",
        color: "white"
      },
      transition: {
        type: "slide",
        displayDuration: 5000,
        speed: 700,
        interval: 900
      }
    }
    const myBanner = new Banner(bannerSettings);
```

You can set up as many banners as you like, and the one with the most recent start time (and the 'endTime' has not yet expired) will display.

```
const firstBanner = {
  startTime: [2019,11,20],
   bannerText: {
        desktop: ["5 Days Until Xmas", "Shop now"],
        mobile: ["5 Days To Go!", "Xmas time!"]
      }
}
const secondBanner = {
  startTime: [2019,11,21],
   bannerText: {
        desktop: ["4 Days Until Xmas", "Shop now"],
        mobile: ["4 Days To Go!", "Xmas time!"]
      }
}
const thirdBanner = {
  startTime: [2019,11,22],
   bannerText: {
        desktop: ["3 Days Until Xmas", "Shop now"],
        mobile: ["3 Days To Go!", "Xmas time!"]
      }
}

const myXmasBanner = new Banner(firstBanner, secondBanner, thirdBanner);
```
5. If your shop isn't GTM then be sure to set your time zone in the settings `timeZone: -8`.  This will adjust any start and end times accordingly.

6. Remeber to set the text output for both desktop and mobile screens.
---

### Settings

| Option           | Type                | Default                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------- | ------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| startTime        | number array        | [2019]                                                            | [**Individual date and time component values.**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Individual_date_and_time_component_values "MDN Web Docs") Must be an array of numbers to represent the date and time. `[YYYY,MM,DD,hr,min]` (year, month, day, hour, minute, second, and millisecond) Any missing fields are given the lowest possible value (1 for the day and 0 for every other component. |
| endTime          | number array        | [2080]                                                            | The time the banner will finish displaying. See startTime for formatting.                                                                                                                                                                                                                                                                                                                                                                           |
| timeZone         | number              | 0                                                                 | Times are calculated in [UTC](http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC#description "MDN Web Docs"). Time zone of the shops(servers) location should be provided for corrrect start stop times. Number between -12 and 12.                                                                                                                                                                           |
| bannerLink       | string              |                                                                   | Enter the path of your desired link. Eg. `bannerLink: "/products/fidget-spinner"`                                                                                                                                                                                                                                                                                                                                                                   |
| **transition**   | object (nested..?)  | The default values of; **type, displayDuration, interval, speed** | A nested object with the keys and values for that transition. Declare the ones you need and the rest will remain default.                                                                                                                                                                                                                                                                                                                           |
| type             | string              | "fade"                                                            | The type of transition between each slide.                                                                                                                                                                                                                                                                                                                                                                                                          |
| display duration | number              | 5000                                                              | Time in milliseconds that each slide shows for before the next transition begins.                                                                                                                                                                                                                                                                                                                                                                   |
| interval         | number              | 800                                                               | Time in milliseconds between the slides transition out and in.                                                                                                                                                                                                                                                                                                                                                                                      |
| speed            | number              | 1000                                                              | Time in milliseconds of the transitions.                                                                                                                                                                                                                                                                                                                                                                                                            |
| **CSS**          | object (nested...?) | Any CSS can be added written as string key-value pairs; \*\*      | All the CSS you want attribute to each slide.                                                                                                                                                                                                                                                                                                                                                                                                       |
| any CSS property | string              |                                                                   |

---

#### Contributing

PLEASE review CONTRIBUTING.markdown prior to requesting a feature, filing a pull request or filing an issue.

---

#### Acknowledgements

This projected started out by following a modal window [tutorial](https://scotch.io/tutorials/building-your-own-javascript-modal-plugin) written by [Ken Wheeler](https://twitter.com/ken_wheeler). Then, in order to follow an example of an open source project, I have borrowed heavily from his [Slick Slider](https://github.com/kenwheeler/slick) repo. Big thanks to him and anyone else who would like to contribute.

## License and copyright

&copy; Alexander Wyper

Licensed under MIT [License](LICENSE).

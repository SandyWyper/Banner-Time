# Banner Time

**Version 1.0.0** - [Change log](CHANGELOG.md)

{ breif intro summary }
A simple sale baner that can be scheduled to show for a set time.

{ demos }

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="SandyWyper" data-slug-hash="qBBLaVg" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Banner Time - Slide">
  <span>See the Pen <a href="https://codepen.io/SandyWyper/pen/qBBLaVg">
  Banner Time - Slide</a> by Sandy Wyper (<a href="https://codepen.io/SandyWyper">@SandyWyper</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

{ Getting started }

---

### Set-up

1. Download {javscript file} and put it in your site directory.
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

---

#### Contributing

PLEASE review CONTRIBUTING.markdown prior to requesting a feature, filing a pull request or filing an issue.

```
some code
```

{ settings }

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

## License and copyright

&copy; Alexander Wyper

Licensed under MIT [License](LICENSE).

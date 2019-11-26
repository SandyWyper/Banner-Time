# Banner Time

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


#### Contributing

PLEASE review CONTRIBUTING.markdown prior to requesting a feature, filing a pull request or filing an issue.


```
some code
```
{ settings }


### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
startTime | number array | [2019] |  [**Individual date and time component values.**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Individual_date_and_time_component_values "MDN Web Docs")  Must be an array of numbers to represent the date and time.  `[YYYY,MM,DD,hr,min]` (year, month, day, hour, minute, second, and millisecond) Any missing fields are given the lowest possible value (1 for the day and 0 for every other component.
endTime | number array | [2080] | The time the banner will finish displaying.  See startTime for formatting.
timeZone | number | 0 | Times are calculated in [UTC](http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC#description "MDN Web Docs"). Time zone of the shops(servers) location should be provided for corrrect start stop times. Number between -12 and 12.
bannerLink | string |  | Enter the path of your desired link. Eg. `bannerLink: "/products/fidget-spinner"`
**transition** | object (nested..?) | The default values of; **type, displayDuration, interval, speed** | A nested object with the keys and values for that transition. Declare the ones you need and the rest will remain default.
type | string | "fade" | The type of transition between each slide.
display duration | number | 5000 | Time in milliseconds that each slide shows for before the next transition begins.
interval | number  | 800 | Time in milliseconds between the slides transition out and in.
speed | number | 1000 | Time in  milliseconds of the transitions.
**CSS** | object (nested...?) | Any CSS can be added written as string key-value pairs; ** | All the CSS you want attribute to each slide.
display | string |  'flex' | CSS3 easing
customPaging | function | n/a | Custom paging templates. See source for use example.
dots | boolean | false | Current slide indicator dots
dotsClass | string | 'slick-dots' | Class for slide indicator dots container
draggable | boolean | true | Enables desktop dragging
easing | string |  'linear' | animate() fallback easing
edgeFriction | integer | 0.15 | Resistance when swiping edges of non-infinite carousels
fade | boolean | false | Enables fade
focusOnSelect | boolean | false | Enable focus on selected element (click)
focusOnChange | boolean | false | Puts focus on slide after change
infinite | boolean | true | Infinite looping
initialSlide | integer | 0 | Slide to start on
lazyLoad | string | 'ondemand' | Accepts 'ondemand' or 'progressive' for lazy load technique. 'ondemand' will load the image as soon as you slide to it, 'progressive' loads one image after the other when the page loads.
mobileFirst | boolean | false | Responsive settings use mobile first calculation
nextArrow | string (html \| jQuery selector) \| object (DOM node \| jQuery object) | `<button type="button" class="slick-next">Next</button>` | Allows you to select a node or customize the HTML for the "Next" arrow.
pauseOnDotsHover | boolean | false | Pauses autoplay when a dot is hovered
pauseOnFocus | boolean | true | Pauses autoplay when slider is focussed
pauseOnHover | boolean | true | Pauses autoplay on hover
prevArrow | string (html \| jQuery selector) \| object (DOM node \| jQuery object) | `<button type="button" class="slick-prev">Previous</button>` | Allows you to select a node or customize the HTML for the "Previous" arrow.
respondTo | string | 'window' | Width that responsive object responds to. Can be 'window', 'slider' or 'min' (the smaller of the two).
responsive | array | null | Array of objects [containing breakpoints and settings objects (see example)](#responsive-option-example). Enables settings at given `breakpoint`. Set `settings` to "unslick" instead of an object to disable slick at a given breakpoint.
rows | int | 1 | Setting this to more than 1 initializes grid mode. Use slidesPerRow to set how many slides should be in each row.
rtl | boolean | false | Change the slider's direction to become right-to-left
slide | string | '' | Slide element query
slidesPerRow | int | 1 | With grid mode initialized via the rows option, this sets how many slides are in each grid row.
slidesToScroll | int | 1 | # of slides to scroll at a time
slidesToShow | int | 1 | # of slides to show at a time
speed | int | 300 | Transition speed
swipe | boolean | true | Enables touch swipe
swipeToSlide | boolean | false | Swipe to slide irrespective of slidesToScroll
touchMove | boolean | true | Enables slide moving with touch
touchThreshold | int | 5 | To advance slides, the user must swipe a length of (1/touchThreshold) * the width of the slider.
useCSS | boolean | true | Enable/Disable CSS Transitions
useTransform | boolean | true | Enable/Disable CSS Transforms
variableWidth | boolean | false | Disables automatic slide width calculation
vertical | boolean | false | Vertical slide direction
verticalSwiping | boolean | false | Changes swipe direction to vertical
waitForAnimate | boolean | true | Ignores requests to advance the slide while animating
zIndex | number | 1000 | Set the zIndex values for slides, useful for IE9 and lower


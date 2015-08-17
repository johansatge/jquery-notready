# jQuery notReady

A lightweight script that allows you to make use of `jQuery(document).ready` before jQuery loads.

---

* [Why](#why)
* [Installation](#installation)
* [Usage](#usage)
* [Changelog](#changelog)
* [License](#license)

## Why

Let's consider that your webpage needs to call jQuery stuff when the DOM is ready, by using this common syntax:

```html
<div class="my-div"></div>
<script>
    jQuery(document).ready(function($)
    {
        $('.my-div').jQueryStuff();
    });
</script>
```

This code needs jQuery to be loaded first. This is a problem as JS files should be loaded at the bottom of the page.

The `jquery.notready` script solves it by declaring a fake jQuery object that you can use everywhere on the page, and that will be replaced by the real one when it is propery loaded.

*Using jQuery calls in the HTML documents may not be a good thing, but in some cases it has to be done this way - this tool provides a workaround for those specific cases.*

## Installation

```bash
bower install jquery.notready
```

Alternatively, you may manually install the `jquery.notready.min.js` and `jquery.ready.min.js` scripts wherever you want in your project.

Then, call the first script in `<head>`:

```html
  <script src="src/jquery.notready.min.js"></script>
</head>
```

And the second one next to the jQuery call, at the bottom of the page:

```html
    <script src="src/vendor/jquery/dist/jquery.min.js"></script>
    <script src="src/jquery.ready.min.js"></script>
    <!-- [...] -->
  </body>
</html>
```

## Usage

Just make usual jQuery calls on the page.
For now, the following syntaxes are supported:

```javascript
jQuery(document).bind("ready", callback);
```

```javascript
jQuery(document).ready(callback);
```

```javascript
jQuery().ready(callback);
```

```javascript
jQuery(callback);
```

Please note that `$` is not supported to avoid compatibility issues.

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| `0.1` | July 26th, 2014 | Initial version |

## License

This project is released under the [MIT License](LICENSE).

## Credits

* [Sam Affron](http://samsaffron.com/archive/2012/02/17/stop-paying-your-jquery-tax)

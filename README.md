# prefiks 

![NPM version](http://img.shields.io/npm/v/prefiks.svg) ![Build Status](http://img.shields.io/travis/leny/prefiks.svg) ![Dependency Status](https://david-dm.org/leny/prefiks.svg) ![Downloads counter](http://img.shields.io/npm/dm/prefiks.svg)

> Get the vendors prefixes of a css properties, according to can i use datas.

* * * 

## Getting Started

Install the module with: `npm install prefiks`

Include it in your scripts with: `prefiks = require( "prefiks" );`

## Documentation

The **prefiks** module exposes a function : 

    prefiks( feature, browser, version_range )
    
* `feature` is the name of the feature on [caniuse website](http://caniuse.com) (look at the *feat* hash value in the URL).
* `browser` is the name of the browser to examine.
* `version_range` is a [semver version range](https://github.com/isaacs/node-semver#ranges) to examine.

The `prefix` functions returns an array with the prefixes to use for the given browser's versions (it always returns an array, even empty).

### `browser`'s aliases

The supported values for `browser` argument are listed bellow. These are **case insensitive**.

* `ie`, `internet explorer`, `internet-explorer`, `internet_explorer`, `internetexplorer`
* `firefox`, `ff`
* `chrome`
* `safari`
* `opera`
* `ios_saf`, `ios`
* `op_mini`, `opera-mini`, `opera_mini`, `operamini`
* `android`
* `op_mob`, `opera-mobile`, `operamobile`, `opera_mobile`
* `bb`, `blackberry`
* `and_chr`, `android-chrome`, `android_chrome`, `androidchrome`
* `and_ff`, `android-firefox`, `android_firefox`, `androidfirefox`
* `ie_mob`, `ie-mobile`, `ie_mobile`, `iemobile`

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

### TODO

- [ ] Add more browsers aliases
- [ ] Add more test cases

## Release History

* **0.1.0**: Initial release (*11/07/14*)

## License
Copyright (c) 2014 Leny  
Licensed under the MIT license.

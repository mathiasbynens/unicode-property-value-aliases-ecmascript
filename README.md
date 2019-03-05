# unicode-property-value-aliases-ecmascript [![Build status](https://travis-ci.org/mathiasbynens/unicode-property-value-aliases-ecmascript.svg?branch=master)](https://travis-ci.org/mathiasbynens/unicode-property-value-aliases-ecmascript)

_unicode-property-value-aliases-ecmascript_ offers Unicode property value alias mappings in an easy-to-consume JavaScript format.

It only contains the Unicode property names and values that are supported in [ECMAScript RegExp property escapes](https://github.com/tc39/proposal-regexp-unicode-property-escapes).

It’s based on [the `PropertyValueAliases.txt` data for Unicode v12.0.0](http://unicode.org/Public/12.0.0/ucd/PropertyValueAliases.txt).

## Installation

To use _unicode-property-value-aliases-ecmascript_ programmatically, install it as a dependency via [npm](https://www.npmjs.com/):

```bash
$ npm install unicode-property-value-aliases-ecmascript
```

Then, `require` it:

```js
const propertyValueAliases = require('unicode-property-value-aliases-ecmascript');
```

## Usage

This module exports a `Map` object of which the keys are canonical property names and the values are `Map`s from property value aliases to canonical property value names. The most common usage is to convert a property value alias to its canonical form:

```js
propertyValueAliases.get(property).get(propertyValue)
```

Examples:

```js
propertyValueAliases.get('General_Category').get('L')
// → 'Letter'

propertyValueAliases.get('Script').get('Aghb')
// → 'Caucasian_Albanian'

propertyValueAliases.get('Script_Extensions').get('Aghb')
// → 'Caucasian_Albanian'
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_unicode-property-value-aliases-ecmascript_ is available under the [MIT](https://mths.be/mit) license.

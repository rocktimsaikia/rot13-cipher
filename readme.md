# rot13-cipher ![build](https://travis-ci.com/RocktimSaikia/rot13-cipher.svg?branch=master)

>  [`ROT13`](https://en.wikipedia.org/wiki/ROT13) substitution cipher for Node.js. Example: `foobar` → `sbbone`<br>

ROT13 is its own [inverse](https://en.wikipedia.org/wiki/Inverse_function). Meaning, to undo `ROT13`, the same algorithm is applied, so the same action can be used for encoding and decoding.<br>

## Install
```bash
$ npm install rot13-cipher
```

## Usage

 ```js
 const rot13Cipher = require('rot13-cipher');

 rot13Cipher('hello world');
 //=> 'uryyb jbeyq'

 rot13Cipher('foo123bar');
 //=> 'sbb123one'

 rot13Cipher('foo!@bar')
 //=> 'sbb!@one'

  rot13Cipher('uryyb jbeyq')
 //=> 'hello world'
 ```

## API

### rot13Cipher(string)

Takes one string input and returns the encoded veersion of it.


## Support

<a href="https://www.buymeacoffee.com/7BdaxfI"><img src="https://user-images.githubusercontent.com/33410545/95193575-a3b51b00-07f1-11eb-9bbb-90ea2e1018d7.png" height="50px"/></a>

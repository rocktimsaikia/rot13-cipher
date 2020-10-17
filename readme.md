# rot13-cipher ![build](https://travis-ci.com/RocktimSaikia/rot13-cipher.svg?branch=master)

> [`ROT13`](https://en.wikipedia.org/wiki/ROT13) substitution cipher for Node.js. Example: `foobar` → `sbbone`<br>

ROT13 is its own [inverse](https://en.wikipedia.org/wiki/Inverse_function). Meaning, to undo `ROT13`, the same algorithm is applied, so the same action can be used for encoding and decoding.<br>

## Install

```bash
$ npm install rot13-cipher
```

## Usage

```js
const rot13Cipher = require("rot13-cipher");

rot13Cipher("hello world");
//=> 'uryyb jbeyq'

rot13Cipher("foo123bar");
//=> 'sbb123one'

rot13Cipher("foo!@bar");
//=> 'sbb!@one'

rot13Cipher("uryyb jbeyq");
//=> 'hello world'
```

## API

### rot13Cipher(string)

Takes one string input and returns the encoded version of it.

## FAQ

<details>
  <summary>Where is <a href="https://en.wikipedia.org/wiki/ROT13">ROT13 Cipher</a> used ?</summary>

ROT13 is used in online forums as a means of hiding spoilers, punchlines, puzzle solutions, and offensive materials from the casual glance. ROT13 has inspired a variety of letter and word games online, and is frequently mentioned in newsgroup conversations.

</details>

## Licese

MIT © [Rocktim Saikia](https://rocktim.xyz)

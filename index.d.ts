/**
 ROT13 substitution cipher for Node.js

 @example
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
*/
declare function rot13Cipher(string: string): string;

export = rot13Cipher;

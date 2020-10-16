'use strict';

const rot13Cipher = string => {
	return string.replace(/[a-z]/gi, x => {
		return String.fromCharCode(x.charCodeAt(0) + (x.toLowerCase() <= 'm' ? 13 : -13));
	});
};

module.exports = rot13Cipher;

'use strict';

const { htmlTag } = require('hexo-util');

const rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\w]*))?)/;
const rMeta = /["']?([^"']+)?["']?\s*["']?([^"']+)?["']?/;
const rImgFile = /([^\s]+(\.(jpg|JPG|png|PNG|gif|GIF|bmp|BMP))$)/;

/**
* Jianshou selling item html tag
*
* Syntax:
*   {% jianshou hashid ["nojs" | Javascript url] %}
*/

function jianshouTag(args, content) {
	// Below is the example of generated html for jianshou tag.
	// "<div class="radish-content" data-hashid="xxxxxx"></div><script src="https://jianshou.online/js/embed.js"></script>"
    const hashid = args.shift();
	const div = htmlTag('div', {
		"class": "radish-content",
		"data-hashid": hashid
	}, '');

	let script = htmlTag('script', {
		"src": "https://jianshou.online/js/embed.js"
	}, '');

	if (args.length > 0) {
		const item = args.shift();
		if(item == 'nojs') {
			script = '';
		} else if (/^(http|https):\/\/\S+.js$/.test(item)) {
			// Embed your own jianshou embed.js script
			script = htmlTag('script', {
				"src": item
			}, '');

		}
	}

    return div + script;
};

hexo.extend.tag.register("jianshou", jianshouTag, {async: false, ends: false});
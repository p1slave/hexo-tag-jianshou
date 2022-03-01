'use strict';

var pathFn = require('path');
const { htmlTag, url_for } = require('hexo-util');

const rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\w]*))?)/;
const rMeta = /["']?([^"']+)?["']?\s*["']?([^"']+)?["']?/;
const rImgFile = /([^\s]+(\.(jpg|JPG|png|PNG|gif|GIF|bmp|BMP))$)/;

/**
* pcloud Image tag
*
* Syntax:
*   {% pcloudimg [class names] imageFile [width] [height] [title text [alt text]] %}
*/

function jianshouTag(args, content) {
	// link = "<div class="radish-content" data-hashid="xxxxxx"></div><script src="https://jianshou.online/js/embed.js"></script>"
    const item = args.shift();
	const div = htmlTag('div', {
		"class": "radish-content",
		"data-hashid": item
	}, '');

	const script = htmlTag('script', {
		"src": "https://jianshou.online/js/embed.js"
	}, '');

    return div + script;
};

hexo.extend.tag.register("jianshou", jianshouTag, {async: false, ends: false});
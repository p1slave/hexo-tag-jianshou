# hexo-tag-jianshou
An useful media tag for digital assets sold on [https://jianshou.online](https://tjianshou.online) to be embeded in [Hexo](https://hexo.io) blog.

## Installation
Run the following command in the root directory of hexo:
```
npm install hexo-tag-jianshou --save
```

## Usage
Wrap the hash Id with `{% jianshou %}` tag and put it somewhere in the text. 
Note that the preview picture will not be shown if we embed it in the webpage and the preview picture is only available in the direct link of the asset.

```
{% jianshou hashid [nojs | javascript url] %}
```

The `hashid` can be followed by one additional argument. If the argument is "nojs", the script tag will not be included otherwise the default JS path [https://jianshou.online/js/embed.js](https://jianshou.online/js/embed.js) will be used to render the link of selling items. You can also specify your own url path ending in `.js` as an argument to replace the default JS file. Ideally, you may want to host that `embed.js` file under your own domain because the owner of the jianshou does not want to deploy it to CDN and it is quite slow to download this file from abroad. 

## License ##
MIT
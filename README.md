# hexo-tag-jianshou
An useful media tag for digital assets sold on [https://jianshou.online](https://tjianshou.online) to be embeded in [Hexo](https://hexo.io) blog.

## Installation
Run the following command in the root directory of hexo:
```
npm install hexo-tag-jianshou --save
```

### Usage ###
Wrap the hash Id with `{% jianshou %}` tag and put it somewhere in the text. 
Note that the preview picture will not be shown if we embed it in the webpage and the preview picture is only available in the direct link of the asset.
```
{% jianshou asset_hash_id %}
```

## License ##

MIT
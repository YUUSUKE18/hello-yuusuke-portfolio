module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Yuusuke Okamoto","short_name":"Yuusuke","start_url":"/","background_color":"#337ab7","theme_color":"#337ab7","display":"fullscreen","icon":"src/images/Yuusuke.jpg","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"ea2db3ac9ab8c2d83a9f2fd14096231c"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]

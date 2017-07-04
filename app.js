'use strict';
require("babel-core").transform("code", {
    presets: ["react"]
});
require('babel-register')();
require('./src/app.js');
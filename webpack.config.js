/**
 * Created by lian.jing on 2016/8/15.
 */

"use strict";

const path = require("path");

module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    mode: "production"
};
/**
 * Created by lian.jing on 2016/8/15.
 */
var config = require("./tsconfig.json");
module.exports = function () {
    var greet = document.createElement("div");
    greet.textContent = config.greetText;
    return greet;
};
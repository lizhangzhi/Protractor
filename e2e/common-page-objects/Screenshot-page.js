/**
 * Created by Lee on 2017/5/10.
 */
var fs = require('fs');

var Screenshot = function () {
  this.getScreenshot = function (screenshotname) {
    function writeScreenShot(data,filename) {
      var stream = fs.createWriteStream(filename);
      stream.write(new Buffer(data,'base64'));
      stream.end();
    }
    browser.takeScreenshot().then(function (png) {
      writeScreenShot(png,screenshotname);
    });
  };
};
module.exports = Screenshot;

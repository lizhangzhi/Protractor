/**
 * Created by Lee on 2017/5/10.
 */
var fs = require('fs');
var TimeStampPage  = require('.//Time-page');

var CreateFolderPage = function () {
  var timeStampPage  = new TimeStampPage();
  var nowDate = timeStampPage.getNowDate();
  var folderPath = 'F:/Angular2 Project/';
  this.path = folderPath + nowDate;

  this.createFolder = function () {
    fs.mkdir(this.path);
  };
};
module.exports = CreateFolderPage;

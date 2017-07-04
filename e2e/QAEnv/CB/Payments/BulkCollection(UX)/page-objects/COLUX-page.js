/**
 * Created by Lee on 2017/6/9.
 */
var ParameterPage = require('./../../../../../common-page-objects/Parameter-page');
var EC = protractor.ExpectedConditions;

var BulkCollectionUXPage = function () {

  var parameterPage = new ParameterPage();

  this.createSGBulkCollectionUX = function () {
    this.selectFromAccount();

  };
  this.selectFromAccount = function () {
    /*select a from account*/
    var fromAccount = element(by.id('tally-city'))
                        .element(by.cssContainingText('option[role=option]','LEONA ALBRECHT - 0018001843 - SGD'));
    browser.wait(EC.elementToBeClickable(fromAccount),30000);
    fromAccount.click();
  };
};
module.exports = BulkCollectionUXPage;

/**
 * Created by Lee on 2017/6/1.
 */
var ParameterPage = require('./../../../../../common-page-objects/Parameter-page');
var SAMNavigationPage = require('./../../../page-objects/SAMNavigation-page');
var EC = protractor.ExpectedConditions;

var TransactionEnquiryPage = function () {
  var parameterPage = new ParameterPage();
  var samNavigationPage = new SAMNavigationPage();

  this.viewTransaction = function () {

    samNavigationPage.toTransactionEnquiry();
    /*Enter Start Date*/
    var startDate = element(by.css('input[name=startDate]'));
    browser.wait(EC.visibilityOf(startDate),30000);
    startDate.clear();
    startDate.sendKeys(parameterPage.startDate);
    /*Click Search button*/
    var searchBtn = element(by.css('input[name=submit_search]'));
    browser.wait(EC.elementToBeClickable(searchBtn),30000);
    searchBtn.click();
    /*Try to view first transaction searched*/
    var transactionlink = element.all(by.partialLinkText('EB')).first();
    browser.wait(EC.elementToBeClickable(transactionlink),30000);
    transactionlink.click();
  };
};
module.exports = TransactionEnquiryPage;


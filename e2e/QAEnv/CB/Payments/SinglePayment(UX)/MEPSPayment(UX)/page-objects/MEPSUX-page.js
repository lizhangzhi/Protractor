/**
 * Created by Lee on 2017/7/3.
 */
var ParameterPage = require('./../../../../../../common-page-objects/Parameter-page');
var SinglePaymentUXPage = require('./../../page-objects/SinglePaymentUX-page');
var EC = protractor.ExpectedConditions;

var MEPSPaymentUXPage = function () {

  var parameterPage = new ParameterPage();
  var singlePaymentUXPage = new SinglePaymentUXPage();

  this.createMEPSUX = function () {
    singlePaymentUXPage.switchToframe();
    singlePaymentUXPage.waitingForPayeeLoad();
    browser.sleep(1000);
    singlePaymentUXPage.selectFromAccount();
    singlePaymentUXPage.enterAmount(parameterPage.amount);
    this.selectBeneficiary();
    this.selectPriority();
    singlePaymentUXPage.selectBankCharges();
    singlePaymentUXPage.clickNextBtn();
    singlePaymentUXPage.clickSubmitBtn();
  };
  this.selectBeneficiary = function () {
    /*select an existing beneficiary*/
    var existingPayee = element(by.css('auto-complete[formcontrolname=payee]')).click().element(by.cssContainingText('.search-result',parameterPage.Domesticbeneficiary));
    browser.wait(EC.elementToBeClickable(existingPayee),30000);
    existingPayee.click();
  };
  this.selectPriority = function () {
    /*select MEPS Payment as priority*/
    var priority = element.all(by.tagName('accordion-group')).get(3);
    browser.wait(EC.elementToBeClickable(priority),30000);
    priority.click();
  };
};
module.exports = MEPSPaymentUXPage;

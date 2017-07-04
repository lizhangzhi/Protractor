/**
 * Created by Lee on 2017/6/19.
 */
var ParameterPage = require('./../../../../../../common-page-objects/Parameter-page');
var SinglePaymentUXPage = require('./../../page-objects/SinglePaymentUX-page');
var EC = protractor.ExpectedConditions;

var AccountTransferUXPage = function () {

  var parameterPage = new ParameterPage();
  var singlePaymentUXPage = new SinglePaymentUXPage();

  this.createSGACTUX = function () {
    singlePaymentUXPage.switchToframe();
    singlePaymentUXPage.waitingForPayeeLoad();
    singlePaymentUXPage.selectFromAccount();
    singlePaymentUXPage.enterAmount(parameterPage.amount);
    this.selectBeneficiary();
    singlePaymentUXPage.clickNextBtn();
    singlePaymentUXPage.clickSubmitBtn();
  };
  this.selectBeneficiary = function () {
    /*select an existing beneficiary*/
    var existingPayee = element(by.css('auto-complete[formcontrolname=payee]')).click().element(by.cssContainingText('.search-result',parameterPage.ACTbeneficiary));
    browser.wait(EC.elementToBeClickable(existingPayee),30000);
    existingPayee.click();
  };
};
module.exports = AccountTransferUXPage;

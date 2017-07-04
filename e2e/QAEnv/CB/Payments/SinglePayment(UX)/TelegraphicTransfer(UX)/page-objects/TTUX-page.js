/**
 * Created by Lee on 2017/6/20.
 */
var ParameterPage = require('./../../../../../../common-page-objects/Parameter-page');
var SinglePaymentUXPage = require('./../../page-objects/SinglePaymentUX-page');
var EC = protractor.ExpectedConditions;

var TelegraphicTransferUXPage = function () {

  var parameterPage = new ParameterPage();
  var singlePaymentUXPage = new SinglePaymentUXPage();

  this.createSGTTUX = function () {
    singlePaymentUXPage.switchToframe();
    singlePaymentUXPage.waitingForPayeeLoad();
    browser.sleep(1000);
    singlePaymentUXPage.selectFromAccount();
    singlePaymentUXPage.enterAmount(parameterPage.amount);
    this.selectBeneficiary();
    singlePaymentUXPage.selectBankCharges();
    singlePaymentUXPage.clickNextBtn();
    singlePaymentUXPage.clickSubmitBtn();
  };
  this.saveSGTTUX = function () {
    singlePaymentUXPage.switchToframe();
    singlePaymentUXPage.waitingForPayeeLoad();
    browser.sleep(1000);
    singlePaymentUXPage.selectFromAccount();
    singlePaymentUXPage.enterAmount(parameterPage.amount);
    this.selectBeneficiary();
    singlePaymentUXPage.selectBankCharges();
    singlePaymentUXPage.clickSaveBtn();
  };
  this.approveSGTTUX = function () {
    singlePaymentUXPage.switchToframe();
    singlePaymentUXPage.waitPageLoad();
    browser.sleep(1000);
    singlePaymentUXPage.clickApproveBtn();
    singlePaymentUXPage.clickSendChallengeBtn();
    singlePaymentUXPage.chooseToken();
    singlePaymentUXPage.enterResponse();
    singlePaymentUXPage.clickApproveBtn();
  };
  this.selectBeneficiary = function () {
    /*select an existing beneficiary*/
    var existingPayee = element(by.css('auto-complete[formcontrolname=payee]')).click().element(by.cssContainingText('.search-result',parameterPage.TTbeneficiary));
    browser.wait(EC.elementToBeClickable(existingPayee),30000);
    existingPayee.click();
  };
};
module.exports = TelegraphicTransferUXPage;

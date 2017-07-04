/**
 * Created by Lee on 2017/7/3.
 */
var ParameterPage = require('./../../../../../../common-page-objects/Parameter-page');
var SinglePaymentUXPage = require('./../../page-objects/SinglePaymentUX-page');
var EC = protractor.ExpectedConditions;

var FASTPaymentUXPage = function () {

  var parameterPage = new ParameterPage();
  var singlePaymentUXPage = new SinglePaymentUXPage();

  this.createFASTUX = function () {
    singlePaymentUXPage.switchToframe();
    singlePaymentUXPage.waitingForPayeeLoad();
    browser.sleep(1000);
    singlePaymentUXPage.selectFromAccount();
    singlePaymentUXPage.enterAmount(parameterPage.amount);
    this.selectBeneficiary();
    this.selectChargeAccount();
    singlePaymentUXPage.clickNextBtn();
    singlePaymentUXPage.clickSubmitBtn();
  };
  this.selectBeneficiary = function () {
    /*select an existing beneficiary*/
    var existingPayee = element(by.css('auto-complete[formcontrolname=payee]')).click().element(by.cssContainingText('.search-result',parameterPage.Domesticbeneficiary));
    browser.wait(EC.elementToBeClickable(existingPayee),30000);
    existingPayee.click();
  };
  this.selectChargeAccount = function () {
    /*select account under Pay charges from this account field*/
    var chargeAccount = element(by.css('auto-complete[formcontrolname=chargeAccount]'));
    browser.wait(EC.elementToBeClickable(chargeAccount),60000);
    chargeAccount.click();
    var accountNumber = element(by.cssContainingText('.search-result',parameterPage.fromAccount1));
    browser.wait(EC.elementToBeClickable(accountNumber),30000);
    accountNumber.click();
  };
  this.selectPurposeCode = function () {
    /*Select a purpose code*/
    var purposeCode = element(by.css('multi-level-dropdown[formcontrolname=purposeCode]'));
    browser.wait(EC.elementToBeClickable(purposeCode),60000);
    purposeCode.click();
    var purposeCodeLevel1 = element.all(by.css('.search-result')).firs();
    browser.wait(EC.elementToBeClickable(purposeCodeLevel1),60000);
    purposeCodeLevel1.click();
    var purposeCodeLevel2 = element.all(by.css('.search-result')).firs();
    browser.wait(EC.elementToBeClickable(purposeCodeLevel2),60000);
    purposeCodeLevel2.click();
  };
};
module.exports = FASTPaymentUXPage;

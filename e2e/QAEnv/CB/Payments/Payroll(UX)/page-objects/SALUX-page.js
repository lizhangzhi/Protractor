/**
 * Created by Lee on 2017/6/9.
 */
var ParameterPage = require('./../../../../../common-page-objects/Parameter-page');
var EC = protractor.ExpectedConditions;

var PayrollUXPage = function () {

  var parameterPage = new ParameterPage();

  this.createSGPayrollUX = function () {
    this.switchToframe();
    this.waitingForPayeeLoad();
    this.selectFromAccount();
    this.selectBeneficiary();
    this.enterAmount(parameterPage.amount);
    this.clickNextBtn();
    this.clickSubmitBtn();
  };
  this.switchToframe = function () {
    var iframe = element(by.id('iframe1'));
    browser.wait(EC.presenceOf(iframe),60000);
    browser.switchTo().frame(iframe.getWebElement());
  };
  this.waitingForPayeeLoad = function () {
    browser.wait(EC.textToBePresentInElement(element(by.css('.page-header')), 'Make a Payroll Payment'), 60000);
    browser.sleep(2000);
    browser.wait(EC.stalenessOf(element(by.css('.sk-circle'))), 30000);
  };
  this.selectFromAccount = function () {
    /*select a from account*/
    var fromAccount = element(by.id('tally-city'));
    browser.wait(EC.elementToBeClickable(fromAccount),30000);
    fromAccount.click();
    var accountNumber = element(by.cssContainingText('.search-result',parameterPage.fromAccount1));
    browser.wait(EC.elementToBeClickable(accountNumber),30000);
    accountNumber.click();
  };
  this.selectBeneficiary = function () {
    /*select an existing beneficiary*/
    var existingPayee = element.all(by.buttonText('Add')).first();
    browser.wait(EC.elementToBeClickable(existingPayee),30000);
    existingPayee.click();
  };
  this.enterAmount = function (value) {
    browser.wait(EC.presenceOf(element(by.css('.addPayee'))), 30000);
    /*enter amount*/
    var amount = element(by.css('dbs-input[formcontrolname=payeeAmount]')).element(by.tagName('input'));
    browser.wait(EC.visibilityOf(amount),30000);
    amount.sendKeys(value);
  };
  this.clickNextBtn = function () {
    /*click button to preview page*/
    var nextBtn = element(by.buttonText('Next'));
    browser.wait(EC.elementToBeClickable(nextBtn),30000);
    nextBtn.click();
  };
  this.clickSubmitBtn = function () {
    /*click button to submit */
    browser.wait(EC.textToBePresentInElement(element.all(by.css('.form-section-header')).first(), 'Preview payroll payment'), 30000);
    var submitButton = element(by.buttonText('Submit'));
    browser.wait(EC.elementToBeClickable(submitButton),30000);
    submitButton.click();
  };
};
module.exports = PayrollUXPage;

/**
 * Created by Lee on 2017/6/19.
 */
var ParameterPage = require('./../../../../../common-page-objects/Parameter-page');
var EC = protractor.ExpectedConditions;

var SinglePaymentUXPage = function () {

  var parameterPage = new ParameterPage();

  this.switchToframe = function () {
    var iframe = element(by.id('iframe1'));
    browser.wait(EC.presenceOf(iframe),60000);
    browser.sleep(1000);
    browser.switchTo().frame(iframe.getWebElement());
  };
  this.waitingForPayeeLoad = function () {
    browser.wait(EC.textToBePresentInElement(element(by.css('.page-header')), 'Make a Payment/Transfer'), 60000);
    browser.sleep(2000);
    browser.wait(EC.stalenessOf(element(by.css('.sk-circle'))), 30000);
  };
  this.selectFromAccount = function () {
    /*select a from account*/
    var fromAccount = element(by.css('auto-complete[formcontrolname=fromAccount]'));
    browser.wait(EC.elementToBeClickable(fromAccount),60000);
    fromAccount.click();
    var accountNumber = element(by.cssContainingText('.search-result',parameterPage.fromAccount1));
    browser.wait(EC.elementToBeClickable(accountNumber),30000);
    accountNumber.click();
  };
  this.enterAmount = function (value) {
    /*enter amount*/
    var amount = element(by.css('dbs-input[formcontrolname=amount]'))
                    .element(by.tagName('input'));
    browser.wait(EC.visibilityOf(amount),30000);
    amount.sendKeys(value);
  };
  this.selectBankCharges = function () {
    /*select bank charges*/
    var bankCharges = element(by.css('label[for=shared]'));
    browser.wait(EC.elementToBeClickable(bankCharges),30000);
    bankCharges.click();
  };
  this.clickSaveBtn = function () {
    /*click button to preview page*/
    var saveBtn = element(by.buttonText('Save as draft'));
    browser.wait(EC.elementToBeClickable(saveBtn),30000);
    saveBtn.click();
  };
  this.clickNextBtn = function () {
    /*click button to preview page*/
    var nextBtn = element(by.buttonText('Next'));
    browser.wait(EC.elementToBeClickable(nextBtn),30000);
    nextBtn.click();
  };
  this.clickSubmitBtn = function () {
    /*click button to submit */
    browser.wait(EC.textToBePresentInElement(element.all(by.css('.form-section-header')).first(), 'Preview your transfer'), 30000);
    var submitButton = element(by.buttonText('Submit'));
    browser.wait(EC.elementToBeClickable(submitButton),30000);
    submitButton.click();
  };
  this.clickApproveBtn = function () {
    /*click button to approve */
    var approveButton = element(by.buttonText('Approve'));
    browser.wait(EC.elementToBeClickable(approveButton),30000);
    approveButton.click();
  };
  this.clickSendChallengeBtn = function () {
    /*click Send Challenge button*/
    var sendChallengeButton = element(by.buttonText('Send Challenge'));
    browser.wait(EC.elementToBeClickable(sendChallengeButton),30000);
    sendChallengeButton.click();
    browser.wait(EC.textToBePresentInElement(element(by.buttonText('Re-send Challenge')), 'Re-send Challenge'), 30000);
  };
  this.chooseToken = function () {
    /*Choose digital token*/
    var digitalToken = element(by.css('label[for=token]'));
    browser.wait(EC.elementToBeClickable(digitalToken),30000);
    digitalToken.click();
  };
  this.enterResponse = function () {
    /*enter response code*/
    var responseCode = element(by.css('input[name=responseCode]'));
    browser.wait(EC.visibilityOf(responseCode),30000);
    responseCode.sendKeys(parameterPage.responseCode);
  };
  this.waitPageLoad = function () {
    browser.wait(EC.stalenessOf(element(by.css('.sk-circle'))), 30000);
  };
};
module.exports = SinglePaymentUXPage;

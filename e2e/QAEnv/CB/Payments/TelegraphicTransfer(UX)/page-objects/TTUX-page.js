/**
 * Created by Lee on 2017/5/9.
 */
var ParameterPage = require('./../../../../../common-page-objects/Parameter-page');
var EC = protractor.ExpectedConditions;
var TelegraphicTransferUXPage = function () {
  var parameterPage = new ParameterPage();
  this.createSGTelegraphicTransfer = function(){

    this.switchToframe();
    this.selectFromAccount(parameterPage.fromAccount1);
    this.waitingForFX();
    this.enterAmount(parameterPage.amount);
    this.selectBeneficiary(parameterPage.TTbeneficiary);
    this.selectBankCharges();
    this.enterPaymentDetails(parameterPage.paymentdetails);
    this.selectAdvice();
    this.enterEmailAddress(parameterPage.EmailAddress);
    this.enterMessage(parameterPage.message);
    this.enterMessageToApprover(parameterPage.messageToApprover);
    this.enterSpecInsToDBS(parameterPage.specInstrucToDBS);
    this.clickNextBtn();
    this.clickSubmitBtn();
  };
  this.approveTelegraphicTransfer = function () {

    this.switchToframe();
    this.waitPageLoad();
    this.clickApproveBtn();
    this.clickSendChallengeBtn();
    this.chooseToken();
    this.enterResponse(parameterPage.responseCode);
    this.clickApproveBtn();
  };
  this.copyTelegraphicTransfer = function () {
    this.switchToframe();
    this.waitPageLoad();
    this.clickCopyBtn();
    this.enterPaymentDetails(parameterPage.paymentdetailsCopy);
    this.clickNextBtn();
    this.clickSubmitBtn();
  };
  this.deleteTelegraphicTransfer = function () {
    this.switchToframe();
    this.waitPageLoad();
    this.clickDeleteBtn();
    this.clickConfirmDeleteBtn();
  };
  this.modifyTelegraphicTransfer = function () {
    this.switchToframe();
    this.waitPageLoad();
    this.clickEditBtn();
    this.enterPaymentDetails(parameterPage.paymentdetailsModify);
    this.clickNextBtn();
    this.clickSubmitBtn();
  };
  this.rejectTelegraphicTransfer = function () {
    this.switchToframe();
    this.waitPageLoad();
    this.clickRejectBtn();
    this.enterRejectReason(parameterPage.rejectReason);
    this.clickConfirmRejectBtn();
  };
  this.saveSGTelegraphicTransfer = function(){
    this.switchToframe();
    this.selectFromAccount(parameterPage.fromAccount1);
    this.waitingForFX();
    this.enterAmount(parameterPage.amount);
    this.selectBeneficiary(parameterPage.TTbeneficiary);
    this.selectBankCharges();
    this.clickSaveBtn();
  };
  this.switchToframe = function () {
    var iframe = element(by.id('iframe1'));
    browser.wait(EC.presenceOf(iframe),30000);
    browser.sleep(1000);
    browser.switchTo().frame(iframe.getWebElement());
  };
  this.selectFromAccount = function (value) {
    /*select a from account*/
    var fromAccount = element(by.css('auto-complete[formcontrolname=fromAccount]'));
    browser.wait(EC.elementToBeClickable(fromAccount),60000);
    fromAccount.click();
    var accountNumber = element(by.cssContainingText('.search-result',value));
    browser.wait(EC.elementToBeClickable(accountNumber),30000);
    accountNumber.click();
  };
  this.waitingForFX = function () {
    browser.sleep(1000);
    browser.wait(EC.presenceOf(element(by.css('.fx-note'))),30000);
  };
  this.enterAmount = function (value) {
    /*enter amount*/
    var amount = element(by.id('md-input-0-input'));
    browser.wait(EC.visibilityOf(amount),30000);
    amount.sendKeys(value);
  };
  this.selectBeneficiary = function (value) {
    /*select an Existing payee*/
    var existingPayee = element(by.css('auto-complete[formcontrolname=payee]')).click().element(by.cssContainingText('.search-result',value));
    browser.wait(EC.elementToBeClickable(existingPayee),30000);
    existingPayee.click();
  };
  this.selectBankCharges = function () {
    /*click 'Shared' as Bank charges*/
    var bankCharges = element.all(by.css('.info-label-strong')).first();
    browser.wait(EC.elementToBeClickable(bankCharges),30000);
    bankCharges.click();
  };
  this.enterPaymentDetails = function (value) {
    /*enter value in Payment details to the payee bank field*/
    var paymentDetails = element(by.css('dbs-textarea[formcontrolname=paymentDetail]')).element(by.id('md-textbox-0-input'));
    browser.wait(EC.visibilityOf(paymentDetails),30000);
    paymentDetails.clear();
    paymentDetails.sendKeys(value);
  };
  this.selectAdvice = function () {
    /*click checkbox for Message to the payee*/
    var messagePayee = element(by.css('label[for=isBeneAdvising]'));
    browser.executeScript("arguments[0].click();", messagePayee.getWebElement());
  };
  this.enterEmailAddress = function (value) {
    /*enter email address*/
    var emailAddress = element.all(by.css('.advice-email-recipient')).first().element(by.css('input[placeholder=Email]'));
    browser.wait(EC.visibilityOf(emailAddress),30000);
    emailAddress.sendKeys(value);
  };
  this.enterMessage = function (value) {
    /*enter Message*/
    var message = element(by.css('dbs-textarea[formcontrolname=adviceContent]')).element(by.tagName('textarea'));
    browser.wait(EC.visibilityOf(message),30000);
    message.sendKeys(value);
  };
  this.enterMessageToApprover = function (value) {
    /*click checkbox for Message to you Approver field*/
    var messageToApproverRadio = element(by.css('label[for=isTransactionNote]'));
    browser.wait(EC.elementToBeClickable(messageToApproverRadio),30000);
    messageToApproverRadio.click();
    /*enter value in Message to you Approver field*/
    var messageToApprover = element(by.css('dbs-textarea[formcontrolname=transactionNote]')).element(by.tagName('textarea'));
    browser.wait(EC.visibilityOf(messageToApprover),30000);
    messageToApprover.sendKeys(value);
  };
  this.enterSpecInsToDBS = function (value) {
    /*click checkbox for Special instructions to DBS field*/
    var specInsToDBSRadio = element(by.css('label[for=isMessageToOrderingBank]'));
    browser.wait(EC.elementToBeClickable(specInsToDBSRadio),30000);
    specInsToDBSRadio.click();
    /*enter value in Special instructions to DBS field*/
    var specInsToDBS = element(by.css('dbs-textarea[formcontrolname=messageToOrderingBank]')).element(by.tagName('textarea'));
    browser.wait(EC.visibilityOf(specInsToDBS),30000);
    specInsToDBS.sendKeys(value);
  };
  this.clickNextBtn = function () {
    /*click button  to preview page*/
    var nextButton = element(by.buttonText('Next'));
    browser.wait(EC.elementToBeClickable(nextButton),30000);
    nextButton.click();
  };
  this.clickSubmitBtn = function () {
    /*click button  to submit */
    var submitButton = element(by.buttonText('Submit'));
    browser.wait(EC.elementToBeClickable(submitButton),30000);
    submitButton.click();
  };
  this.clickApproveBtn = function () {
    /*wait for Approve button clickable then click it*/
    var approveButton = element(by.buttonText('Approve'));
    browser.wait(EC.elementToBeClickable(approveButton),30000);
    approveButton.click();
  };
  this.clickSendChallengeBtn = function () {
    /*click Send Challenge button*/
    var sendChallengeButton = element(by.buttonText('Send Challenge'));
    browser.wait(EC.elementToBeClickable(sendChallengeButton),30000);
    sendChallengeButton.click();
  };
  this.chooseToken = function () {
    /*Choose digital token*/
    var digitalToken = element(by.css('label[for=token]'));
    browser.wait(EC.elementToBeClickable(digitalToken),30000);
    digitalToken.click();
  };
  this.enterResponse = function (value) {
    /*enter response code*/
    var responseCode = element(by.css('input[name=responseCode]'));
    browser.wait(EC.visibilityOf(responseCode),30000);
    responseCode.sendKeys(value);
  };
  this.clickCopyBtn = function () {
    /*wait for Copy button clickable then click it*/
    var copyButton = element(by.buttonText('Copy'));
    browser.wait(EC.elementToBeClickable(copyButton),30000);
    copyButton.click();
  };
  this.waitPageLoad = function () {
    browser.wait(EC.stalenessOf(element(by.css('.sk-circle'))), 30000);
  };
  this.clickDeleteBtn = function () {
    /*wait for Delete button clickable then click it*/
    var deleteButton = element(by.buttonText('Delete'));
    browser.wait(EC.elementToBeClickable(deleteButton),30000);
    deleteButton.click();
  };
  this.clickConfirmDeleteBtn = function () {
    /*wait for Delete button clickable then click it*/
    var deleteBtn = element(by.css('.btn-area')).all(by.tagName('button')).last();
    browser.wait(EC.elementToBeClickable(deleteBtn),30000);
    deleteBtn.click();
  };
  this.clickEditBtn = function () {
    /*wait for Edit label clickable then click it*/
    var editLabel = element(by.css('.icon-edit'));
    browser.wait(EC.elementToBeClickable(editLabel),30000);
    editLabel.click();
  };
  this.clickRejectBtn = function () {
    /*wait for Reject button clickable then click it*/
    var rejectButton = element(by.buttonText('Reject'));
    browser.wait(EC.elementToBeClickable(rejectButton),30000);
    rejectButton.click();
  };
  this.enterRejectReason = function (value) {
    /*enter reason for rejection*/
    var rejectReason = element(by.css('.input-max')).element(by.tagName('input'));
    browser.wait(EC.visibilityOf(rejectReason),5000);
    rejectReason.sendKeys(value);
  };
  this.clickConfirmRejectBtn = function () {
    /*wait for Reject button clickable then click it*/
    var rejectBtn = element(by.css('.btn-area')).all(by.tagName('button')).last();
    browser.wait(EC.elementToBeClickable(rejectBtn),30000);
    rejectBtn.click();
  };
  this.clickSaveBtn = function () {
    /*click Save as Draft button*/
    var saveButton = element(by.buttonText('Save as draft'));
    browser.wait(EC.elementToBeClickable(saveButton),30000);
    saveButton.click();
  };
};
module.exports = TelegraphicTransferUXPage;

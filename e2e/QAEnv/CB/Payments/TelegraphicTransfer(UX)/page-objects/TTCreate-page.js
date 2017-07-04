/**
 * Created by Lee on 2017/5/9.
 */
var ParameterPage = require('./../../../../../common-page-objects/Parameter-page');
var EC = protractor.ExpectedConditions;
var TTCreatePage = function () {
  var parameterPage = new ParameterPage();
  this.createSGTelegraphicTransfer = function(){

    this.EnterInfo();
    /*click button  to preview page*/
    var nextButton = element(by.buttonText('Next'));
    browser.wait(EC.elementToBeClickable(nextButton),30000);
    nextButton.click();
    /*click button  to submit */
    var submitButton = element(by.buttonText('Submit'));
    browser.wait(EC.elementToBeClickable(submitButton),30000);
    submitButton.click();
    browser.sleep(2000);
  };

  this.EnterInfo = function () {

    var iframe = element(by.id('iframe1'));
    browser.wait(EC.presenceOf(iframe),30000);
    browser.switchTo().frame(iframe.getWebElement());
    /*select a from account*/
    browser.sleep(2000);
    var fromAccount = element(by.name('fromAccount'))
                        .element(by.css('.input-max')).click()
                        .element(by.cssContainingText('.search-result','LEONA ALBRECHT 0018001843 (SGD)'));
    browser.wait(EC.elementToBeClickable(fromAccount),30000);
    fromAccount.click();
    /*enter amount*/
    var amount = element(by.id('md-input-0-input'));
    browser.wait(EC.visibilityOf(amount),30000);
    amount.sendKeys(parameterPage.amount);
    /*select an Existing payee*/
    browser.sleep(1000);
    var existingPayee = element(by.name('payee')).click()
                          .all(by.css('.search-result')).first();
    browser.wait(EC.elementToBeClickable(existingPayee),30000);
    existingPayee.click();
    /*click 'Shared' as Bank charges*/
    var bankCharges = element.all(by.css('.info-label-strong')).first();
    browser.wait(EC.elementToBeClickable(bankCharges),30000);
    bankCharges.click();
    /*enter value in Payment details to the payee bank field*/
    var paymentDetails = element(by.css('dbs-textarea[formcontrolname=paymentDetail]'))
                            .element(by.id('md-textbox-0-input'));
    browser.wait(EC.visibilityOf(paymentDetails),30000);
    paymentDetails.sendKeys(parameterPage.paymentdetails);
    /*click checkbox for Message to the payee*/
    var messagePayee = element(by.css('label[for=isBeneAdvising]'));
    browser.executeScript("arguments[0].click();", messagePayee.getWebElement());
    /*enter email address*/
    var emailAddress = element.all(by.css('.advice-email-recipient')).first()
                          .element(by.css('input[placeholder=Email]'));

    browser.wait(EC.visibilityOf(emailAddress),30000);
    emailAddress.sendKeys(parameterPage.EmailAddress);
    /*enter Message*/
    var message = element(by.css('dbs-textarea[formcontrolname=adviceContent]'))
                   .element(by.tagName('textarea'));
    browser.wait(EC.visibilityOf(message),30000);
    message.sendKeys(parameterPage.message);
    /*click checkbox for Message to you Approver field*/
    var messageToApproverRadio = element(by.css('label[for=isTransactionNote]'));
    browser.wait(EC.elementToBeClickable(messageToApproverRadio),30000);
    messageToApproverRadio.click();
    /*enter value in Message to you Approver field*/
    var messageToApprover = element(by.css('dbs-textarea[formcontrolname=transactionNote]'))
                              .element(by.tagName('textarea'));
    browser.wait(EC.visibilityOf(messageToApprover),30000);
    messageToApprover.sendKeys(parameterPage.messageToApprover);
    /*click checkbox for Special instructions to DBS field*/
    var specInsToDBSRadio = element(by.css('label[for=isMessageToOrderingBank]'));
    browser.wait(EC.elementToBeClickable(specInsToDBSRadio),30000);
    specInsToDBSRadio.click();
    /*enter value in Special instructions to DBS field*/
    var specInsToDBS = element(by.css('dbs-textarea[formcontrolname=messageToOrderingBank]'))
                         .element(by.tagName('textarea'));
    browser.wait(EC.visibilityOf(specInsToDBS),30000);
    specInsToDBS.sendKeys(parameterPage.specInstrucToDBS);
  };
  this.switchToframe = function () {
    var iframe = element(by.id('iframe1'));
    browser.wait(EC.presenceOf(iframe),60000);
    browser.switchTo().frame(iframe.getWebElement());
  };
};
module.exports = TTCreatePage;

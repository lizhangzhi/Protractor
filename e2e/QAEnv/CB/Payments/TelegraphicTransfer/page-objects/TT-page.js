/**
 * Created by Lee on 2017/6/3.
 */
var ParameterPage = require('./../../../../../common-page-objects/Parameter-page');
var EC = protractor.ExpectedConditions;

var TelegraphicTransferPage = function () {

  var parameterPage = new ParameterPage();

    this.createSGTelegraphicTransfer = function () {
      this.selectFromAccount();
      this.selectPaymentCurrency();
      this.enterAmount(parameterPage.amount);
      this.selectBeneficiary();
      this.enterPaymentDetails(parameterPage.paymentdetails);
      this.selectAdvice();
      this.enterEmailAddress(parameterPage.EmailAddress);
      this.enterInvoice(parameterPage.invoiceDetails);
      this.enterClientRef(parameterPage.clientReference);
      this.enterMessageToBank(parameterPage.insToDBS);
      this.enterTransactionNote(parameterPage.transactionNote);
      this.clickPreviewBtn();
      this.clickSubmitBtn();
    };
    this.selectFromAccount = function () {
      /*select a from account*/
      var fromAccount = element(by.id('fromParty'))
                            .element(by.cssContainingText('option[role=option]','LEONA ALBRECHT - 0018001843 - SGD'));
      browser.wait(EC.elementToBeClickable(fromAccount),30000);
      fromAccount.click();
    };
    this.selectPaymentCurrency = function () {
      /*select a payment currency*/
      var paymentCurrency = element(by.id('paymentCurrency_currencyCode'))
                                .element(by.css('option[value=SGD]'));
      browser.wait(EC.elementToBeClickable(paymentCurrency),30000);
      paymentCurrency.click();
    };
    this.enterAmount = function (value) {
      /*enter amount*/
      var amount = element(by.id('amount_value_control'));
      browser.wait(EC.visibilityOf(amount),30000);
      amount.sendKeys(value);
    };
    this.selectBeneficiary = function () {
      /*select an existing beneficiary*/
      var existingPayee = element(by.id('toParty'))
                              .all(by.tagName('option')).get(2);
      browser.wait(EC.elementToBeClickable(existingPayee),30000);
      existingPayee.click();
    };
    this.enterPaymentDetails = function (value) {
      /*enter value in Payment details to the payee bank field*/
      var paymentDetails = element(by.id('details'));
      browser.wait(EC.visibilityOf(paymentDetails),30000);
      paymentDetails.sendKeys(value);
    };
    this.selectAdvice = function () {
      /*select Email to send advice*/
      var sendAdvice = element(by.id('recipientAdvice_deliveryMode')).click()
                          .element(by.id('recipientAdvice_deliveryMode_email'));
      browser.wait(EC.elementToBeClickable(sendAdvice),30000);
      sendAdvice.click();
    };
    this.enterEmailAddress = function (value) {
      /*enter email address*/
      var emailAddress = element(by.id('recipientAdvice_delivery_deliveryAddresses_component_2_address'));
      browser.wait(EC.visibilityOf(emailAddress),30000);
      emailAddress.sendKeys(value);
    };
    this.enterInvoice = function (value) {
      /*enter Invoice Details*/
      var invoiceDetails = element(by.id('recipientAdvice_content'));
      browser.wait(EC.visibilityOf(invoiceDetails),30000);
      invoiceDetails.sendKeys(value);
    };
    this.enterClientRef = function (value) {
      /*enter first clien reference*/
      var clientReference1 = element(by.id('recipientAdvice_extraText1'));
      browser.wait(EC.visibilityOf(clientReference1),30000);
      clientReference1.sendKeys(value);
    };
    this.enterMessageToBank = function (value) {
      /*enter Instruction to DBS Bank*/
      var messageToBank = element(by.id('messageToBank'));
      browser.wait(EC.visibilityOf(messageToBank),30000);
      messageToBank.sendKeys(value);
    };
    this.enterTransactionNote = function (value) {
      /*enter Transaction Notes*/
      var transactionNote = element(by.id('transactionNote'));
      browser.wait(EC.visibilityOf(transactionNote),30000);
      transactionNote.sendKeys(value);
    };
    this.clickPreviewBtn = function () {
      /*click button to preview page*/
      var previewBtn = element(by.id('previewButton_Link'));
      browser.wait(EC.elementToBeClickable(previewBtn),30000);
      previewBtn.click();
    };
    this.clickSubmitBtn = function () {
      /*click button to submit */
      browser.wait(EC.textToBePresentInElement(element(by.css('.sectionBoxTitle')), 'Preview Telegraphic Transfer'), 20000);
      var submitButton = element(by.id('submitButton_Link'));
      browser.wait(EC.elementToBeClickable(submitButton),30000);
      browser.executeScript("arguments[0].click();", submitButton.getWebElement());
    };
};
module.exports = TelegraphicTransferPage;

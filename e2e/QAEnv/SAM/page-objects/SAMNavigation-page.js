/**
 * Created by Lee on 2017/6/1.
 */
var EC = protractor.ExpectedConditions;
var SAMNavigationPage = function () {
    this.toTransactionEnquiry = function () {
      /*Click OPERATION menu*/
      var operation = element(by.linkText('OPERATIONS'));
      browser.wait(EC.elementToBeClickable(operation),30000);
      operation.click();
      /*Click Transaction Enquiry menu*/
      var transactionEnquiry = element(by.linkText('TRANSACTION ENQUIRY'));
      browser.wait(EC.elementToBeClickable(transactionEnquiry),30000);
      transactionEnquiry.click();
    };
    this.toFileUploadEnquiry = function () {
      /*Click OPERATION menu*/
      var operation = element(by.linkText('OPERATIONS'));
      browser.wait(EC.elementToBeClickable(operation),30000);
      operation.click();
      /*Click File Upload Enquiry menu*/
      var fileUploadEnquiry = element(by.linkText('FILE UPLOAD ENQUIRY'));
      browser.wait(EC.elementToBeClickable(fileUploadEnquiry),30000);
      fileUploadEnquiry.click();
    };
};
module.exports = SAMNavigationPage;

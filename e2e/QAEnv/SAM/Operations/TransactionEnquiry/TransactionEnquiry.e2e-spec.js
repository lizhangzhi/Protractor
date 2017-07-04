/**
 * Created by Lee on 2017/6/1.
 */
var LoginPage = require('./../../../../common-page-objects/Login-page');
var ParameterPage = require('./../../../../common-page-objects/Parameter-page');
var TransactionEnquiryPage = require('./page-objects/TransactionEnquiry-page');
var EC = protractor.ExpectedConditions;

describe('Transaction Enquiry',function () {
  var loginPage = new LoginPage();
  var parameterPage = new ParameterPage();
  var transactionEnquiryPage = new TransactionEnquiryPage();

  beforeAll(function () {
    loginPage.login248SAM(parameterPage.SAMUser1);
    transactionEnquiryPage.viewTransaction();
  });

  it('Transaction Enquiry',function () {
    /*check view transaction page*/
    var headLinke = element(by.css('.headline'));
    browser.wait(EC.textToBePresentInElement(headLinke,'View'),30000);
    expect(headLinke.getText()).toContain('View');
  });
});

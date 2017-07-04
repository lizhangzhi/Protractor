/**
 * Created by Lee on 2017/6/1.
 */
var LoginPage = require('./../../../../common-page-objects/Login-page');
var ParameterPage = require('./../../../../common-page-objects/Parameter-page');
var FileUploadEnquiryPage = require('./page-objects/FileUploadEnquiry-page');
var EC = protractor.ExpectedConditions;

describe('File Upload Enquiry',function () {
  var loginPage = new LoginPage();
  var parameterPage = new ParameterPage();
  var fileUploadEnquiryPage = new FileUploadEnquiryPage();

  beforeAll(function () {
    loginPage.login248SAM(parameterPage.SAMUser1);
    fileUploadEnquiryPage.viewTransaction();
  });

  it('File Upload Enquiry',function () {
    /*check view transaction page*/
    var headLinke = element(by.css('.headline'));
    browser.wait(EC.textToBePresentInElement(headLinke,'View'),30000);
    expect(headLinke.getText()).toContain('View');
  });
});

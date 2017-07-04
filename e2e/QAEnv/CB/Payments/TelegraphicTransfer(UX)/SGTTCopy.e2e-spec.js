/**
 * Created by Lee on 2017/5/17.
 */
var LoginPage = require('./../../../../common-page-objects/Login-page');
var NavigationPage = require('./../../../../common-page-objects/Navigation-page');
var GetRefToViewPage = require('./../../../../common-page-objects/GetRefToView-page');
var ParameterPage = require('./../../../../common-page-objects/Parameter-page');
var TTCreatePage = require('./page-objects/TTCreate-page');
var EC = protractor.ExpectedConditions;

describe('Copy a SG Telegraphic Transfer(UX)',function () {
  var loginPage = new LoginPage();
  var navigationPage = new NavigationPage();
  var getRefToViewPage = new GetRefToViewPage();
  var parameterPage = new ParameterPage();
  var tTCreatePage = new TTCreatePage();

  beforeAll(function () {
    /*login 245 env*/
    loginPage.login245Env(parameterPage.CBCompanyId1,parameterPage.CBUser1);
    /*to create TelegraphicTransfer(UX) page*/
    navigationPage.toCreateTTUXPage();
    /*call function to create a TelegraphicTransfer(UX)*/
    tTCreatePage.createSGTelegraphicTransfer();
    /*get the customer reference generated*/
    element(by.css('.alert.alert-info'))
      .element(by.tagName('label')).getText().then(function(text) {
      var custReference = text.split(" ")[2];

      getRefToViewPage.getRefToViewTransferCenter(custReference);
    });
  });
  it('Copy a SG Telegraphic Transfer(UX)',function () {
    /*wait for Copy button clickable then click it*/
    tTCreatePage.switchToframe();
    browser.sleep(1000);
    var copyButton = element(by.buttonText('Copy'));
    browser.wait(EC.elementToBeClickable(copyButton),30000);
    copyButton.click();
    /*change the value in Payment Details field*/
    var paymentDetails= element(by.css('dbs-textarea[formcontrolname=paymentDetail]'))
                          .element(by.id('md-textbox-0-input'));
    browser.wait(EC.visibilityOf(paymentDetails),5000);
    paymentDetails.clear();
    paymentDetails.sendKeys('This transaction copied from existing transaction');
    /*click button  to preview page*/
    var nextButton = element(by.buttonText('Next'));
    nextButton.click();
    /*click button  to submit */
    var submitButton = element(by.buttonText('Submit'));
    browser.wait(EC.elementToBeClickable(submitButton),30000);
    submitButton.click();
    /*wait for Copy successful text display*/
    var header = element(by.css('.form-section-header'));
    browser.wait(EC.textToBePresentInElement(header,'Your transfer has been submitted'),30000);
    expect(header.getText()).toEqual('Your transfer has been submitted');
  });
});

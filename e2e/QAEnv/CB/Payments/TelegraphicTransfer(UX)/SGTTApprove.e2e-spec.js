/**
 * Created by Lee on 2017/5/17.
 */
var LoginPage = require('./../../../../common-page-objects/Login-page');
var NavigationPage = require('./../../../../common-page-objects/Navigation-page');
var GetRefToViewPage = require('./../../../../common-page-objects/GetRefToView-page');
var ParameterPage = require('./../../../../common-page-objects/Parameter-page');
var TTCreatePage = require('./page-objects/TTCreate-page');
var EC = protractor.ExpectedConditions;

describe('Approve a SG Telegraphic Transfer(UX)',function () {
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
  it('Approve a SG Telegraphic Transfer(UX)',function () {
    /*wait for Approve button clickable then click it*/
    tTCreatePage.switchToframe();
    browser.sleep(1000);
    var approveButton = element(by.buttonText('Approve'));
    browser.wait(EC.elementToBeClickable(approveButton),30000);
    approveButton.click();
    /*click Send Challenge button*/
    var sendChallengeButton = element(by.buttonText('Send Challenge'));
    browser.wait(EC.elementToBeClickable(sendChallengeButton),30000);
    sendChallengeButton.click();
    /*enter response code*/
    var responseCode = element(by.css('input[name=responseCode]'));
    responseCode.sendKeys('1234');
    /*click Approve button*/
    browser.wait(EC.elementToBeClickable(approveButton),30000);
    approveButton.click();
    /*wait for approve successful text display*/
    var dialog = element(by.css('.mat-dialog-container'));
    browser.wait(EC.textToBePresentInElement(dialog,'Transaction approved'),30000);
    expect(dialog.getText()).toContain('Transaction approved');
    //   element(by.css('button[translate=labelDismiss]')).click();
  });
});

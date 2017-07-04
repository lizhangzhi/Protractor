/**
 * Created by Lee on 2017/6/21.
 */
var LoginPage = require('./../../../../../../common-page-objects/Login-page');
var NavigationPage = require('./../../../../../../common-page-objects/Navigation-page');
var ParameterPage = require('./../../../../../../common-page-objects/Parameter-page');
var GetRefToViewPage = require('./../../../../../../common-page-objects/GetRefToView-page');
var TelegraphicTransferUXPage = require('./../page-objects/TTUX-page');
var EC = protractor.ExpectedConditions;

describe('Approve a Telegraphic Transfer created through Single Payment UX',function () {

  var loginPage = new LoginPage();
  var navigationPage = new NavigationPage();
  var parameterPage = new ParameterPage();
  var getRefToViewPage = new GetRefToViewPage();
  var telegraphicTransferUXPage = new TelegraphicTransferUXPage();

  beforeAll(function () {
    /*login 245 env*/
    loginPage.login245Env(parameterPage.CBCompanyId1,parameterPage.CBUser1);
    /*to Single Payment UX page*/
    navigationPage.toSinglePaymentUXPage();
    /*enter fields to create Telegraphic Transfer UX*/
    telegraphicTransferUXPage.createSGTTUX();
    /*get the customer reference generated*/
    browser.wait(EC.presenceOf(element(by.css('.alert.alert-info'))),30000);
    element(by.css('.alert.alert-info')).element(by.tagName('label')).getText().then(function(text) {
      var custReference = text.split(" ")[2];
      getRefToViewPage.getRefToViewTransferCenter(custReference);
    });
    /*approve Telegraphic Transfer*/
    telegraphicTransferUXPage.approveSGTTUX();
  });
  it('Approve a Telegraphic Transfer created through Single Payment UX',function () {
    /*wait for approve successful text display*/
    var dialog = element(by.css('.cdk-focus-trap-content')).element(by.tagName('h2'));
    browser.wait(EC.textToBePresentInElement(dialog,'Transaction approved'),30000);
    expect(dialog.getText()).toContain('Transaction approved');
  });
});

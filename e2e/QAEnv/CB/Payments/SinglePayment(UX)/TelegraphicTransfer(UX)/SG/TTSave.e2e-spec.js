/**
 * Created by Lee on 2017/7/3.
 */
var LoginPage = require('./../../../../../../common-page-objects/Login-page');
var NavigationPage = require('./../../../../../../common-page-objects/Navigation-page');
var ParameterPage = require('./../../../../../../common-page-objects/Parameter-page');
var TelegraphicTransferUXPage = require('./../page-objects/TTUX-page');
var EC = protractor.ExpectedConditions;

describe('Save a Telegraphic Transfer through Single Payment UX',function () {

  var loginPage = new LoginPage();
  var navigationPage = new NavigationPage();
  var parameterPage = new ParameterPage();
  var telegraphicTransferUXPage = new TelegraphicTransferUXPage();

  beforeAll(function () {
    /*login 245 env*/
    loginPage.login245Env(parameterPage.CBCompanyId1,parameterPage.CBUser1);
    /*to Single Payment UX page*/
    navigationPage.toSinglePaymentUXPage();
    /*enter fields to save Telegraphic Transfer UX*/
    telegraphicTransferUXPage.saveSGTTUX();

  });
  it('Save a Telegraphic Transfer through Single Payment UX',function () {

    /*wait for save successful text display*/
    var dialog = element(by.css('.cdk-focus-trap-content')).element(by.tagName('h2'));
    browser.wait(EC.textToBePresentInElement(dialog,'Transfer saved'),30000);
    expect(dialog.getText()).toContain('Transfer saved');
  });
});

/**
 * Created by Lee on 2017/5/17.
 */
var LoginPage = require('./../../../../../common-page-objects/Login-page');
var NavigationPage = require('./../../../../../common-page-objects/Navigation-page');
var ParameterPage = require('./../../../../../common-page-objects/Parameter-page');
var TelegraphicTransferUXPage = require('./../page-objects/TTUX-page');

var EC = protractor.ExpectedConditions;

describe('Save a SG Telegraphic Transfer(UX)',function () {
  var loginPage = new LoginPage();
  var navigationPage = new NavigationPage();
  var parameterPage = new ParameterPage();
  var telegraphicTransferUXPage = new TelegraphicTransferUXPage();

  beforeAll(function () {
    /*login 245 env*/
    loginPage.login245Env(parameterPage.CBCompanyId1,parameterPage.CBUser1);
    /*to create TelegraphicTransfer(UX) page*/
    navigationPage.toCreateTTUXPage();
    /*enter field with information*/
    telegraphicTransferUXPage.saveSGTelegraphicTransfer();
  });
  it('Save a SG Telegraphic Transfer(UX)',function () {
    /*wait for Save successful text display*/
    var dialog = element(by.css('.cdk-focus-trap-content')).element(by.tagName('h2'));
    browser.wait(EC.textToBePresentInElement(dialog,'Transfer saved'),30000);
    expect(dialog.getText()).toContain('Transfer saved');
  });
});

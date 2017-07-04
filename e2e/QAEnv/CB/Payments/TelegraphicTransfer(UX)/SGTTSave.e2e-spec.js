/**
 * Created by Lee on 2017/5/17.
 */
var LoginPage = require('./../../../../common-page-objects/Login-page');
var NavigationPage = require('./../../../../common-page-objects/Navigation-page');
var ParameterPage = require('./../../../../common-page-objects/Parameter-page');
var TTCreatePage = require('./page-objects/TTCreate-page');

var EC = protractor.ExpectedConditions;

describe('Save a SG Telegraphic Transfer(UX)',function () {
  var loginPage = new LoginPage();
  var navigationPage = new NavigationPage();
  var parameterPage = new ParameterPage();
  var tTCreatePage = new TTCreatePage();

  beforeAll(function () {
    /*login 245 env*/
    loginPage.login245Env(parameterPage.CBCompanyId1,parameterPage.CBUser1);
    /*to create TelegraphicTransfer(UX) page*/
    navigationPage.toCreateTTUXPage();
    /*enter field with information*/
    tTCreatePage.EnterInfo();
  });
  it('Save a SG Telegraphic Transfer(UX)',function () {
    /*click Save as Draft button*/
    var saveButton = element(by.buttonText('Save as draft'));
    browser.wait(EC.elementToBeClickable(saveButton),30000);
    saveButton.click();
    /*wait for Save successful text display*/
    var dialog = element(by.css('.mat-dialog-container'));
    browser.wait(EC.textToBePresentInElement(dialog,'Transfer saved'),30000);
    expect(dialog.getText()).toContain('Transfer saved');
  });
});

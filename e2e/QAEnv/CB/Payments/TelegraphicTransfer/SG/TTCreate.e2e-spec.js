/**
 * Created by Lee on 2017/6/2.
 */
var LoginPage = require('./../../../../../common-page-objects/Login-page');
var NavigationPage = require('./../../../../../common-page-objects/Navigation-page');
var ParameterPage = require('./../../../../../common-page-objects/Parameter-page');
var TTPage = require('./../page-objects/TT-page');
var EC = protractor.ExpectedConditions;

describe('Create a SG Telegraphic Transfer',function () {

  var loginPage = new LoginPage();
  var navigationPage = new NavigationPage();
  var parameterPage = new ParameterPage();
  var ttPage = new TTPage();

  beforeAll(function () {
    /*login 245 env*/
    loginPage.login245Env(parameterPage.CBCompanyId1,parameterPage.CBUser1);
    /*to Create a Telegraphic Transfer page*/
    navigationPage.toCreateTTPage();
    /*enter fields to create Telegraphic Transfer*/
    ttPage.createSGTelegraphicTransfer();

  });
  it('Create a SG Telegraphic Transfer',function () {

    var header = element(by.id('my_list'));
    browser.wait(EC.textToBePresentInElement(header,'has been created successfully'),60000);
    expect(header.getText()).toContain('has been created successfully');
  });
});

/**
 * Created by Lee on 2017/5/9.
 */
var LoginPage = require('./../../../../common-page-objects/Login-page');
var NavigationPage = require('./../../../../common-page-objects/Navigation-page');
var ParameterPage = require('./../../../../common-page-objects/Parameter-page');
var TTCreatePage = require('./page-objects/TTCreate-page');
var EC = protractor.ExpectedConditions;

// var TimeStampPage  = require('./../common-page-objects/Time-page');
// var CreateFolderPage = require('./../common-page-objects/CreateFolder-page');
// var Screenshot = require('./../common-page-objects/Screenshot-page');

describe('Create a SG Telegraphic Transfer(UX)',function () {

  var loginPage = new LoginPage();
  var navigationPage = new NavigationPage();
  var parameterPage = new ParameterPage();
  var tTCreatePage = new TTCreatePage();
  // var timeStampPage  = new TimeStampPage();
  // var createFolderPage = new CreateFolderPage();
  // var screenshot = new Screenshot();
  // var screenshotname = createFolderPage.path+"/"+timeStampPage.getNowTime()+"createTT"+".png";

  beforeAll(function () {
    // createFolderPage.createFolder();
    /*login 245 env*/
    loginPage.login245Env(parameterPage.CBCompanyId1,parameterPage.CBUser1);
    /*to Make a Telegraphic Transfer UX page*/
    navigationPage.toCreateTTUXPage();
  });
  it('Create a SG Telegraphic Transfer(UX)',function () {
    // screenshot.getScreenshot(screenshotname)
    /*call function to create TelegraphicTransfer(UX)*/
    tTCreatePage.createSGTelegraphicTransfer();
    var header = element(by.css('.form-section-header'));
    browser.wait(EC.textToBePresentInElement(header,'Your transfer has been submitted'),30000);
    expect(header.getText()).toEqual('Your transfer has been submitted');
  });
});

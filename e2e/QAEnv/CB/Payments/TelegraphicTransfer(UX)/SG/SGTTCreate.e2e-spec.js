/**
 * Created by Lee on 2017/5/9.
 */
var LoginPage = require('./../../../../../common-page-objects/Login-page');
var NavigationPage = require('./../../../../../common-page-objects/Navigation-page');
var ParameterPage = require('./../../../../../common-page-objects/Parameter-page');
var TelegraphicTransferUXPage = require('./../page-objects/TTUX-page');
var EC = protractor.ExpectedConditions;

// var TimeStampPage  = require('./../common-page-objects/Time-page');
// var CreateFolderPage = require('./../common-page-objects/CreateFolder-page');
// var Screenshot = require('./../common-page-objects/Screenshot-page');

describe('Create a SG Telegraphic Transfer(UX)',function () {

  var loginPage = new LoginPage();
  var navigationPage = new NavigationPage();
  var parameterPage = new ParameterPage();
  var telegraphicTransferUXPage = new TelegraphicTransferUXPage();
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
    /*call function to create TelegraphicTransfer(UX)*/
    telegraphicTransferUXPage.createSGTelegraphicTransfer();
  });
  it('Create a SG Telegraphic Transfer(UX)',function () {
    // screenshot.getScreenshot(screenshotname)
    var header = element.all(by.css('.form-section-header')).first();
    browser.wait(EC.textToBePresentInElement(header,'Your transfer has been submitted'),30000);
    expect(header.getText()).toEqual('Your transfer has been submitted');
  });
});

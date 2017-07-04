/**
 * Created by Lee on 2017/6/1.
 */
var LoginPage = require('./../../../common-page-objects/Login-page');
var ParameterPage = require('./../../../common-page-objects/Parameter-page');
var GetCorporationToViewPage = require('./../page-objects/GetCorporationToView-page');
var ProfilePage = require('./page-objects/Profile-page');
var EC = protractor.ExpectedConditions;

describe('Create a new profile',function () {
  var loginPage = new LoginPage();
  var parameterPage = new ParameterPage();
  var getCorporationToViewPage = new GetCorporationToViewPage();
  var profilePage = new ProfilePage();

  beforeAll(function () {
    loginPage.login248SAM(parameterPage.SAMUser1);
    getCorporationToViewPage.toViewCorporationPage();
    profilePage.toAuthorizationList();
    profilePage.newProfile();
  });

  it('Create a new profile',function () {
    /*create profile successfully*/
    var message = element(by.id('msgBlockSuccess-successText'));
    browser.wait(EC.textToBePresentInElement(message,'Successful Submit'),30000);
    expect(message.getText()).toContain('Successful Submit');
  });
});

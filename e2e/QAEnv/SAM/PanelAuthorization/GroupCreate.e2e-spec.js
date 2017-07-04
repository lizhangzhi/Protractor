/**
 * Created by Lee on 2017/6/1.
 */
var LoginPage = require('./../../../common-page-objects/Login-page');
var ParameterPage = require('./../../../common-page-objects/Parameter-page');
var GetCorporationToViewPage = require('./../page-objects/GetCorporationToView-page');
var ProfilePage = require('./page-objects/Profile-page');
var GroupPage = require('./page-objects/Group-page')
var EC = protractor.ExpectedConditions;

describe('Create a new group',function () {
  var loginPage = new LoginPage();
  var parameterPage = new ParameterPage();
  var getCorporationToViewPage = new GetCorporationToViewPage();
  var profilePage = new ProfilePage();
  var groupPage = new GroupPage();

  beforeAll(function () {
    loginPage.login248SAM(parameterPage.SAMUser1);
    getCorporationToViewPage.toViewCorporationPage();
    profilePage.toAuthorizationList();
    groupPage.newGroup();
  });

  it('Create a new group',function () {
    /*create group successfully*/
    var message = element(by.id('msgBlockSuccess-successText'));
    browser.wait(EC.textToBePresentInElement(message,'Successful Submit'),30000);
    expect(message.getText()).toContain('Successful Submit');
  });
});

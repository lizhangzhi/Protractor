/**
 * Created by Lee on 2017/5/31.
 */
var LoginPage = require('./../../../common-page-objects/Login-page');
var GetCorporationToViewPage = require('./../page-objects/GetCorporationToView-page');
var ParameterPage = require('./../../../common-page-objects/Parameter-page');
var UserPage = require('./page-objects/User-page');
var EC = protractor.ExpectedConditions;

describe('Create a new User',function () {
  var loginPage = new LoginPage();
  var getCorporationToViewPage = new GetCorporationToViewPage();
  var parameterPage = new ParameterPage();
  var userPage = new UserPage();

  beforeAll(function () {

      loginPage.login245SAM(parameterPage.SAMUser1);
      getCorporationToViewPage.toViewCorporationPage();
      userPage.newUser();
  });

  it('Create a new user',function () {

      /*create successfully*/
      var message = element(by.id('msgBlockSuccess-successText'));
      browser.wait(EC.textToBePresentInElement(message,'Successful Submit'),30000);
      expect(message.getText()).toContain('Successful Submit');
  });
});

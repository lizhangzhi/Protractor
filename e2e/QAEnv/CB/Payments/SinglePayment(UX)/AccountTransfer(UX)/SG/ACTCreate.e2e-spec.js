/**
 * Created by Lee on 2017/6/19.
 */
var LoginPage = require('./../../../../../../common-page-objects/Login-page');
var NavigationPage = require('./../../../../../../common-page-objects/Navigation-page');
var ParameterPage = require('./../../../../../../common-page-objects/Parameter-page');
var AccountTransferUXPage = require('./../page-objects/ACTUX-page');
var EC = protractor.ExpectedConditions;

describe('Create a Account Transfer through Single Payment UX',function () {

  var loginPage = new LoginPage();
  var navigationPage = new NavigationPage();
  var parameterPage = new ParameterPage();
  var accountTransferUXPage = new AccountTransferUXPage();

  beforeAll(function () {
    /*login 245 env*/
    loginPage.login245Env(parameterPage.CBCompanyId1,parameterPage.CBUser1);
    /*to Single Payment UX page*/
    navigationPage.toSinglePaymentUXPage();
    /*enter fields to create Account Transfer UX*/
    accountTransferUXPage.createSGACTUX();

  });
  it('Create a Account Transfer through Single Payment UX',function () {

    var header = element.all(by.css('.form-section-header')).first();
    browser.wait(EC.textToBePresentInElement(header,'Your transfer has been submitted'),30000);
    expect(header.getText()).toEqual('Your transfer has been submitted');

  });
});

/**
 * Created by Lee on 2017/7/3.
 */
var LoginPage = require('./../../../../../common-page-objects/Login-page');
var NavigationPage = require('./../../../../../common-page-objects/Navigation-page');
var ParameterPage = require('./../../../../../common-page-objects/Parameter-page');
var MEPSPaymentUXPage = require('./page-objects/MEPSUX-page');
var EC = protractor.ExpectedConditions;

describe('Create a MEPS Payment through Single Payment UX',function () {

  var loginPage = new LoginPage();
  var navigationPage = new NavigationPage();
  var parameterPage = new ParameterPage();
  var mepsPaymentUXPage = new MEPSPaymentUXPage();

  beforeAll(function () {
    /*login 245 env*/
    loginPage.login245Env(parameterPage.CBCompanyId1,parameterPage.CBUser1);
    /*to Single Payment UX page*/
    navigationPage.toSinglePaymentUXPage();
    /*enter fields to create MEPS Payment UX*/
    mepsPaymentUXPage.createMEPSUX();

  });
  it('Create a MEPS Payment through Single Payment UX',function () {

    var header = element.all(by.css('.form-section-header')).first();
    browser.wait(EC.textToBePresentInElement(header,'Your transfer has been submitted'),30000);
    expect(header.getText()).toEqual('Your transfer has been submitted');

  });
});

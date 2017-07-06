/**
 * Created by Lee on 2017/7/5.
 */
var LoginPage = require('./../../../../../common-page-objects/Login-page');
var NavigationPage = require('./../../../../../common-page-objects/Navigation-page');
var ParameterPage = require('./../../../../../common-page-objects/Parameter-page');
var GIROPaymentUXPage = require('./page-objects/GIROUX-page');
var EC = protractor.ExpectedConditions;

describe('Create a GIRO Payment through Single Payment UX',function () {

  var loginPage = new LoginPage();
  var navigationPage = new NavigationPage();
  var parameterPage = new ParameterPage();
  var giroPaymentUXPage = new GIROPaymentUXPage();

  beforeAll(function () {
    /*login 245 env*/
    loginPage.login245Env(parameterPage.CBCompanyId1,parameterPage.CBUser1);
    /*to Single Payment UX page*/
    navigationPage.toSinglePaymentUXPage();
    /*enter fields to create GIRO Payment UX*/
    giroPaymentUXPage.createGIROUX();
  });
  it('Create a GIRO Payment through Single Payment UX',function () {

    var header = element.all(by.css('.form-section-header')).first();
    browser.wait(EC.textToBePresentInElement(header,'Your transfer has been submitted'),30000);
    expect(header.getText()).toEqual('Your transfer has been submitted');
  });
});

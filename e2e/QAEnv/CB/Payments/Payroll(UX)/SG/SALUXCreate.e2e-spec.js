/**
 * Created by Lee on 2017/6/9.
 */
var LoginPage = require('./../../../../../common-page-objects/Login-page');
var NavigationPage = require('./../../../../../common-page-objects/Navigation-page');
var ParameterPage = require('./../../../../../common-page-objects/Parameter-page');
var PayrollUXPage = require('./../page-objects/SALUX-page');
var EC = protractor.ExpectedConditions;

describe('Create a SG Payroll UX',function () {

  var loginPage = new LoginPage();
  var navigationPage = new NavigationPage();
  var parameterPage = new ParameterPage();
  var payrollUXPage = new PayrollUXPage();

  beforeAll(function () {
    /*login 245 env*/
    loginPage.login245Env(parameterPage.CBCompanyId1,parameterPage.CBUser1);
    /*to Create a Payroll UX page*/
    navigationPage.toCreateSALUXPage();
    /*enter fields to create Payroll UX*/
    payrollUXPage.createSGPayrollUX();

  });
  it('Create a SG Payroll UX',function () {
    var header = element.all(by.css('.form-section-header')).first();
    browser.wait(EC.textToBePresentInElement(header,'Your payroll payment has been submitted'),30000);
    expect(header.getText()).toEqual('Your payroll payment has been submitted');
  });
});

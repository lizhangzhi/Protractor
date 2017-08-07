/**
 * Created by Lee on 2017/6/9.
 */
var LoginPage = require('./../../../../../common-page-objects/Login-page');
var NavigationPage = require('./../../../../../common-page-objects/Navigation-page');
var ParameterPage = require('./../../../../../common-page-objects/Parameter-page');
var BulkCollectionUXPage = require('./../page-objects/COLUX-page');
var EC = protractor.ExpectedConditions;

describe('Create a SG Bulk Collection UX',function () {

  var loginPage = new LoginPage();
  var navigationPage = new NavigationPage();
  var parameterPage = new ParameterPage();
  var bulkCollectionUXPage = new BulkCollectionUXPage();

  beforeAll(function () {
    /*login 245 env*/
    loginPage.login245Env(parameterPage.CBCompanyId1,parameterPage.CBUser1);
    /*to Create a Bulk Collection UX page*/
    navigationPage.toCreateCOLUXPage();
    /*enter fields to create Bulk Collection UX*/
    bulkCollectionUXPage.createSGBulkCollectionUX();
  });
  it('Create a SG Bulk Collection UX',function () {
    var header = element.all(by.css('.form-section-header')).first();
    browser.wait(EC.textToBePresentInElement(header,'Your bulk collection has been submitted'),30000);
    expect(header.getText()).toEqual('Your bulk collection has been submitted');
  });
});

/**
 * Created by Lee on 2017/5/17.
 */
var LoginPage = require('./../../../../../common-page-objects/Login-page');
var NavigationPage = require('./../../../../../common-page-objects/Navigation-page');
var GetRefToViewPage = require('./../../../../../common-page-objects/GetRefToView-page');
var ParameterPage = require('./../../../../../common-page-objects/Parameter-page');
var TelegraphicTransferUXPage = require('./../page-objects/TTUX-page');
var EC = protractor.ExpectedConditions;

describe('Copy a SG Telegraphic Transfer(UX)',function () {
  var loginPage = new LoginPage();
  var navigationPage = new NavigationPage();
  var getRefToViewPage = new GetRefToViewPage();
  var parameterPage = new ParameterPage();
  var telegraphicTransferUXPage = new TelegraphicTransferUXPage();

  beforeAll(function () {
    /*login 245 env*/
    loginPage.login245Env(parameterPage.CBCompanyId1,parameterPage.CBUser1);
    /*to create TelegraphicTransfer(UX) page*/
    navigationPage.toCreateTTUXPage();
    /*call function to create a TelegraphicTransfer(UX)*/
    telegraphicTransferUXPage.createSGTelegraphicTransfer();
    /*get the customer reference generated*/
    browser.wait(EC.presenceOf(element(by.css('.alert.alert-info'))),30000);
    element(by.css('.alert.alert-info'))
      .element(by.tagName('label')).getText().then(function(text) {
      var custReference = text.split(" ")[2];

      getRefToViewPage.getRefToViewTransferCenter(custReference);
    });
    telegraphicTransferUXPage.copyTelegraphicTransfer();
  });
  it('Copy a SG Telegraphic Transfer(UX)',function () {
    /*wait for Copy successful text display*/
    var header = element.all(by.css('.form-section-header')).first();
    browser.wait(EC.textToBePresentInElement(header,'Your transfer has been submitted'),30000);
    expect(header.getText()).toEqual('Your transfer has been submitted');
  });
});

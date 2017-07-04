/**
 * Created by Lee on 2017/5/15.
 */
var LoginPage = require('./../../../../common-page-objects/Login-page');
var NavigationPage = require('./../../../../common-page-objects/Navigation-page');
var GetRefToViewPage = require('./../../../../common-page-objects/GetRefToView-page');
var ParameterPage = require('./../../../../common-page-objects/Parameter-page');
var TTCreatePage = require('./page-objects/TTCreate-page');
var EC = protractor.ExpectedConditions;

describe('Delete a SG Telegraphic Transfer(UX)',function () {
  var loginPage = new LoginPage();
  var navigationPage = new NavigationPage();
  var getRefToViewPage = new GetRefToViewPage();
  var parameterPage = new ParameterPage();
  var tTCreatePage = new TTCreatePage();

  beforeAll(function () {
    /*login 245 env*/
    loginPage.login245Env(parameterPage.CBCompanyId1,parameterPage.CBUser1);
    /*to create TelegraphicTransfer(UX) page*/
    navigationPage.toCreateTTUXPage();
    /*call function to create a TelegraphicTransfer(UX)*/
    tTCreatePage.createSGTelegraphicTransfer();
    /*get the customer reference generated*/
    element(by.css('.alert.alert-info'))
      .element(by.tagName('label')).getText().then(function(text) {
      var custReference = text.split(" ")[2];

      getRefToViewPage.getRefToViewTransferCenter(custReference);
    });
  });
  it('Delete a SG Telegraphic Transfer(UX)',function () {
      /*wait for Delete button clickable then click it*/
      tTCreatePage.switchToframe();
      browser.sleep(1000);
      var deleteButton = element(by.buttonText('Delete'));
      browser.wait(EC.elementToBeClickable(deleteButton),30000);
      deleteButton.click();
      /*wait for Delete button clickable then click it*/
      var deleteBtn = element(by.css('.btn-area')).all(by.tagName('button')).last();
      browser.wait(EC.elementToBeClickable(deleteBtn),30000);
      deleteBtn.click();
      /*wait for delete successful text display*/
      var dialog = element(by.css('.mat-dialog-container'));
      browser.wait(EC.textToBePresentInElement(dialog,'Transaction deleted'),30000);
      expect(dialog.getText()).toContain('Transaction deleted');
  });
});

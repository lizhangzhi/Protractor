/**
 * Created by Lee on 2017/7/4.
 */
var ParameterPage = require('./../../../../../../common-page-objects/Parameter-page');
var SinglePaymentUXPage = require('./../../page-objects/SinglePaymentUX-page');
var EC = protractor.ExpectedConditions;

var GIROPaymentUXPage = function () {

  var parameterPage = new ParameterPage();
  var singlePaymentUXPage = new SinglePaymentUXPage();

  this.createGIROUX = function () {
    singlePaymentUXPage.switchToframe();
    singlePaymentUXPage.waitingForPayeeLoad();
    browser.sleep(1000);
    singlePaymentUXPage.selectFromAccount();
    singlePaymentUXPage.enterAmount(parameterPage.amount);
    this.selectBeneficiary();
    this.selectChooseDate();
    this.selectPriority();
    singlePaymentUXPage.selectPurposeCode();
    singlePaymentUXPage.clickNextBtn();
    singlePaymentUXPage.clickSubmitBtn();
  };
  this.selectBeneficiary = function () {
    /*select an existing beneficiary*/
    var existingPayee = element(by.css('auto-complete[formcontrolname=payee]')).click().element(by.cssContainingText('.search-result',parameterPage.Domesticbeneficiary));
    browser.wait(EC.elementToBeClickable(existingPayee),30000);
    existingPayee.click();
  };
  this.selectChooseDate = function () {
    /*select Choose Date as payment date*/
    var chooseDate = element(by.css('label[for=set_date]')).element(by.css('.info-label'));
    browser.wait(EC.elementToBeClickable(chooseDate),30000);
    chooseDate.click();
  };
  this.selectPriority = function () {
    /*select GIRO Payment as priority*/
    var priority = element.all(by.tagName('accordion-group')).get(4);
    browser.wait(EC.elementToBeClickable(priority),30000);
    priority.click();
  };
};
module.exports = GIROPaymentUXPage;

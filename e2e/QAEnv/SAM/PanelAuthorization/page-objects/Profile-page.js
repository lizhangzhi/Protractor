/**
 * Created by Lee on 2017/6/1.
 */
var TimeStampPage = require('./../../../../common-page-objects/Time-page');
var ParameterPage = require('./../../../../common-page-objects/Parameter-page');
var EC = protractor.ExpectedConditions;

var ProfilePage = function () {
  var timeStampPage = new TimeStampPage();
  var parameterPage = new ParameterPage();

  this.toAuthorizationList = function () {
    /*click Administer Panel Authorization >> link*/
    var panelAuthorization = element(by.partialLinkText('Administer Panel Authorization'))
    browser.wait(EC.elementToBeClickable(panelAuthorization),30000);
    panelAuthorization.click();
  };
  this.newProfile = function () {
    /*click New Profile button*/
    var newProfileButton = element(by.buttonText('New Profile'));
    browser.wait(EC.elementToBeClickable(newProfileButton),30000);
    newProfileButton.click();
    /*Enter profile name*/
    var profileName = element(by.css('input[name=profileName]'));
    browser.wait(EC.visibilityOf(profileName),30000);
    profileName.sendKeys(parameterPage.newProfileName+timeStampPage.getNowDate()+timeStampPage.getNowTime());
    /*Enter Weight*/
    var weight = element(by.css('input[name=weight]'));
    browser.wait(EC.visibilityOf(weight),30000);
    weight.sendKeys(parameterPage.profileWeight);
    /*Enter Profile Description*/
    var profileDescription = element(by.css('input[name=profileDesc]'));
    browser.wait(EC.visibilityOf(profileDescription),30000);
    profileDescription.sendKeys(parameterPage.profileDescription);
    /*Select All Payment Type*/
    var allPaymentType = element(by.linkText('All'));
    browser.wait(EC.elementToBeClickable(allPaymentType),30000);
    allPaymentType.click();
    /*Enter Min Amount*/
    var minAmount = element.all(by.css('.datagrey')).first()
                      .element(by.tagName('input'));
    browser.wait(EC.visibilityOf(minAmount),30000);
    minAmount.sendKeys(parameterPage.profileMinAmount);
    /*Enter Max Amount*/
    var maxAmount = element.all(by.css('.datagrey')).get(1)
                      .element(by.tagName('input'));
    browser.wait(EC.visibilityOf(maxAmount),30000);
    maxAmount.sendKeys(parameterPage.profileMaxAmount);
    /*Select group*/
    var selectedGroup = element.all(by.tagName('select')).get(4).click()
                          .all(by.tagName('option')).get(1);
    browser.wait(EC.elementToBeClickable(selectedGroup),30000);
    selectedGroup.click();
    /*click Preview Profile button*/
    var previewProfileBtn = element(by.css('input[name=submit_preview]'));
    browser.wait(EC.elementToBeClickable(previewProfileBtn),30000);
    previewProfileBtn.click();
    /*click Submit Profile button */
    var submitProfileBtn = element(by.css('input[name=submit_submit]'));
    browser.wait(EC.elementToBeClickable(submitProfileBtn),30000);
    submitProfileBtn.click();
  };
};
module.exports = ProfilePage;


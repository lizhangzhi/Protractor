/**
 * Created by Lee on 2017/5/17.
 */
var NavigationPage = require('./../common-page-objects/Navigation-page');
var EC = protractor.ExpectedConditions;

var GetRefToViewPage = function () {
    var navigationPage = new NavigationPage();

  this.getRefToViewTransferCenter = function (custReference) {

    browser.switchTo().defaultContent();
    /*to Transfer Center page*/
    navigationPage.toTransferCenterPage();
    /*click Filter button*/
    this.clickFilterBtn();
    /*enter Customer Reference in filter*/
    this.enterReference(custReference);
    /*enter Customer Reference in filter*/
    this.clickGoBtn();
    /*wait for transactiion searched out then lick reference link*/
    this.clickReferenceLink(custReference);
  };
  /*wait for page load until Filter button can click*/
  this.clickFilterBtn = function () {
    var filterBtn = element(by.id('pendingA'));
    browser.wait(EC.elementToBeClickable(filterBtn),30000);
    filterBtn.click();
  };
  /*enter Customer Reference in filter*/
  this.enterReference = function (custReference) {
    var reference = element(by.id('filterReference'));
    browser.wait(EC.visibilityOf(reference),30000);
    reference.sendKeys(custReference);
  };
  /*click Go button to search*/
  this.clickGoBtn = function () {
    var goBtn = element(by.id('ButtonCtrl_Link'));
    browser.wait(EC.elementToBeClickable(goBtn),30000);
    goBtn.click();
  };
  /*wait for transactiion searched out then lick reference link*/
  this.clickReferenceLink = function (custReference) {
    browser.wait(EC.elementToBeClickable(element(by.linkText(custReference))),30000);
    element(by.linkText(custReference)).click();
  };
};
module.exports = GetRefToViewPage;

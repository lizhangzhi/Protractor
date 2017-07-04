/**
 * Created by Lee on 2017/5/16.
 */
var NavigationPage = function () {

  /*open Single Payment menu*/
  this.toSinglePaymentUXPage = function () {
    browser.executeScript("document.getElementById('pmt').parentElement.children[1]." +
      "style='opacity:1; margin-left: 0; width:320px;'");
    browser.sleep(1000);
    element(by.linkText('Make a payment [New]')).click();
    browser.sleep(5000);
  };
  /*open Telegraphic Transfer menu*/
  this.toCreateTTPage = function () {
    browser.executeScript("document.getElementById('pmt').parentElement.children[1]." +
      "style='opacity:1; margin-left: 0; width:320px;'");
    browser.sleep(1000);
    element(by.linkText('Telegraphic Transfer')).click();
    browser.sleep(5000);
  };
  /*open Telegraphic Transfer UX menu*/
  this.toCreateTTUXPage = function () {
    browser.executeScript("document.getElementById('pmt').parentElement.children[1]." +
      "style='opacity:1; margin-left: 0; width:320px;'");
    browser.sleep(1000);
    element(by.linkText('Telegraphic Transfer [New]')).click();
    browser.sleep(5000);
  };
  /*open Bulk Collection UX menu*/
  this.toCreateCOLUXPage = function () {
    browser.executeScript("document.getElementById('pmt').parentElement.children[1]." +
      "style='opacity:1; margin-left: 0; width:320px;'");
    browser.sleep(1000);
    element(by.linkText('Bulk Collection [New]')).click();
    browser.sleep(5000);
  };
  /*open Payroll UX menu*/
  this.toCreateSALUXPage = function () {
    browser.executeScript("document.getElementById('pmt').parentElement.children[1]." +
      "style='opacity:1; margin-left: 0; width:320px;'");
    browser.sleep(1000);
    element(by.linkText('Payroll [New]')).click();
    browser.sleep(5000);
  };
  /*open Transfer Center menu*/
  this.toTransferCenterPage = function () {
    browser.executeScript("document.getElementById('pmt').parentElement.children[1]." +
      "style='opacity:1; margin-left: 0; width:320px;'");
    browser.sleep(1000);
    element(by.linkText('Transfer Center')).click();
  };
};
module.exports = NavigationPage;

/**
 * Created by Lee on 2017/5/11.
 */
var EC = protractor.ExpectedConditions;
var LoginPage = function () {
  var companyIdLocal = element(by.css('input[name=ssoCompanyID]'));
  var loginIdLocal = element(by.css('input[name=ssoUserid]'));
  var CBButton = element(by.css('input[name=submit_sbuserLogin]'));
  var SAMButton = element(by.css('input[name=submit_csrLogin]'));

  this.login245Env = function (companyId,userId) {
    browser.ignoreSynchronization = true;
    browser.get('https://192.168.0.245:9444/s1gcb/logon/loginSSO');
    /*enter company id*/
    browser.wait(EC.visibilityOf(companyIdLocal),30000);
    companyIdLocal.sendKeys(companyId);
    /*enter user id*/
    browser.wait(EC.visibilityOf(loginIdLocal),30000);
    loginIdLocal.sendKeys(userId);
    /*click CB button*/
    browser.wait(EC.elementToBeClickable(CBButton),30000);
    CBButton.click();
    browser.wait(EC.elementToBeClickable(element(by.id('previewButton_Link'))),30000);
    element(by.id('previewButton_Link')).click();
    browser.wait(EC.presenceOf(element(by.id('dbs'))),30000);
  };
  this.login245SAM = function (userId) {
    browser.ignoreSynchronization = true;
    browser.get('https://192.168.0.245:9444/s1gcb/logon/loginSSO');
    /*enter user id*/
    browser.wait(EC.visibilityOf(loginIdLocal),30000);
    loginIdLocal.sendKeys(userId);
    /*click CB button*/
    browser.wait(EC.elementToBeClickable(SAMButton),30000);
    SAMButton.click();
  };
  this.login248Env = function (companyId,userId) {
    browser.ignoreSynchronization = true;
    browser.get('https://192.168.0.248:9443/s1gcb/logon/loginSSO');
    /*enter company id*/
    browser.wait(EC.visibilityOf(companyIdLocal),30000);
    companyIdLocal.sendKeys(companyId);
    /*enter user id*/
    browser.wait(EC.visibilityOf(loginIdLocal),30000);
    loginIdLocal.sendKeys(userId);
    /*click CB button*/
    browser.wait(EC.elementToBeClickable(CBButton),30000);
    CBButton.click();
    browser.wait(EC.presenceOf(element(by.id('dbs'))),30000);
  };
  this.login248SAM = function (SAMUser) {

    browser.ignoreSynchronization = true;
    browser.get('https://192.168.0.248:9443/s1gcb/logon/loginSSO');
    /*enter user id*/
    browser.wait(EC.visibilityOf(element(by.css('input[name=ssoUserid]'))),5000);
    element(by.css('input[name=ssoUserid]')).sendKeys(SAMUser);
    /*click SAM button*/
    browser.wait(EC.elementToBeClickable(element(by.css('input[name=submit_csrLogin]'))),30000);
    element(by.css('input[name=submit_csrLogin]')).click();
    browser.wait(EC.visibilityOf(element(by.css('input[name=columnValue]'))),30000);
  };
  this.loginUATEnv = function () {
    browser.ignoreSynchronization = true;
    browser.get('https://ideal-uat.dbs.com/loginSubscriberv2/login/pin');
    /*enter organisation id*/
    browser.wait(EC.visibilityOf(element(by.id('OID'))),30000);
    element(by.id('OID')).clear();
    element(by.id('OID')).sendKeys('SG2BE11');
    /*enter user id*/
    browser.wait(EC.visibilityOf(element(by.id('UID'))),30000);
    element(by.id('UID')).clear();
    element(by.id('UID')).sendKeys('SG2BE11S11');
    /*enter pin*/
    browser.wait(EC.visibilityOf(element(by.id('PIN'))),30000);
    element(by.id('PIN')).clear();
    element(by.id('PIN')).sendKeys('123123');
    /*click Login button*/
    element(by.buttonText('Login')).click();
    /*enter Secure Access Code*/
    browser.wait(EC.visibilityOf(element(by.id('SAC'))),30000);
    element(by.id('SAC')).clear();
    element(by.id('SAC')).sendKeys('123123');
    /*click Submit button*/
    element(by.buttonText('Submit')).click();
    /*click Continue button*/
    browser.wait(EC.elementToBeClickable(element(by.buttonText('Continue'))),30000);
    element(by.buttonText('Continue')).click();
    /*click IDEAL3*/
    browser.wait(EC.elementToBeClickable(element(by.id('I3'))),30000);
    element(by.id('I3')).click();
    /*click Next button*/
    browser.wait(EC.elementToBeClickable(element(by.css('.btnBody'))),30000);
    element(by.css('.btnBody')).click();
    browser.wait(EC.presenceOf(element(by.id('dbs'))),30000);
  };
};
module.exports = LoginPage;

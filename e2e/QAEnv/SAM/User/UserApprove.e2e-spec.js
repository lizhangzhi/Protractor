/**
 * Created by Lee on 2017/5/29.
 */
var LoginPage = require('./../../../common-page-objects/Login-page');
var GetCorporationToViewPage = require('./../page-objects/GetCorporationToView-page');
var ParameterPage = require('./../../../common-page-objects/Parameter-page');
var UserPage = require('./page-objects/User-page');
var EC = protractor.ExpectedConditions;

describe('Create and Approve a new User',function () {
  var loginPage = new LoginPage();
  var getCorporationToViewPage = new GetCorporationToViewPage();
  var parameterPage = new ParameterPage();
  var userPage = new UserPage();

  beforeAll(function () {

    loginPage.login245SAM(parameterPage.SAMUser2);
    getCorporationToViewPage.toViewCorporationPage();
    userPage.userTab();
  });
  it('Approve a User',function () {

    /*click Approve Status link*/
    var pendingApprovalLink = element.all(by.partialLinkText('Pending')).first();
    // var pendingApprovalLink = element(by.partialLinkText('Pending'));
    browser.wait(EC.elementToBeClickable(pendingApprovalLink),30000);
    pendingApprovalLink.click();
    /*click Approve User button*/
    var approveUserButton = element(by.css('input[name=submit_approve]'));
    browser.wait(EC.elementToBeClickable(approveUserButton),30000);
    approveUserButton.click();
    /*approve successfully*/
    var message = element(by.id('msgBlockSuccess-successText'));
    browser.wait(EC.textToBePresentInElement(message,'Successful Submit'),30000);
    expect(message.getText()).toContain('Successful Submit');
  });
});

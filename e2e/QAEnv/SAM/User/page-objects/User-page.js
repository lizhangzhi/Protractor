/**
 * Created by Lee on 2017/5/29.
 */
var TimeStampPage = require('./../../../../common-page-objects/Time-page');
var ParameterPage = require('./../../../../common-page-objects/Parameter-page');

var EC = protractor.ExpectedConditions;

var UserCreatePage = function () {

  var parameterPage = new ParameterPage();
  var timeStampPage = new TimeStampPage();

  this.userTab = function () {
    /*click USERS menu*/
    var usersMenu = element(by.linkText('USERS'));
    browser.wait(EC.elementToBeClickable(usersMenu),30000);
    usersMenu.click();
  };

  this.clickPreviewBtn = function () {
    /*click preview user button*/
    var previewUserButton = element(by.name('submit_preview'));
    browser.wait(EC.elementToBeClickable(previewUserButton),30000);
    previewUserButton.click();
  };

  this.clickSubmitBtn = function () {
    /*click submit user button*/
    var submitUserButton = element(by.name('submit_submit'));
    browser.wait(EC.elementToBeClickable(submitUserButton),30000);
    submitUserButton.click();
  };

  this.searchUser = function (user) {
    /*enter new user id*/
    var searchFor = element(by.css('input[name=columnValue]'));
    browser.wait(EC.visibilityOf(searchFor),30000);
    searchFor.sendKeys(user);
    /*click button to search*/
    var searchButton = element(by.css('input[name=submit]'));
    browser.wait(EC.elementToBeClickable(searchButton),30000);
    searchButton.click();
  };

  this.newUser = function () {
    this.userTab();
    /*click New User label*/
    var newUser = element(by.partialLinkText('New User'));
    browser.wait(EC.elementToBeClickable(newUser),30000);
    newUser.click();
    /*enter a new User ID*/
    var userID = element(by.css('input[name=loginId]'));
    browser.wait(EC.visibilityOf(userID),30000);
    userID.sendKeys(parameterPage.NewCBUser+timeStampPage.getNowTime());
    /*click all checkbox*/
    var userEntitlement = element.all(by.css('input[type=checkbox]'));
    userEntitlement.filter(function(elem, index) {
      return elem.isSelected().then(function(value) {
        return value === false;
      });
    }).click();
    /*enter user name*/
    var userName = element(by.name('lastName'));
    browser.wait(EC.visibilityOf(userName),30000);
    userName.sendKeys(parameterPage.NewCBUser+timeStampPage.getNowTime());
    /*enter email address*/
    var emailAddress = element(by.name('email'));
    browser.wait(EC.visibilityOf(emailAddress),30000);
    emailAddress.sendKeys(parameterPage.EmailAddress);

    this.clickPreviewBtn();
    this.clickSubmitBtn();
  };
};
module.exports=UserCreatePage;

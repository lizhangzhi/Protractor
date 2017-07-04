/**
 * Created by Lee on 2017/6/1.
 */
var TimeStampPage = require('./../../../../common-page-objects/Time-page');
var ParameterPage = require('./../../../../common-page-objects/Parameter-page');
var EC = protractor.ExpectedConditions;

var GroupPage = function () {
  var timeStampPage = new TimeStampPage();
  var parameterPage = new ParameterPage();

  this.newGroup = function () {
    /*Click New Group button*/
    var newGroupBtn = element(by.buttonText('New Group'));
    browser.wait(EC.elementToBeClickable(newGroupBtn),30000);
    newGroupBtn.click();
    /*Enter Group Name*/
    var groupName = element(by.css('input[name=pnlGrpName]'));
    browser.wait(EC.visibilityOf(groupName),30000);
    groupName.sendKeys(parameterPage.groupName+timeStampPage.getNowTime());
    /*Select user to group*/
    var selectedUser = element(by.id('nonSelectedUsers'))
      .all(by.tagName('option')).get(3);
    browser.wait(EC.elementToBeClickable(selectedUser),30000);
    selectedUser.click();
    /*click Add Users button*/
    var addUsersBtn = element.all(by.css('.BigButton')).first();
    browser.wait(EC.elementToBeClickable(addUsersBtn),30000);
    addUsersBtn.click();
    /*click Preview Group button*/
    var previewGroupBtn = element(by.css('input[name=submit_preview]'));
    browser.wait(EC.elementToBeClickable(previewGroupBtn),30000);
    previewGroupBtn.click();
    /*click Sbumit Group button*/
    var submitGroupBtn = element(by.css('input[name=submit_submit]'));
    browser.wait(EC.elementToBeClickable(submitGroupBtn),30000);
    submitGroupBtn.click();
  };
};
module.exports = GroupPage;


/**
 * Created by Lee on 2017/5/26.
 */
var EC = protractor.ExpectedConditions;

var GetCorporationToViewPage = function () {

  this.toViewCorporationPage = function () {
    /*select corporation id*/
    var selectComId = element(by.name('columnName')).click()
                        .element(by.css('option[value=companyId]'));
    browser.wait(EC.elementToBeClickable(selectComId),30000);
    selectComId.click();
    /*enter corporation ID*/
    var searchBy = element(by.css('input[name=columnValue]'));
    searchBy.sendKeys('SG2BFE1');
    /*click Search button*/
    var searchButton = element(by.css('input[name=search]'));
    browser.wait(EC.elementToBeClickable(searchButton),30000);
    searchButton.click();
    /*click Corporation Name to view page*/
    var corporationName = element(by.linkText('LEONA ALBRECHT'));
    browser.wait(EC.elementToBeClickable(corporationName),30000);
    corporationName.click();
    /*wait for view page load*/
    var headline = element(by.css('.headline'));
    browser.wait(EC.textToBePresentInElement(headline, 'View Corporation'), 30000);
  };
};
module.exports = GetCorporationToViewPage;

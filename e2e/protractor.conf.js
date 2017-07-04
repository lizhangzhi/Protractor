/**
 * Created by Lee on 2017/5/9.
 */
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine2',
  // restartBrowserBetweenTests: true,
  // specs:['./QAEnv/SAM/User/UserApprove.e2e-spec.js'],
  // specs:['./QAEnv/SAM/User/UserCreate.e2e-spec.js'],
  // specs:['./QAEnv/CB/Payments/TelegraphicTransfer/SG/TTCreate.e2e-spec.js'],
  // specs:['./QAEnv/CB/Payments/TelegraphicTransfer(UX)/SGTTCreate.e2e-spec.js'],
  // specs:['./QAEnv/CB/Payments/Payroll(UX)/SG/SALUXCreate.e2e-spec.js'],
  // specs:['./QAEnv/CB/Payments/SinglePayment(UX)/AccountTransfer(UX)/SG/ACTCreate.e2e-spec.js'],
  // specs:['./QAEnv/CB/Payments/SinglePayment(UX)/TelegraphicTransfer(UX)/SG/TTSave.e2e-spec.js']s
  // specs:['./QAEnv/CB/Payments/SinglePayment(UX)/FASTPayment(UX)/FASTCreate.e2e-spec.js'],
  specs:['./QAEnv/CB/Payments/SinglePayment(UX)/MEPSPayment(UX)/MEPSCreate.e2e-spec.js'],
  // suites:{
  //   search:[
  //     // './QAEnv/CB/Payments/TelegraphicTransfer/SG/*.e2e-spec.js',
  //   // './QAEnv/CB/Payments/TelegraphicTransfer(UX)/*.e2e-spec.js',
  //   './QAEnv/SAM/User/*.e2e-spec.js'
  //     // './QAEnv/SAM/Operations/*/*.e2e-spec.js'
  //   ]
  // },
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['incognito']
    }
  },

  allScriptsTimeout: 60000,
  jasmineNodeOpts: {defaultTimeoutInterval: 500000},

  onPrepare: function() {

    // browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'F:/Angular2 Project/UX E2E Report',
        // screenshotsFolder: 'F:/Angular2 Project/test screenshot',
        takeScreenshots: true,
        takeScreenshotsOnlyOnFailures: false,
        fixedScreenshotName: false,
        fileNamePrefix: 'UX',
        cleanDestination: true,
        fileName: 'Protractor Report',
        fileNameSeparator: '_',
        fileNameDateSuffix: true
      })
    );
  }
};

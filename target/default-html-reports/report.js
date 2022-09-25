$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/study.feature");
formatter.feature({
  "name": "Case Study Tests",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "homepage is open",
  "keyword": "Given "
});
formatter.match({
  "location": "casestudy.step_def.MyStepdefs.homepageIsOpen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close pop-up",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy.step_def.MyStepdefs.closePopUp()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify payment page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Go to Dizaltı Çorap category page",
  "keyword": "Then "
});
formatter.match({
  "location": "casestudy.step_def.MyStepdefs.goToCategoryPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filter product color with Siyah",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy.step_def.MyStepdefs.filterProductColorWith()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Go to any product detail page",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy.step_def.MyStepdefs.goToAnyProductDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add product to basket",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy.step_def.MyStepdefs.addProductToBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Go to basket page",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy.step_def.MyStepdefs.goToBasketPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Go to payment page",
  "keyword": "When "
});
formatter.match({
  "location": "casestudy.step_def.MyStepdefs.goToPaymentPage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".js-shipping-list li:nth-child(1)\"}\n  (Session info: chrome\u003d105.0.5195.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-HT012NT\u0027, ip: \u0027192.168.1.41\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_345\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [25721fd3b68a4477d26b80823d10680d, findElement {using\u003dcss selector, value\u003d.js-shipping-list li:nth-child(1)}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.127, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\ysfcl\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59196}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59196/devtoo..., se:cdpVersion: 105.0.5195.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 25721fd3b68a4477d26b80823d10680d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat casestudy.pages.BasketPage.goToPaymentPage(BasketPage.java:99)\r\n\tat casestudy.step_def.MyStepdefs.goToPaymentPage(MyStepdefs.java:54)\r\n\tat ✽.Go to payment page(file:///C:/Users/ysfcl/IdeaProjects/A101CaseStudy/src/test/resources/features/study.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Verfiy payment page",
  "keyword": "Then "
});
formatter.match({
  "location": "casestudy.step_def.MyStepdefs.verfiyPaymentPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});
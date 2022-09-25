package casestudy.pages;

import casestudy.utils.Driver;
import casestudy.utils.Helper;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class BasketPage {
    Helper helper = new Helper();

    public BasketPage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(css="a.checkout-button")
    public WebElement checkoutButton;
    @FindBy(css=".js-proceed-to-checkout-btn")
    public WebElement withoutRegisterButton;
    @FindBy(css="input[name=\"user_email\"]")
    public WebElement emailInput;
    @FindBy(css=".js-proceed-to-checkout-form button")
    public WebElement continueButton;
    @FindBy(css="div.addresses > div.list > ul:nth-child(3) > li > a")
    public WebElement newAddressButton;
    @FindBy(css="input[name=\"title\"]")
    public WebElement addressTitle;
    @FindBy(css="input[name=\"first_name\"]")
    public WebElement addressFirstName;
    @FindBy(css="input[name=\"last_name\"]")
    public WebElement addressLastName;
    @FindBy(css="input[name=\"phone_number\"]")
    public WebElement addressPhoneNumber;
    @FindBy(css="select[name=\"city\"]")
    public WebElement addressCitySelectBox;
    @FindBy(css="select[name=\"city\"] option:nth-child(2)")
    public WebElement addressCity;
    @FindBy(css="select[name=\"township\"")
    public WebElement addressTownshipSelectBox;
    @FindBy(css="select[name=\"township\"] option:nth-child(2)")
    public WebElement addressTownship;
    @FindBy(css=".js-district")
    public WebElement addressDistrictSelectBox;
    @FindBy(css="select.js-district option:nth-child(3)")
    public WebElement addressDistrict;
    @FindBy(css=".js-address-textarea")
    public WebElement addressText;
    @FindBy(css=".js-address-form .js-set-country")
    public WebElement addressSubmitButton;

    @FindBy(css=".js-shipping-list li:nth-child(1)")
    public WebElement selectCargoButton;

    @FindBy(css="js-set-country")
    public WebElement continueSubmitButton;



    public void goToPaymentPage() {
        checkoutButton.click();
        withoutRegisterButton.click();
        emailInput.click();
        emailInput.sendKeys("aysenur@test.com");
        continueButton.click();


        newAddressButton.click();

        addressTitle.click();
        addressTitle.sendKeys("Evimmm");

        addressFirstName.click();
        addressFirstName.sendKeys("Ayşenur");

        addressLastName.click();
        addressLastName.sendKeys("Kaynar");

        addressPhoneNumber.click();
        addressPhoneNumber.sendKeys("5550030322");

        addressCitySelectBox.click();
        addressCity.click();

        addressTownshipSelectBox.click();
        addressTownship.click();

        addressDistrictSelectBox.click();
        helper.waitFor(1);
        addressDistrict.click();


        addressText.click();
        addressText.sendKeys("Adres adres adres cad. Adres Sok");

        addressSubmitButton.click();
        helper.waitFor(1);

        selectCargoButton.click();
        continueSubmitButton.click();


    }
}